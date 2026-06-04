import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5051/api';
async function request(path, options = {}) {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API}${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...(options.headers || {}) }
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Erreur API');
  return data;
}

function App() {
  const [page, setPage] = useState('Accueil');
  const [products, setProducts] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [posts, setPosts] = useState([]);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart') || '[]'));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || 'null'));
  const [notice, setNotice] = useState('');

  const load = async () => {
    const [p, w, b] = await Promise.all([request('/products'), request('/workshops'), request('/posts')]);
    setProducts(p); setWorkshops(w); setPosts(b);
  };

  useEffect(() => { load().catch((e) => setNotice(e.message)); }, []);
  useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart]);

  const cartTotal = useMemo(() => cart.reduce((s, item) => s + item.price * item.quantity, 0), [cart]);
  const addCart = (product) => setCart((items) => {
    const found = items.find((x) => x.productId === product.id);
    return found ? items.map((x) => x.productId === product.id ? { ...x, quantity: x.quantity + 1 } : x) : [...items, { productId: product.id, name: product.name, price: product.price, quantity: 1 }];
  });
  const login = ({ token, user: nextUser }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(nextUser));
    setUser(nextUser);
  };
  const logout = () => {
    localStorage.removeItem('token'); localStorage.removeItem('user'); setUser(null);
  };

  return (
    <>
      <header className="topbar">
        <nav className="navSide navLeft" aria-label="Navigation principale gauche">
          <button className={page === 'Café' ? 'active' : ''} onClick={() => setPage('Café')}>Café</button>
          <button className={page === 'Ateliers' ? 'active' : ''} onClick={() => setPage('Ateliers')}>Céramique</button>
          <button className={page === 'Boutique' ? 'active' : ''} onClick={() => setPage('Boutique')}>Boutique</button>
          <button className={page === 'Evénements' ? 'active' : ''} onClick={() => setPage('Evénements')}>Événements</button>
        </nav>
        <button className="brand" onClick={() => setPage('Accueil')} aria-label="Accueil Coffee Arts Paris">
          <span className="brandMark">
            <span></span><span></span><span></span><span></span><span></span>
          </span>
          <strong>Coffee Arts</strong>
          <small>Paris</small>
        </button>
        <nav className="navSide navRight" aria-label="Navigation principale droite">
          <button className={page === 'Blog' ? 'active' : ''} onClick={() => setPage('Blog')}>Blog</button>
          <button className={page === 'À propos' ? 'active' : ''} onClick={() => setPage('À propos')}>Nos engagements</button>
          <button className={page === 'Contact' ? 'active' : ''} onClick={() => setPage('Contact')}>Contact</button>
          <button className={page === 'Client' ? 'active' : ''} onClick={() => setPage('Client')}>Espace client</button>
          <button className={page === 'Admin' ? 'active' : ''} onClick={() => setPage('Admin')}>Admin</button>
        </nav>
        <div className="navIcons">
          <button className="iconButton" onClick={() => setPage('Boutique')} aria-label={`Panier ${cart.length} articles`}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8h12l-1 12H7L6 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/><path d="M9 12h6"/></svg>
            {cart.length > 0 && <span>{cart.length}</span>}
          </button>
          <button className="iconButton cupButton" onClick={() => setPage('Café')} aria-label="Café">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h10v5a5 5 0 0 1-10 0V8Z"/><path d="M15 9h2a3 3 0 0 1 0 6h-1"/><path d="M6 4h8"/><path d="M8 2v3M12 2v3"/></svg>
          </button>
        </div>
      </header>
      {notice && <div className="notice">{notice}</div>}
      <main>
        {page === 'Accueil' && <Home products={products} workshops={workshops} setPage={setPage} />}
        {page === 'Café' && <Cafe />}
        {page === 'Ateliers' && <Workshops workshops={workshops} user={user} setPage={setPage} setNotice={setNotice} load={load} />}
        {page === 'Boutique' && <Shop products={products} cart={cart} setCart={setCart} addCart={addCart} total={cartTotal} user={user} setPage={setPage} setNotice={setNotice} />}
        {page === 'Evénements' && <Events />}
        {page === 'Blog' && <Blog posts={posts} />}
        {page === 'À propos' && <About />}
        {page === 'Contact' && <Contact setNotice={setNotice} />}
        {page === 'Client' && <Client user={user} login={login} logout={logout} setNotice={setNotice} />}
        {page === 'Admin' && <Admin user={user} login={login} logout={logout} setNotice={setNotice} load={load} products={products} workshops={workshops} posts={posts} />}
      </main>
      <FloatingSocial />
      <SiteFooter setPage={setPage} />
    </>
  );
}

