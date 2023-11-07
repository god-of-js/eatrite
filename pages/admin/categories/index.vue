<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <div class="flex justify-end">
      <NuxtLink to="/admin/categories/new">
        <UiTheButton>New Category</UiTheButton>
      </NuxtLink>
    </div>
  </div>
</template>
