<template>
  <div v-if="product" class="max-w-3xl mx-auto bg-white p-6">
    <h1 class="text-2xl font-bold mb-2">
      {{ product.title }}
    </h1>

    <p class="text-gray-600 mb-4">
      {{ product.description }}
    </p>

    <p class="text-xl font-semibold mb-4">{{ product.price }} $</p>
    <ClientOnly>
      <div class="flex items-center gap-3">
        <button
          @click="decrement"
          :disabled="qty === 0"
          class="px-3 py-1 bg-gray-200 disabled:opacity-50"
        >
          -
        </button>

        <span class="text-lg font-medium">
          {{ qty }}
        </span>

        <button @click="increment" class="px-3 py-1 bg-gray-200">+</button>
      </div>

      <p v-if="qty > 0" class="text-green-600 mt-2">В корзине: {{ qty }}</p>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types";

const route = useRoute();
const id = Number(route.params.id);
const cart = useCartStore();
const product = ref<Product | null>(null);

const { data: products } = await useFetch<Product[]>("/api/products");

if (products.value) {
  product.value = products.value.find((product) => product.id === id) || null;
}

const qty = computed(() =>
  product.value ? cart.getQtyById(product.value.id) : 0
);

function increment() {
  if (!product.value) return;
  cart.add(product.value, 1);
}

function decrement() {
  if (!product.value) return;
  cart.decrement(product.value.id);
}
</script>
