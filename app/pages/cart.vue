<template>
  <ClientOnly>
    <div>
      <h1 class="text-2xl mb-4">Корзина</h1>

      <div v-for="item in cart.items" :key="item.id" class="flex gap-4 mb-2">
        <span>{{ item.title }}</span>
        <button @click="cart.decrement(item.id)" class="px-2 py-1 bg-gray-200">
          -
        </button>
        <span>{{ item.qty }}</span>
        <button @click="cart.increment(item.id)" class="px-2 py-1 bg-gray-200">
          +
        </button>
      </div>

      <p class="mt-4 font-bold">Итого: {{ cart.total }} $</p>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const cart = useCartStore();
</script>
