import { reactive, watch } from "vue";

export const form = reactive({
  name: "",
  email: "",
});

export const errors = reactive({
  name: "",
  email: "",
});

export function validate() {
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

watch(
  () => form.name,
  (value) => {
    if (!value) {
      errors.name = "Имя обязательно";
    } else if (value.length < 3) {
      errors.name = "Минимум 3 символа";
    } else {
      errors.name = "";
    }
  }
);

watch(
  () => form.email,
  (value) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) {
      errors.email = "Email обязателен";
    } else if (!re.test(value)) {
      errors.email = "Некорректный email";
    } else {
      errors.email = "";
    }
  }
);
