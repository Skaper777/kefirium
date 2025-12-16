<template>
  <div
    class="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in"
  >
    <div class="relative h-48 overflow-hidden">
      <img
        :src="product.image"
        :alt="product.title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        loading="lazy"
      />
      <div
        class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold"
      >
        ${{ product.price }}
      </div>
    </div>

    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-800 mb-2 truncate">
        {{ product.title }}
      </h3>

      <p class="text-gray-600 text-sm mb-4 line-clamp-2">
        {{ product.description }}
      </p>

      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center">
          <span class="text-yellow-400">★</span>
          <span class="ml-1 text-sm text-gray-600">
            {{ product.rating.rate }} ({{ product.rating.count }})
          </span>
        </div>
        <span class="text-xs px-2 py-1 bg-gray-100 rounded-full">
          {{ product.category }}
        </span>
      </div>

      <div class="flex gap-2">
        <NuxtLink
          :to="`/products/${product.id}`"
          class="flex-1 text-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Подробнее
        </NuxtLink>
        <!-- <button 
          @click="addToCart"
          class="flex-1 py-2 bg-green-600 text-white rounded-lg 
                 hover:bg-green-700 transition-colors"
          :disabled="isAdding"
        >
          {{ isAdding ? 'Добавление...' : 'В корзину' }}
        </button> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types";

interface Props {
  product: Product;
}

const props = defineProps<Props>();
// const cartStore = useCartStore()
const isAdding = ref(false);

// const addToCart = async () => {
//   isAdding.value = true
//   await new Promise(resolve => setTimeout(resolve, 300))

//   cartStore.addToCart({
//     id: props.product.id,
//     title: props.product.title,
//     price: props.product.price,
//     image: props.product.image
//   })

//   isAdding.value = false
// }
</script>
