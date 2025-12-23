export interface Product {
  id: number;
  sortIndex: number;
  title: string;
  description?: string;
  price: number;
  category?: string;
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

export type SortType = "name-asc" | "price-asc" | "price-desc";
