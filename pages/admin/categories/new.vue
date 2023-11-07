<script setup lang="ts">
definePageMeta({
  layout: "admin",
});

const formData = ref({});
</script>
<template>
  <UiTheForm :form-data="formData">
    <template #default="{}"
      ><div>
        <h2>Create new Category</h2>
      </div></template
    >
  </UiTheForm>
</template>
