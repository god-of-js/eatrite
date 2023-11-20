import { defineStore } from "pinia";
import Category from "~/types/Category";

interface CategoryState {
  categories: Category[];
}
const categoryState: CategoryState = {
  categories: [],
};
export const useCategory = defineStore({
  id: "meal",
  state: () => categoryState,
  actions: {
    createMeal(category: Category) {
      return useNuxtApp()
        .$createCategory(category)
        .then(() => {
          this.categories.push(category);
        });
    },
    getMeals() {
      return useNuxtApp()
        .$getCategories()
        .then((categories) => {
          this.categories = categories;
        });
    },
  },
});
