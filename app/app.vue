<template>
  <div class="min-h-screen bg-gray-100">
    <AppHeader />
    <main class="p-6">
      <NuxtPage />
    </main>
  </div>
</template>

<!-- <script setup lang="ts">
import type { Product } from "~/types";
const products = useProductsStore();

const { data } = await useAsyncData<Product[]>(
  "products",
  () => $fetch<Product[]>("/api/products"),
  { server: true }
);
console.log(data.value);
if (data.value) products.setProducts(data.value);
</script> -->