function Home({ products, workshops, setPage }) {
  const experiences = [
    { label: 'DÉGUSTER', title: 'Café de spécialité', cta: 'Découvrir la carte', page: 'Café', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop' },
    { label: 'CRÉER', title: 'Ateliers créatifs', cta: 'Participer à un atelier', page: 'Ateliers', image: 'https://images.unsplash.com/photo-1493106819501-66d381c466f1?q=80&w=1200&auto=format&fit=crop' },
    { label: 'EMPORTER', title: 'La boutique', cta: 'Explorer la boutique', page: 'Boutique', image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1200&auto=format&fit=crop' }
  ];
  const gallery = [
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=900&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=900&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=900&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=900&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1493106819501-66d381c466f1?q=80&w=900&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=900&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=900&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=900&auto=format&fit=crop'
  ];
  return (
    <>
      <section className="hero">
        <div className="heroMedia" />
        <div className="heroOverlay" />
        <div className="heroContent">
          <h1>Specialty coffee & pottery studio</h1>
          <p>Sip, create and connect</p>
          <span>Un lieu hybride où l'on vient savourer un café, créer de ses mains et partager un moment, simplement.</span>
          <small>25 boulevard du Temple, 75003 Paris</small>
          <div className="actions">
            <button onClick={() => setPage('Ateliers')}>Réserver un atelier</button>
            <button onClick={() => setPage('Café')}>Découvrir la carte</button>
          </div>
        </div>
      </section>
      <section className="introSection">
        <SectionTitle title="Trois expériences, un même lieu" text="Un café de spécialité, des ateliers créatifs et une boutique, pensés pour se compléter." />
        <div className="experienceGrid">
          {experiences.map((item) => (
            <button className="experienceCard" key={item.title} onClick={() => setPage(item.page)}>
              <img src={item.image} alt={item.title} />
              <span className="experienceShade" />
              <span className="experienceText">
                <small>{item.label}</small>
                <strong>{item.title}</strong>
                <em>{item.cta}</em>
              </span>
            </button>
          ))}
        </div>
      </section>
      <section className="creamBand">
        <SectionTitle title="Au cœur de Coffee Arts Paris" text="Des images pour découvrir l'ambiance du lieu, ses matières, et les instants qui s'y vivent au quotidien." />
        <div className="galleryGrid">{gallery.map((src) => <img key={src} src={src} alt="Coffee Arts Paris" />)}</div>
      </section>
      <section>
        <SectionTitle title="Instants Coffee Arts Paris" text="Nos dernières inspirations, nos moments créatifs et la vie du café à retrouver sur Instagram." />
        <div className="grid three">{products.slice(0, 3).map((p) => <Card key={p.id} item={p} />)}</div>
      </section>
      <section className="ctaSection">
        <h2>Un moment autour du café<br />et de la création</h2>
        <p>Un lieu où l'on vient créer, discuter, boire un café et s'attarder.<br />Des moments simples, à vivre et à partager.</p>
        <div className="actions centered">
          <button onClick={() => setPage('Ateliers')}>Découvrir les ateliers</button>
          <button onClick={() => setPage('Boutique')}>Accéder à la boutique</button>
        </div>
      </section>
      <section className="band"><h2>Prochains ateliers</h2><div className="grid three">{workshops.map((w) => <Card key={w.id} item={{ ...w, name: w.title }} />)}</div></section>
    </>
  );
}

function SectionTitle({ title, text }) {
  return <div className="sectionTitle"><h2>{title}</h2><p>{text}</p></div>;
}

function Cafe() {
  const menu = ['Espresso 3.50', 'Flat white 5.00', 'Latte vanille 5.50', 'Filtre V60 6.00', 'Matcha latte 6.50'];
  return <section><h1>Café / Carte</h1><div className="menu">{menu.map((m) => <p key={m}>{m} EUR</p>)}</div><p className="lead">Carte inspirée café de spécialité avec boissons chaudes, glacées, pâtisseries et options végétales.</p></section>;
}

function Workshops({ workshops, user, setPage, setNotice, load }) {
  const reserve = async (id) => {
    if (!user) return setPage('Client');
    await request('/reservations', { method: 'POST', body: JSON.stringify({ workshopId: id, seats: 1 }) });
    setNotice('Reservation enregistree');
    load();
  };
  return <section><h1>Ateliers</h1><div className="grid three">{workshops.map((w) => <article className="card" key={w.id}><img src={w.image} /><h3>{w.title}</h3><p>{w.description}</p><b>{w.price} EUR</b><span>{w.date} a {w.time} - {w.seats} places</span><button onClick={() => reserve(w.id)}>Reserver</button></article>)}</div></section>;
}

function Shop({ products, cart, setCart, addCart, total, user, setPage, setNotice }) {
  const checkout = async () => {
    if (!user) return setPage('Client');
    await request('/orders', { method: 'POST', body: JSON.stringify({ items: cart }) });
    setCart([]);
    setNotice('Commande payee en simulation');
  };
  return <section><h1>Boutique</h1><div className="grid shop"><div className="grid two">{products.map((p) => <article className="card" key={p.id}><img src={p.image} /><h3>{p.name}</h3><p>{p.description}</p><span>{p.category} - Stock {p.stock}</span><b>{p.price} EUR</b><button onClick={() => addCart(p)}>Ajouter au panier</button></article>)}</div><aside className="panel"><h2>Panier</h2>{cart.map((item) => <div className="cartLine" key={item.productId}><span>{item.name}</span><input type="number" min="1" value={item.quantity} onChange={(e) => setCart(cart.map((x) => x.productId === item.productId ? { ...x, quantity: Number(e.target.value) } : x))} /><button onClick={() => setCart(cart.filter((x) => x.productId !== item.productId))}>Supprimer</button></div>)}<strong>Total {total.toFixed(2)} EUR</strong><button disabled={!cart.length} onClick={checkout}>Paiement simule</button></aside></div></section>;
}

function Events() {
  return <section><h1>Evénements</h1><div className="grid three">{['Brunch créatif', 'Soirée latte art', 'Privatisation entreprise'].map((e) => <article className="card" key={e}><h3>{e}</h3><p>Programmation conviviale autour du café, de la création et des rencontres.</p><button>Demander une date</button></article>)}</div></section>;
}

function Blog({ posts }) {
  return <section><h1>Blog</h1><div className="grid two">{posts.map((p) => <article className="card" key={p.id}><img src={p.image} /><h3>{p.title}</h3><p>{p.excerpt}</p><span>{p.content}</span></article>)}</div></section>;
}

function About() {
  return <section><h1>À propos</h1><p className="lead">Coffee Arts Paris mélange coffee shop, atelier de céramique, galerie d'objets et boutique en ligne. Le projet met en avant des produits artisanaux, des ateliers accessibles et une expérience client fluide.</p></section>;
}

function Contact({ setNotice }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const submit = async (e) => { e.preventDefault(); await request('/contact', { method: 'POST', body: JSON.stringify(form) }); setForm({ name: '', email: '', subject: '', message: '' }); setNotice('Message envoye et visible cote admin'); };
  return <section><h1>Contact</h1><form onSubmit={submit} className="form">{['name', 'email', 'subject'].map((k) => <input key={k} required placeholder={k} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} />)}<textarea required placeholder="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /><button>Envoyer</button></form></section>;
}

function AuthBox({ login, adminMode }) {
  const [form, setForm] = useState({ name: 'Client Demo', email: adminMode ? 'admin@coffeearts.test' : 'client@coffeearts.test', password: adminMode ? 'admin123' : 'client123' });
  const submit = async (e) => { e.preventDefault(); login(await request('/auth/login', { method: 'POST', body: JSON.stringify(form) })); };
  const register = async () => login(await request('/auth/register', { method: 'POST', body: JSON.stringify(form) }));
  return <form onSubmit={submit} className="form compact"><input placeholder="Nom" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /><input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /><input placeholder="Mot de passe" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /><button>Connexion</button>{!adminMode && <button type="button" onClick={register}>Inscription</button>}</form>;
}

function Client({ user, login, logout, setNotice }) {
  const [summary, setSummary] = useState({ orders: [], reservations: [] });
  const [profile, setProfile] = useState(user || {});
  const loadSummary = () => request('/client/summary').then(setSummary).catch((e) => setNotice(e.message));
  useEffect(() => { if (user) loadSummary(); setProfile(user || {}); }, [user]);
  if (!user) return <section><h1>Espace client</h1><AuthBox login={login} /></section>;
  const save = async () => { const data = await request('/me', { method: 'PUT', body: JSON.stringify(profile) }); login(data); };
  const cancelOrder = async (id) => { await request(`/orders/${id}/cancel`, { method: 'PUT' }); setNotice('Commande annulee'); loadSummary(); };
  const cancelReservation = async (id) => { await request(`/reservations/${id}/cancel`, { method: 'PUT' }); setNotice('Reservation annulee'); loadSummary(); };
  return <section><h1>Espace client</h1><button onClick={logout}>Deconnexion</button><div className="grid clientGrid"><div className="panel profilePanel"><h2>Profil</h2><input value={profile.name || ''} onChange={(e) => setProfile({ ...profile, name: e.target.value })} /><input value={profile.phone || ''} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} /><button onClick={save}>Modifier</button></div><OrderList orders={summary.orders} onCancel={cancelOrder} /><ReservationList reservations={summary.reservations} onCancel={cancelReservation} /></div></section>;
}

