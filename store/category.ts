import { defineStore } from "pinia";
import Category from "~/types/Category";

interface CategoryState {
  categories: Category[];
}
const categoryState: CategoryState = {
  categories: [],
};
export const useCategory = defineStore({
  id: "category",
  state: () => categoryState,
  actions: {
    createCategory(category: Category) {
      return useNuxtApp()
        .$createCategory(category)
        .then(() => {
          this.categories.push(category);
        });
    },
  },
});
