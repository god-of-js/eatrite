import { defineStore } from "pinia";
import Category from "~/types/Category";
export const useCategory = defineStore({
  id: "category",
  state: () => ({}),
  actions: {
    createCategory(category: Category) {
      console.log(category);
    },
  },
});
