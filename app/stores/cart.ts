import { defineStore } from "pinia";
import type { CartItem, Product } from "~/types";

export const useCartStore = defineStore("cart", {
  state: (): { items: CartItem[] } => ({
    items: [],
  }),

  actions: {
    add(product: Product, qty = 1) {
      const existing = this.items.find((i) => i.id === product.id);

      if (existing) {
        existing.qty += qty;
      } else {
        this.items.push({ ...product, qty });
      }
    },

    increment(id: number) {
      const item = this.items.find((i) => i.id === id);
      if (item) item.qty++;
    },

    decrement(id: number) {
      const item = this.items.find((i) => i.id === id);
      if (!item) return;

      if (item.qty > 1) item.qty--;
      else this.items = this.items.filter((i) => i.id !== id);
    },

    remove(id: number) {
      this.items = this.items.filter((i) => i.id !== id);
    },
  },

  getters: {
    total: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.qty, 0),

    count: (state) => state.items.reduce((sum, item) => sum + item.qty, 0),

    getQtyById: (state) => {
      return (id: number) => {
        const item = state.items.find((i) => i.id === id);
        return item?.qty ?? 0;
      };
    },
  },

  persist: true,
});
