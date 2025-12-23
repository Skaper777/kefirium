import type { Product } from "~/types";

const categories = ["tech", "audio", "books", "clothes", "home"];

export default defineEventHandler((): Product[] => {
  const products: Product[] = [];
  for (let i = 1; i <= 50; i++) {
    products.push({
      id: i,
      sortIndex: i,
      title: `Товар ${i}`,
      description: `Описание товара ${i}`,
      price: Math.floor(Math.random() * 1000) + 50,
      category: categories[i % categories.length],
    });
  }
  return products;
});
