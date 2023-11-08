<script setup lang="ts">
import { required } from "@vuelidate/validators";

definePageMeta({
  layout: "admin",
});

const formData = ref({
  heroImage: null,
  name: "",
});

const formRules = {
  heroImage: [required],
  name: [required],
};

function createCategory() {
  alert("it gets triggered");
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
          <UiButton>Create Category</UiButton>
        </div>
      </div></template
    >
  </UiForm>
</template>