function Admin({ user, login, logout, setNotice, load, products, workshops, posts }) {
  const [dashboard, setDashboard] = useState(null);
  const [tab, setTab] = useState('dashboard');
  const collections = { products, workshops, posts };
  const loadDashboard = () => request('/admin/dashboard').then(setDashboard).catch((e) => setNotice(e.message));
  useEffect(() => { if (user?.role === 'admin') loadDashboard(); }, [user]);
  if (!user || user.role !== 'admin') return <section><h1>Administration</h1><AuthBox login={login} adminMode /></section>;
  const refreshAll = () => { load(); loadDashboard(); };
  const updateOrder = async (id, status) => { await request(`/admin/orders/${id}/status`, { method: 'PUT', body: JSON.stringify({ status }) }); setNotice('Statut commande mis a jour'); loadDashboard(); };
  const updateReservation = async (id, status) => { await request(`/admin/reservations/${id}/status`, { method: 'PUT', body: JSON.stringify({ status }) }); setNotice('Statut reservation mis a jour'); loadDashboard(); };
  const removeMessage = async (id) => { await request(`/admin/messages/${id}`, { method: 'DELETE' }); setNotice('Message supprime'); loadDashboard(); };
  return (
    <section className="adminPage">
      <div className="adminHero">
        <div>
          <span>Back-office Coffee Arts Paris</span>
          <h1>Administration</h1>
        </div>
        <button onClick={logout}>Deconnexion</button>
      </div>
      {dashboard && <AdminStats stats={dashboard.stats} />}
      <div className="tabs adminTabs">
        {['dashboard', 'products', 'workshops', 'posts', 'orders', 'reservations', 'messages', 'users'].map((k) => <button className={tab === k ? 'active' : ''} onClick={() => setTab(k)} key={k}>{adminTabLabel(k)}</button>)}
      </div>
      {tab === 'dashboard' && dashboard && <AdminOverview dashboard={dashboard} setTab={setTab} />}
      {collections[tab] && <AdminCrud tab={tab} items={collections[tab]} reload={refreshAll} setNotice={setNotice} />}
      {tab === 'orders' && dashboard && <AdminOrders orders={dashboard.orders} onStatus={updateOrder} />}
      {tab === 'reservations' && dashboard && <AdminReservations reservations={dashboard.reservations} onStatus={updateReservation} />}
      {tab === 'messages' && dashboard && <AdminMessages messages={dashboard.messages} onRemove={removeMessage} />}
      {tab === 'users' && dashboard && <AdminUsers users={dashboard.users} />}
    </section>
  );
}

