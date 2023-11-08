<script setup lang="ts">
import { required } from "@vuelidate/validators";
import { uuidv4 } from "@firebase/util";
import { useCategory } from "~/store/category";

import { uploadFile } from "~/api/cloudinary";

definePageMeta({
  layout: "admin",
});
const categoryStore = useCategory();
const config = useRuntimeConfig();

const formData = ref({
  heroImage: null,
  name: "",
});

const formRules = {
  heroImage: [required],
  name: [required],
};
const loading = ref(false);

async function createCategory() {
  try {
    console.log(config.FIREBASE_API_KEY, "API KEY");
    loading.value = true;
    const heroImageUrl = await uploadFile(formData.value.heroImage!);
    categoryStore.createCategory({
      ...formData.value,
      heroImage: heroImageUrl,
      _id: uuidv4(),
    });
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
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
            label="Collection Name"
            :error="formErrors.name"
          />
          <UiButton :loading="loading">Create Category</UiButton>
        </div>
      </div></template
    >
  </UiForm>
</template>
