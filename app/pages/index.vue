<template>
  <div>
    <h1 class="text-2xl mb-4">Каталог</h1>

    <!-- Фильтр и поиск -->
    <div class="flex gap-4 mb-4">
      <input
        v-model="products.search"
        placeholder="Поиск"
        class="border p-2 flex-1"
      />
      <select v-model="products.category" class="border p-2">
        <option value="">Все категории</option>
        <option v-for="cat in categories" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>
      <select v-model="products.sort" class="border p-2">
        <option value="price">По цене</option>
        <option value="title">По названию</option>
      </select>
    </div>

    <!-- Товары -->
    <div class="grid grid-cols-3 gap-4">
      <ProductCard
        v-for="product in products.paginated"
        :key="product.id"
        :product="product"
      />
    </div>

    <!-- Пагинация -->
    <div class="flex gap-2 mt-4">
      <button
        v-for="page in products.totalPages"
        :key="page"
        @click="products.setPage(page)"
        :class="{
          'bg-black text-white': products.page === page,
          'bg-gray-200': products.page !== page,
        }"
        class="px-3 py-1"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types";
const products = useProductsStore();

const { data } = await useAsyncData<Product[]>(
  "products",
  () => $fetch<Product[]>("/api/products"),
  { server: true }
);
if (data.value) products.setProducts(data.value);

const categories = ["tech", "audio", "books", "clothes", "home"];
</script>
