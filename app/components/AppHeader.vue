<template>
  <header
    class="bg-white shadow p-4 flex flex-col md:flex-row items-center justify-between"
  >
    <div class="flex items-center gap-4">
      <NuxtLink to="/" class="text-xl font-bold">MyShop</NuxtLink>

      <nav class="flex gap-4">
        <NuxtLink to="/" class="hover:text-gray-700">Главная</NuxtLink>
        <NuxtLink
          to="/cart"
          class="hover:text-gray-700 flex items-center gap-1"
        >
          Корзина
          <ClientOnly fallback-tag="span">
            <span
              v-if="cart.count"
              class="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full"
            >
              {{ cart.count }}
            </span>
          </ClientOnly>
        </NuxtLink>
        <NuxtLink to="/profile" class="hover:text-gray-700">Профиль</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useCartStore } from "~/stores/cart";
const cart = useCartStore();
</script>
