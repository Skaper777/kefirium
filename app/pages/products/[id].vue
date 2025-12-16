<template>
  <div v-if="product" class="bg-white p-6">
    <h1 class="text-2xl">{{ product.title }}</h1>
    <p>{{ product.description }}</p>
    <p class="font-bold">{{ product.price }} $</p>

    <button
      @click="cart.add(product)"
      class="mt-4 bg-black text-white px-4 py-2"
    >
      В корзину
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import type { Product } from "~/types";

const cart = useCartStore();

const route = useRoute();
const id = Number(route.params.id);

const product = ref<Product | null>(null);

const { data: products } = await useFetch<Product[]>("/api/products");

if (products.value) {
  product.value = products.value.find((product) => product.id === id) || null;
}
</script>