function AdminCrud({ tab, items, reload, setNotice }) {
  const empty = tab === 'workshops' ? { title: '', price: 0, seats: 1, date: '2026-06-20', time: '15:00', image: '', description: '' } : tab === 'posts' ? { title: '', excerpt: '', content: '', image: '' } : { name: '', category: '', price: 0, stock: 1, image: '', description: '' };
  const [form, setForm] = useState(empty);
  useEffect(() => setForm(empty), [tab]);
  const save = async () => { await request(`/admin/${tab}`, { method: 'POST', body: JSON.stringify(form) }); setNotice('Element ajoute'); reload(); };
  const remove = async (id) => { await request(`/admin/${tab}/${id}`, { method: 'DELETE' }); setNotice('Element supprime'); reload(); };
  return <div className="panel"><h2>Gestion {tab}</h2><div className="form gridInputs">{Object.keys(empty).map((k) => <input key={k} placeholder={k} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} />)}<button onClick={save}>Ajouter</button></div><div className="table">{items.map((it) => <div key={it.id}><span>{it.name || it.title}</span><button onClick={() => remove(it.id)}>Supprimer</button></div>)}</div></div>;
}

function Card({ item }) {
  return <article className="card"><img src={item.image} /><h3>{item.name}</h3><p>{item.description}</p></article>;
}

