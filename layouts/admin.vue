<script setup lang="ts">
const routes = [
  {
    title: "Categories",
    link: "/admin/categories",
  },
  {
    title: "Meals",
    link: "/admin/meals",
  },
];
</script>

<template>
  <div>
    <LayoutTopNav />

    <LayoutSectionLinks :routes="routes" />
    <div class="max-w-screen-xl mx-auto">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
