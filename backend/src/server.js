import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import { newId, readDb, writeDb } from './db.js';

const app = express();
const upload = multer({ storage: multer.memoryStorage() });
const PORT = process.env.PORT || 5051;
const HOST = process.env.HOST || '127.0.0.1';
const JWT_SECRET = process.env.JWT_SECRET || 'test-secret';

app.use(cors({ origin: process.env.FRONTEND_URL || '*', credentials: true }));
app.use(express.json({ limit: '2mb' }));

const publicUser = (user) => user && ({ id: user.id, name: user.name, email: user.email, role: user.role, phone: user.phone || '' });
const sign = (user) => jwt.sign(publicUser(user), JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });

function auth(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Authentification requise' });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Token invalide' });
  }
}

function admin(req, res, next) {
  if (req.user?.role !== 'admin') return res.status(403).json({ error: 'Acces admin requis' });
  next();
}

function crud(collection) {
  app.get(`/api/${collection}`, (req, res) => res.json(readDb()[collection]));
  app.post(`/api/admin/${collection}`, auth, admin, (req, res) => {
    const db = readDb();
    const item = { id: newId(collection[0]), ...req.body };
    db[collection].push(item);
    writeDb(db);
    res.status(201).json(item);
  });
  app.put(`/api/admin/${collection}/:id`, auth, admin, (req, res) => {
    const db = readDb();
    const i = db[collection].findIndex((x) => x.id === req.params.id);
    if (i === -1) return res.status(404).json({ error: 'Introuvable' });
    db[collection][i] = { ...db[collection][i], ...req.body, id: req.params.id };
    writeDb(db);
    res.json(db[collection][i]);
  });
  app.delete(`/api/admin/${collection}/:id`, auth, admin, (req, res) => {
    const db = readDb();
    db[collection] = db[collection].filter((x) => x.id !== req.params.id);
    writeDb(db);
    res.json({ ok: true });
  });
}

crud('products');
crud('workshops');
crud('posts');

app.post('/api/auth/register', (req, res) => {
  const db = readDb();
  const { name, email, password, phone } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: 'Champs requis manquants' });
  if (db.users.some((u) => u.email === email)) return res.status(409).json({ error: 'Email deja utilise' });
  const user = { id: newId('u'), name, email, password, phone, role: 'client' };
  db.users.push(user);
  writeDb(db);
  res.status(201).json({ token: sign(user), user: publicUser(user) });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = readDb().users.find((u) => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ error: 'Identifiants invalides' });
  res.json({ token: sign(user), user: publicUser(user) });
});

app.get('/api/me', auth, (req, res) => res.json({ user: req.user }));
app.put('/api/me', auth, (req, res) => {
  const db = readDb();
  const i = db.users.findIndex((u) => u.id === req.user.id);
  db.users[i] = { ...db.users[i], name: req.body.name ?? db.users[i].name, phone: req.body.phone ?? db.users[i].phone };
  writeDb(db);
  res.json({ user: publicUser(db.users[i]), token: sign(db.users[i]) });
});

app.post('/api/orders', auth, (req, res) => {
  const db = readDb();
  const items = (req.body.items || []).map((item) => {
    const product = db.products.find((p) => p.id === item.productId);
    return product ? { productId: product.id, name: product.name, quantity: Number(item.quantity || 1), price: product.price } : null;
  }).filter(Boolean);
  if (!items.length) return res.status(400).json({ error: 'Panier vide' });
  const order = { id: newId('o'), userId: req.user.id, items, total: items.reduce((s, i) => s + i.price * i.quantity, 0), status: 'payee - simulation', createdAt: new Date().toISOString() };
  db.orders.push(order);
  writeDb(db);
  res.status(201).json(order);
});

app.put('/api/orders/:id/cancel', auth, (req, res) => {
  const db = readDb();
  const order = db.orders.find((o) => o.id === req.params.id && o.userId === req.user.id);
  if (!order) return res.status(404).json({ error: 'Commande introuvable' });
  order.status = 'annulee';
  order.cancelledAt = new Date().toISOString();
  writeDb(db);
  res.json(order);
});

