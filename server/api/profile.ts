import type { UserProfile } from "~/types";

export default defineEventHandler(
  (): UserProfile => ({
    name: "Иван Иванов",
    email: "ivan@test.ru",
  })
);
