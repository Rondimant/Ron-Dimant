
import { Product, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Dimant Carbon Pro Blade',
    category: 'Blades',
    price: 189.99,
    image: 'https://picsum.photos/seed/ttblade1/600/600',
    stats: { speed: 9.5, control: 8.8, spin: 9.2 },
    description: 'Precision engineered carbon layers for explosive power and unmatched touch.'
  },
  {
    id: '2',
    name: 'Elite Spin 01 Rubber',
    category: 'Rubbers',
    price: 74.99,
    image: 'https://picsum.photos/seed/ttrubber1/600/600',
    stats: { speed: 9.2, control: 8.5, spin: 9.8 },
    description: 'Ultra-tacky surface designed for modern aggressive topspin play.'
  },
  {
    id: '3',
    name: 'Tournament Master X',
    category: 'Tables',
    price: 1299.00,
    image: 'https://picsum.photos/seed/tttable/600/600',
    stats: { speed: 9.0, control: 9.5, spin: 9.0 },
    description: 'ITTF approved 25mm surface for a perfectly consistent professional bounce.'
  },
  {
    id: '4',
    name: 'Velocity Z+ Rubber',
    category: 'Rubbers',
    price: 68.50,
    image: 'https://picsum.photos/seed/ttrubber2/600/600',
    stats: { speed: 9.7, control: 8.2, spin: 9.4 },
    description: 'Built for high-speed counter-attacks and rapid transitions.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marco Chen',
    role: 'Top 50 ITTF Ranked',
    quote: "Switching to Ron Dimant gear changed the trajectory of my game. The Carbon Pro Blade gives me confidence in every rally.",
    avatar: 'https://picsum.photos/seed/player1/150/150'
  },
  {
    id: '2',
    name: 'Sarah Andersson',
    role: 'European Youth Champion',
    quote: "Precision is everything at the professional level. Ron Dimant Rubbers provide the control I need to place shots perfectly.",
    avatar: 'https://picsum.photos/seed/player2/150/150'
  }
];
