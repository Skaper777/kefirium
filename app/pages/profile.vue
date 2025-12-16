<template>
  <form @submit.prevent="onSubmit" class="bg-white p-6 max-w-md">
    <h1 class="text-2xl mb-4">Профиль</h1>

    <input
      v-model="form.name"
      class="border p-2 w-full mb-1"
      placeholder="Имя"
      @input="validate"
    />
    <p class="text-red-500">{{ errors.name }}</p>

    <input
      v-model="form.email"
      class="border p-2 w-full mb-1"
      placeholder="Email"
      @input="validate"
    />
    <p class="text-red-500">{{ errors.email }}</p>

    <button class="bg-black text-white px-4 py-2 mt-4">Сохранить</button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
});

const errors = reactive({
  name: "",
  email: "",
});

const { data } = await useFetch("/api/profile");
if (data.value) {
  form.name = data.value.name;
  form.email = data.value.email;
}

function validate() {
  let valid = true;

  if (!form.name) {
    errors.name = "Имя обязательно";
    valid = false;
  } else if (form.name.length < 3) {
    errors.name = "Минимум 3 символа";
    valid = false;
  } else {
    errors.name = "";
  }

  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.email) {
    errors.email = "Email обязателен";
    valid = false;
  } else if (!re.test(form.email)) {
    errors.email = "Некорректный email";
    valid = false;
  } else {
    errors.email = "";
  }

  return valid;
}

function onSubmit() {
  if (validate()) {
    alert("Сохранено: " + JSON.stringify(form));
  }
}
</script>
