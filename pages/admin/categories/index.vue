<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <div class="flex justify-end">
      <NuxtLink to="/admin/categories/new">
        <UiButton>New Category</UiButton>
      </NuxtLink>
    </div>
  </div>
</template>
