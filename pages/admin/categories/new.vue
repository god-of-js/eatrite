<script setup lang="ts">
definePageMeta({
  layout: "admin",
});

const formData = ref({
  heroImage: null,
});
</script>
<template>
  <UiTheForm :form-data="formData">
    <template #default="{}"
      ><div>
        <h2 class="text-xl font-bold font-sweet-sans-bold text-center">
          Create new Category
        </h2>
        <div class="grid md:grid-cols-2 mt-4">
          <UiTheImageUploader
            v-model="formData.heroImage"
            label="Hero Image"
            name="heroImage"
          />
        </div></div
    ></template>
  </UiTheForm>
</template>
