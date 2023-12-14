<script setup lang="ts">
import { useCategory } from "~/store/category";
definePageMeta({
  layout: "admin",
});
const categoryStore = useCategory();

categoryStore.getCategories();

const categories = computed(() => categoryStore.categories);
</script>

<template>
  <div>
    <div class="flex justify-end pb-2">
      <NuxtLink to="/admin/categories/new">
        <UiButton>New Category</UiButton>
      </NuxtLink>
    </div>
    <div class="grid md:grid-cols-3 gap-8">
      <NuxtLink
        v-for="(category, index) in categories"
        :key="index"
        :to="`/admin/categories/${category._id}`"
      >
        <DetailItem
          :name="category.name"
          :description="category.description"
          :hero-img="category.heroImage"
          action-text="view category"
        />
      </NuxtLink>
    </div>
  </div>
</template>
