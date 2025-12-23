import { defineStore } from "pinia";
import type { Product, SortType } from "~/types";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [] as Product[],
    search: "",
    category: "" as string | null,
    sort: "name-asc" as SortType,
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
      res = [...res].sort((a, b) => {
        {
          switch (this.sort) {
            case "name-asc":
              return a.sortIndex - b.sortIndex;
            case "price-asc":
              return a.price - b.price;
            case "price-desc":
              return b.price - a.price;
            default:
              return 0;
          }
        }
      });
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
    setSort(value: SortType) {
      this.sort = value;
      this.page = 1;
    },
    setPage(page: number) {
      this.page = page;
    },
    setProducts(products: Product[]) {
      this.products = products;
    },
  },
});
