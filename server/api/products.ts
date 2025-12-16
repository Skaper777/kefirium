import type { Product } from "~/types";

const categories = ["tech", "audio", "books", "clothes", "home"];

export default defineEventHandler((): Product[] => {
  const products: Product[] = [];
  for (let i = 1; i <= 50; i++) {
    products.push({
      id: i,
      title: `Товар ${i}`,
      description: `Описание товара ${i}`,
      price: Math.floor(Math.random() * 1000) + 50,
      category: categories[i % categories.length],
      stock: Math.floor(Math.random() * 20) + 1,
    });
  }
  return products;
});
