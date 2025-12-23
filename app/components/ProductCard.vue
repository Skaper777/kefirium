<template>
  <div class="border p-4 bg-white flex flex-col gap-2">
    <NuxtLink :to="`/products/${product.id}`">
      <h2 class="font-semibold">{{ product.title }}</h2>
      <p class="text-sm text-gray-500">{{ product.category }}</p>
      <p class="font-bold">{{ product.price }} $</p>
    </NuxtLink>

    <!-- Counter -->
    <div class="flex items-center gap-2">
      <button
        @click="decrement"
        :disabled="qty === 0"
        class="px-2 py-1 bg-gray-200 disabled:opacity-50"
      >
        -
      </button>

      <span>{{ qty }}</span>

      <button @click="increment" class="px-2 py-1 bg-gray-200">+</button>
    </div>

    <!-- Add button -->
    <button
      v-if="qty === 0"
      @click="addToCart"
      class="bg-black text-white px-3 py-1 mt-2"
    >
      В корзину
    </button>

    <p v-else class="text-sm text-green-600">В корзине: {{ qty }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types";

const props = defineProps<{
  product: Product;
}>();

const cart = useCartStore();

const qty = computed(() => cart.getQtyById(props.product.id));

function increment() {
  cart.add(props.product, 1);
}

function decrement() {
  cart.decrement(props.product.id);
}

function addToCart() {
  cart.add(props.product, 1);
}
</script>