function List({ title, items }) {
  return <div className="panel"><h2>{title}</h2>{items?.length ? items.map((item) => <pre key={item.id}>{JSON.stringify(item, null, 2)}</pre>) : <p>Aucun element</p>}</div>;
}

function adminTabLabel(tab) {
  return ({ dashboard: 'Dashboard', products: 'Produits', workshops: 'Ateliers', posts: 'Blog', orders: 'Commandes', reservations: 'Reservations', messages: 'Messages', users: 'Utilisateurs' })[tab] || tab;
}

function AdminStats({ stats }) {
  const labels = { products: 'Produits', workshops: 'Ateliers', orders: 'Commandes', reservations: 'Reservations', messages: 'Messages', users: 'Utilisateurs', revenue: 'Revenu' };
  return <div className="stats">{Object.entries(stats).map(([k, v]) => <div key={k}><b>{k === 'revenue' ? formatPrice(v) : v}</b><span>{labels[k] || k}</span></div>)}</div>;
}

function AdminOverview({ dashboard, setTab }) {
  const latestOrders = dashboard.orders.slice(-3).reverse();
  const latestMessages = dashboard.messages.slice(-3).reverse();
  return (
    <div className="adminOverview">
      <div className="panel adminSummary">
        <div className="panelHeader"><div><h2>Activite recente</h2><p>Commandes et messages a traiter</p></div></div>
        <div className="adminMiniList">
          {latestOrders.map((order) => <button key={order.id} onClick={() => setTab('orders')}><span>Commande #{order.id.slice(-6).toUpperCase()}</span><b>{formatPrice(order.total)}</b></button>)}
          {latestMessages.map((message) => <button key={message.id} onClick={() => setTab('messages')}><span>{message.subject}</span><b>{message.name}</b></button>)}
        </div>
      </div>
      <div className="panel adminSummary">
        <div className="panelHeader"><div><h2>Actions rapides</h2><p>Gestion du contenu</p></div></div>
        <div className="quickActions">
          <button onClick={() => setTab('products')}>Ajouter produit</button>
          <button onClick={() => setTab('workshops')}>Ajouter atelier</button>
          <button onClick={() => setTab('posts')}>Ajouter article</button>
        </div>
      </div>
    </div>
  );
}

function AdminOrders({ orders, onStatus }) {
  return <div className="panel adminListPanel"><div className="panelHeader"><div><h2>Commandes</h2><p>{orders.length} commandes client</p></div></div><div className="adminTable">{orders.map((order) => <div className="adminRow" key={order.id}><div><strong>#{order.id.slice(-6).toUpperCase()}</strong><span>{formatDate(order.createdAt)} · {order.items.length} article(s)</span></div><b>{formatPrice(order.total)}</b><select value={order.status} onChange={(e) => onStatus(order.id, e.target.value)}><option value="payee - simulation">Payee</option><option value="en preparation">En preparation</option><option value="livree">Livree</option><option value="annulee">Annulee</option></select></div>)}</div></div>;
}

function AdminReservations({ reservations, onStatus }) {
  return <div className="panel adminListPanel"><div className="panelHeader"><div><h2>Reservations</h2><p>{reservations.length} reservations atelier</p></div></div><div className="adminTable">{reservations.map((reservation) => <div className="adminRow" key={reservation.id}><div><strong>{reservation.workshopTitle}</strong><span>#{reservation.id.slice(-6).toUpperCase()} · {reservation.seats} place(s) · {formatDate(reservation.createdAt)}</span></div><b>{formatPrice(reservation.total)}</b><select value={reservation.status || 'confirmee'} onChange={(e) => onStatus(reservation.id, e.target.value)}><option value="confirmee">Confirmee</option><option value="terminee">Terminee</option><option value="annulee">Annulee</option></select></div>)}</div></div>;
}

function AdminMessages({ messages, onRemove }) {
  return <div className="panel adminListPanel"><div className="panelHeader"><div><h2>Messages</h2><p>{messages.length} messages de contact</p></div></div><div className="messageGrid">{messages.map((message) => <article className="messageCard" key={message.id}><div><strong>{message.subject}</strong><span>{message.name} · {message.email}</span></div><p>{message.message}</p><small>{formatDate(message.createdAt)}</small><button className="secondaryButton" onClick={() => onRemove(message.id)}>Supprimer</button></article>)}</div></div>;
}

function AdminUsers({ users }) {
  return <div className="panel adminListPanel"><div className="panelHeader"><div><h2>Utilisateurs</h2><p>{users.length} comptes</p></div></div><div className="adminTable">{users.map((user) => <div className="adminRow" key={user.id}><div><strong>{user.name}</strong><span>{user.email} · {user.phone || 'Sans telephone'}</span></div><span className="statusBadge">{user.role}</span></div>)}</div></div>;
}

function formatPrice(value) {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(Number(value || 0));
}

function formatDate(value) {
  if (!value) return 'Date non definie';
  return new Intl.DateTimeFormat('fr-FR', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value));
}

function OrderList({ orders, onCancel }) {
  return (
    <div className="panel historyPanel">
      <div className="panelHeader">
        <div><h2>Commandes</h2><p>{orders.length} commande{orders.length > 1 ? 's' : ''}</p></div>
      </div>
      {orders.length ? orders.map((order) => <OrderCard key={order.id} order={order} onCancel={onCancel} />) : <EmptyState title="Aucune commande" text="Ajoute des produits au panier puis lance le paiement simule." />}
    </div>
  );
}

function OrderCard({ order, onCancel }) {
  const cancelled = order.status === 'annulee';
  return (
    <article className="historyCard">
      <div className="historyTop">
        <div><strong>Commande #{order.id.slice(-6).toUpperCase()}</strong><span>{formatDate(order.createdAt)}</span></div>
        <span className={`statusBadge ${cancelled ? 'cancelled' : ''}`}>{cancelled ? 'Annulee' : order.status}</span>
      </div>
      <div className="historyItems">
        {order.items.map((item) => (
          <div className="historyLine" key={item.productId}>
            <span>{item.name}</span>
            <small>x{item.quantity}</small>
            <b>{formatPrice(item.price * item.quantity)}</b>
          </div>
        ))}
      </div>
      <div className="historyTotal"><span>Total</span><strong>{formatPrice(order.total)}</strong></div>
      {!cancelled && <button className="secondaryButton" onClick={() => onCancel(order.id)}>Annuler la commande</button>}
    </article>
  );
}

function ReservationList({ reservations, onCancel }) {
  return (
    <div className="panel historyPanel">
      <div className="panelHeader">
        <div><h2>Reservations</h2><p>{reservations.length} reservation{reservations.length > 1 ? 's' : ''}</p></div>
      </div>
      {reservations.length ? reservations.map((reservation) => <ReservationCard key={reservation.id} reservation={reservation} onCancel={onCancel} />) : <EmptyState title="Aucune reservation" text="Reserve un atelier ceramique ou cafe pour le voir ici." />}
    </div>
  );
}

function ReservationCard({ reservation, onCancel }) {
  const cancelled = reservation.status === 'annulee';
  return (
    <article className="historyCard">
      <div className="historyTop">
        <div><strong>{reservation.workshopTitle}</strong><span>Reservation #{reservation.id.slice(-6).toUpperCase()}</span></div>
        <span className={`statusBadge ${cancelled ? 'cancelled' : ''}`}>{cancelled ? 'Annulee' : 'Confirmee'}</span>
      </div>
      <div className="reservationMeta">
        <span>Places: <b>{reservation.seats}</b></span>
        <span>Date de reservation: <b>{formatDate(reservation.createdAt)}</b></span>
      </div>
      <div className="historyTotal"><span>Total atelier</span><strong>{formatPrice(reservation.total)}</strong></div>
      {!cancelled && <button className="secondaryButton" onClick={() => onCancel(reservation.id)}>Annuler la reservation</button>}
    </article>
  );
}

function EmptyState({ title, text }) {
  return <div className="emptyState"><strong>{title}</strong><p>{text}</p></div>;
}

function FloatingSocial() {
  return (
    <div className="floatingSocial">
      <a href="https://www.instagram.com/coffeearts.paris/" target="_blank" rel="noreferrer" aria-label="Instagram">Ig</a>
      <a href="https://www.tiktok.com/@coffeeartsparis" target="_blank" rel="noreferrer" aria-label="TikTok">Tk</a>
      <a href="https://fr.pinterest.com/coffeeartsparis/" target="_blank" rel="noreferrer" aria-label="Pinterest">P</a>
    </div>
  );
}

function SiteFooter({ setPage }) {
  const discover = ['Café', 'Ateliers', 'Boutique', 'Evénements', 'Blog', 'À propos', 'Contact', 'Client'];
  return (
    <footer>
      <div className="footerGrid">
        <div>
          <div className="footerLogo">Coffee Arts Paris</div>
          <p>Un lieu unique où la céramique rencontre le café artisanal à Paris.</p>
          <p>Créer, déguster, partager.</p>
        </div>
        <div>
          <h3>Découvrir</h3>
          <div className="footerLinks">{discover.map((item) => <button key={item} onClick={() => setPage(item)}>{item === 'Client' ? 'Espace client' : item}</button>)}</div>
        </div>
        <div>
          <h3>Contact</h3>
          <p>07.66.91.82.94</p>
          <p>coffeeartsparis@gmail.com</p>
          <p>25 Boulevard du Temple<br />75003 Paris</p>
        </div>
        <div>
          <h3>Horaires</h3>
          <p>Mardi - Mercredi - Jeudi - Vendredi</p>
          <strong>08h - 20h</strong>
          <p>Samedi - Dimanche</p>
          <strong>10h - 21h</strong>
        </div>
      </div>
      <div className="footerBottom">
        <span>© 2026 Coffee Arts Paris. Tous droits réservés.</span>
        <span>Mastercard · Visa · Google Pay · Apple Pay</span>
      </div>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);
