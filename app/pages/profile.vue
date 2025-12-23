<template>
  <form @submit.prevent="onSubmit" class="bg-white p-6 max-w-md">
    <h1 class="text-2xl mb-4">Профиль</h1>

    <input
      v-model="form.name"
      class="border p-2 w-full mb-1"
      placeholder="Имя"
    />
    <p class="text-red-500">{{ errors.name }}</p>

    <input
      v-model="form.email"
      class="border p-2 w-full mb-1"
      placeholder="Email"
    />
    <p class="text-red-500">{{ errors.email }}</p>

    <button class="bg-black text-white px-4 py-2 mt-4">Сохранить</button>
  </form>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";

const STORAGE_KEY = "profile-form";

onMounted(async () => {
  // пробуем localStorage
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    Object.assign(form, JSON.parse(saved));
    return;
  }

  // если нет — грузим с API
  const { data } = await useFetch("/api/profile");
  if (data.value) {
    Object.assign(form, data.value);
  }
});

watch(
  form,
  () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
  },
  { deep: true }
);

function onSubmit() {
  if (!validate()) return;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
  alert("Сохранено: " + JSON.stringify(form));
}
</script>