app.post('/api/reservations', auth, (req, res) => {
  const db = readDb();
  const workshop = db.workshops.find((w) => w.id === req.body.workshopId);
  const seats = Number(req.body.seats || 1);
  if (!workshop || seats < 1 || workshop.seats < seats) return res.status(400).json({ error: 'Reservation impossible' });
  workshop.seats -= seats;
  const reservation = { id: newId('r'), userId: req.user.id, workshopId: workshop.id, workshopTitle: workshop.title, seats, total: workshop.price * seats, createdAt: new Date().toISOString() };
  db.reservations.push(reservation);
  writeDb(db);
  res.status(201).json(reservation);
});

app.put('/api/reservations/:id/cancel', auth, (req, res) => {
  const db = readDb();
  const reservation = db.reservations.find((r) => r.id === req.params.id && r.userId === req.user.id);
  if (!reservation) return res.status(404).json({ error: 'Reservation introuvable' });
  if (reservation.status !== 'annulee') {
    const workshop = db.workshops.find((w) => w.id === reservation.workshopId);
    if (workshop) workshop.seats += Number(reservation.seats || 0);
  }
  reservation.status = 'annulee';
  reservation.cancelledAt = new Date().toISOString();
  writeDb(db);
  res.json(reservation);
});

app.post('/api/contact', (req, res) => {
  const db = readDb();
  const message = { id: newId('m'), ...req.body, createdAt: new Date().toISOString() };
  db.messages.push(message);
  writeDb(db);
  res.status(201).json(message);
});

app.put('/api/admin/orders/:id/status', auth, admin, (req, res) => {
  const db = readDb();
  const order = db.orders.find((o) => o.id === req.params.id);
  if (!order) return res.status(404).json({ error: 'Commande introuvable' });
  order.status = req.body.status || order.status;
  order.updatedAt = new Date().toISOString();
  writeDb(db);
  res.json(order);
});

app.put('/api/admin/reservations/:id/status', auth, admin, (req, res) => {
  const db = readDb();
  const reservation = db.reservations.find((r) => r.id === req.params.id);
  if (!reservation) return res.status(404).json({ error: 'Reservation introuvable' });
  reservation.status = req.body.status || reservation.status;
  reservation.updatedAt = new Date().toISOString();
  writeDb(db);
  res.json(reservation);
});

app.delete('/api/admin/messages/:id', auth, admin, (req, res) => {
  const db = readDb();
  db.messages = db.messages.filter((m) => m.id !== req.params.id);
  writeDb(db);
  res.json({ ok: true });
});

app.post('/api/admin/upload', auth, admin, upload.single('image'), (req, res) => {
  res.json({ url: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME || 'demo'}/image/upload/sample-coffeearts-${Date.now()}.jpg`, note: 'Upload Cloudinary simule pour examen local' });
});

app.get('/api/client/summary', auth, (req, res) => {
  const db = readDb();
  res.json({
    orders: db.orders.filter((o) => o.userId === req.user.id),
    reservations: db.reservations.filter((r) => r.userId === req.user.id)
  });
});

app.get('/api/admin/dashboard', auth, admin, (req, res) => {
  const db = readDb();
  res.json({
    stats: {
      products: db.products.length,
      workshops: db.workshops.length,
      orders: db.orders.length,
      reservations: db.reservations.length,
      messages: db.messages.length,
      users: db.users.length,
      revenue: db.orders.reduce((s, o) => s + o.total, 0) + db.reservations.reduce((s, r) => s + r.total, 0)
    },
    orders: db.orders,
    reservations: db.reservations,
    messages: db.messages,
    users: db.users.map(publicUser)
  });
});

app.get('/api/health', (req, res) => res.json({ ok: true }));
app.listen(PORT, HOST, () => console.log(`API Coffee Arts Paris sur http://${HOST}:${PORT}`));
