<script setup lang="ts">
import { required } from "@vuelidate/validators";
import { useToast } from "vue-toast-notification";

import { uuidv4 } from "@firebase/util";
import { useCategory } from "~/store/category";

definePageMeta({
  layout: "admin",
});
const categoryStore = useCategory();
const { $uploadFile } = useNuxtApp();

const $toast = useToast();
const { $router } = useNuxtApp();

const formData = ref({
  heroImage: null,
  name: "",
  description: "",
});

const formRules = {
  heroImage: [required],
  name: [required],
  description: [required],
};
const loading = ref(false);

async function createCategory() {
  try {
    loading.value = true;
    const heroImageUrl = await $uploadFile(formData.value.heroImage!);
    await categoryStore.createCategory({
      ...formData.value,
      heroImage: heroImageUrl,
      _id: uuidv4(),
    });
    $router.push({ path: "/admin/categories" });
  } catch (err) {
    loading.value = false;
    $toast.error(
      `${(err as { message: string }).message || "Something went wrong"}`,
    );
  } finally {
    loading.value = false;
    $toast.success("Category added successfully.");
  }
}
</script>
<template>
  <UiForm
    :form-data="formData"
    :rules="formRules"
    @form-submit="createCategory"
  >
    <template #default="{ formErrors }"
      ><div>
        <h2 class="text-xl font-bold font-sweet-sans-bold text-center">
          Create new Category
        </h2>
        <div class="grid md:w-1/2 mx-auto mt-4 gap-8">
          <UiImageUploader
            v-model="formData.heroImage"
            label="Hero Image"
            name="heroImage"
            :error="formErrors.heroImage"
          />
          <UiInput
            v-model="formData.name"
            name="name"
            label="Category Name"
            :error="formErrors.name"
          />
          <UiTextArea
            v-model="formData.description"
            name="description"
            label="Category Description"
            :error="formErrors.description"
          />
          <UiButton :loading="loading">Create Category</UiButton>
        </div>
      </div></template
    >
  </UiForm>
</template>
