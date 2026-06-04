import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbPath = join(__dirname, '..', 'data', 'db.json');

const initialData = {
  users: [
    { id: 'u_admin', name: 'Admin Coffee Arts', email: 'admin@coffeearts.test', password: 'admin123', role: 'admin', phone: '0600000000' },
    { id: 'u_client', name: 'Client Demo', email: 'client@coffeearts.test', password: 'client123', role: 'client', phone: '0611111111' }
  ],
  products: [
    { id: 'p1', name: 'Espresso Blend Paris', category: 'Cafe', price: 14.9, stock: 24, image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=900&auto=format&fit=crop', description: 'Cafe de specialite torrefie, notes chocolat noir et noisette.' },
    { id: 'p2', name: 'Tasse ceramique artisanale', category: 'Ceramique', price: 28, stock: 12, image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=900&auto=format&fit=crop', description: 'Piece artisanale emaillee pour latte, cappuccino ou filtre.' },
    { id: 'p3', name: 'Kit matcha creatif', category: 'Accessoires', price: 36, stock: 8, image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=900&auto=format&fit=crop', description: 'Kit atelier maison avec fouet, bol et poudre matcha premium.' }
  ],
  workshops: [
    { id: 'w1', title: 'Peinture sur ceramique', price: 35, seats: 10, date: '2026-06-12', time: '15:00', image: 'https://images.unsplash.com/photo-1493106819501-66d381c466f1?q=80&w=900&auto=format&fit=crop', description: 'Decor libre sur mug ou assiette avec cuisson incluse.' },
    { id: 'w2', title: 'Latte art debutant', price: 45, seats: 8, date: '2026-06-18', time: '18:30', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=900&auto=format&fit=crop', description: 'Bases espresso, mousse de lait et premiers motifs.' },
    { id: 'w3', title: 'Degustation cafe de specialite', price: 29, seats: 14, date: '2026-06-22', time: '11:00', image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=900&auto=format&fit=crop', description: 'Cupping, origines, profils aromatiques et conseils.' }
  ],
  posts: [
    { id: 'b1', title: 'Comment choisir son cafe de specialite', excerpt: 'Origines, mouture et extraction pour mieux acheter.', content: 'Un bon cafe commence par une origine lisible, une torrefaction adaptee et une mouture fraiche.', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=900&auto=format&fit=crop' },
    { id: 'b2', title: 'Pourquoi la ceramique change la degustation', excerpt: 'Texture, chaleur et plaisir du geste.', content: 'La forme, le poids et la conservation de chaleur changent la perception de la boisson.', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=900&auto=format&fit=crop' }
  ],
  orders: [
    { id: 'o1', userId: 'u_client', items: [{ productId: 'p1', name: 'Espresso Blend Paris', quantity: 2, price: 14.9 }], total: 29.8, status: 'payee - simulation', createdAt: '2026-06-04T10:00:00.000Z' }
  ],
  reservations: [
    { id: 'r1', userId: 'u_client', workshopId: 'w1', workshopTitle: 'Peinture sur ceramique', seats: 2, total: 70, createdAt: '2026-06-04T10:20:00.000Z' }
  ],
  messages: [
    { id: 'm1', name: 'Marie Dupont', email: 'marie@test.fr', subject: 'Privatisation', message: 'Bonjour, proposez-vous des ateliers pour entreprise ?', createdAt: '2026-06-04T09:00:00.000Z' }
  ]
};

export function readDb() {
  if (!existsSync(dbPath)) {
    mkdirSync(dirname(dbPath), { recursive: true });
    writeFileSync(dbPath, JSON.stringify(initialData, null, 2));
  }
  return JSON.parse(readFileSync(dbPath, 'utf8'));
}

export function writeDb(data) {
  writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

export function newId(prefix) {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}
