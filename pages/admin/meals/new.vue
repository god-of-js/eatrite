<script setup lang="ts">
import { ref } from "vue";
import { required } from "@vuelidate/validators";
import { useToast } from "vue-toast-notification";

// import { uuidv4 } from "@firebase/util";
// import { useCategory } from "~/store/meals";

definePageMeta({
  layout: "admin",
});
// const categoryStore = useCategory();
// const { $uploadFile } = useNuxtApp();

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

function createMeal() {
  try {
    loading.value = true;
    // const heroImageUrl = await $uploadFile(formData.value.heroImage!);
    // await categoryStore.createCategory({
    //   ...formData.value,
    //   heroImage: heroImageUrl,
    //   _id: uuidv4(),
    // });
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
  <UiForm :form-data="formData" :rules="formRules" @form-submit="createMeal">
    <template #default="{ formErrors }">
      <div>
        <h2 class="text-xl font-bold font-sweet-sans-bold text-center">
          Create new Meal
        </h2>
        <div class="grid grid-cols-2 mt-4 gap-8">
          <UiImageUploader
            v-model="formData.heroImage"
            label="Hero Image"
            name="heroImage"
            :error="formErrors.heroImage"
          />
          <div class="grid gap-2">
            <UiInput
              v-model="formData.name"
              name="name"
              label="Meal Name"
              :error="formErrors.name"
            />
            <UiTextArea
              v-model="formData.description"
              name="description"
              label="Meal Description"
              :error="formErrors.description"
            />
            <UiCheckboxField
              v-model="formData.name"
              name="sizes"
              label="Sizes"
              :options="[]"
              :error="formErrors.name"
            />
          </div>
          <UiButton :loading="loading">Create Category</UiButton>
        </div>
      </div></template
    >
  </UiForm>
</template>
