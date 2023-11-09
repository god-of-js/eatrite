import { defineStore } from "pinia";
import Category from "~/types/Category";
export const useCategory = defineStore({
  id: "category",
  state: () => ({}),
  actions: {
    createCategory(category: Category) {
      useNuxtApp().$signInUser();
      console.log(category);
    },
  },
});
