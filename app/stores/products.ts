import { defineStore } from "pinia";
import type { Product } from "~/types";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [] as Product[],
    search: "",
    category: "" as string | null,
    sort: "price" as "price" | "title",
    page: 1,
    perPage: 9,
  }),

  getters: {
    filtered(): Product[] {
      let res = this.products;
      if (this.category) res = res.filter((p) => p.category === this.category);
      if (this.search)
        res = res.filter((p) =>
          p.title.toLowerCase().includes(this.search.toLowerCase())
        );
      res = [...res].sort((a, b) =>
        this.sort === "price"
          ? a.price - b.price
          : a.title.localeCompare(b.title)
      );
      return res;
    },

    paginated(): Product[] {
      const start = (this.page - 1) * this.perPage;
      return this.filtered.slice(start, start + this.perPage);
    },

    totalPages(): number {
      return Math.ceil(this.filtered.length / this.perPage);
    },
  },

  actions: {
    setSearch(query: string) {
      this.search = query;
      this.page = 1;
    },
    setCategory(cat: string | null) {
      this.category = cat;
      this.page = 1;
    },
    setSort(sort: "price" | "title") {
      this.sort = sort;
    },
    setPage(page: number) {
      this.page = page;
    },
    setProducts(products: Product[]) {
      this.products = products;
    },
  },
});
