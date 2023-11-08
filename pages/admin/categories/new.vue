<script setup lang="ts">
definePageMeta({
  layout: "admin",
});

const formData = ref({
  heroImage: null,
  name: "",
});
</script>
<template>
  <UiForm :form-data="formData">
    <template #default="{}"
      ><div>
        <h2 class="text-xl font-bold font-sweet-sans-bold text-center">
          Create new Category
        </h2>
        <div class="grid md:w-1/2 mx-auto mt-4 gap-8">
          <UiImageUploader
            v-model="formData.heroImage"
            label="Hero Image"
            name="heroImage"
          />
          <UiInput
            v-model="formData.name"
            name="name"
            label="Collection Name"
          />
          <UiButton>Create Category</UiButton>
        </div>
      </div></template
    >
  </UiForm>
</template>
