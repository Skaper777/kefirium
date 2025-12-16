export interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  category?: string;
  stock: number;
}

export interface UserProfile {
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

export interface CartItem extends Product {
  qty: number;
}
