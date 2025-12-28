
export interface ProductStats {
  speed: number;
  control: number;
  spin: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  stats: ProductStats;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}
