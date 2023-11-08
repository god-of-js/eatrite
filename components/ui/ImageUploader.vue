<script setup lang="ts">
import { defineProps, ref } from "vue";

interface Props {
  name: string;
  error?: string;
  label: string;
  modelValue: File | null;
}
const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "update:model-value", val: File): void;
}>();
const inputRef = ref<HTMLInputElement | null>(null);

const fileUrl = ref("");

function pickImage() {
  if (inputRef.value) {
    inputRef.value.click();
  }
}

function handleFileChange(e: Event) {
  const fileInput = e.target as HTMLInputElement;
  const files = fileInput.files;

  if (!files) {
    alert("No files were passed");
    return;
  }
  emit("update:model-value", files[0]);
}
function readFile(file: File) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  let fileUrl: string | null = null;
  return new Promise((resolve) => {
    return (reader.onload = () => {
      fileUrl = reader.result as string;
      return resolve(reader.result);
    });
  }).then(() => {
    return (fileUrl as string) || null;
  });
}

watchEffect(async () => {
  if (!props.modelValue) return null;
  if (typeof props.modelValue === "string") {
    fileUrl.value = props.modelValue;
    return;
  }
  const file = await readFile(props.modelValue);
  if (file) fileUrl.value = file;
});
</script>

<template>
  <UiField :name="props.name" :label="props.label" :error="props.error">
    <input
      ref="inputRef"
      type="file"
      style="display: none"
      accept="image/*"
      @change="handleFileChange"
    />
    <button
      class="bg-gray-200 bg-cover bg-center overflow-hidden w-full shadow-sm relative cursor-pointer hover:bg-gray-300 rounded-lg h-96 flex items-center justify-center text-gray-600"
      :style="`background-image: url(${fileUrl})`"
      @click.prevent="pickImage"
    >
      <UiIcon v-if="!fileUrl" icon="Image" :size="100" />
      <div
        v-else
        class="absolute bg-white text-neutralBlack font-bold font-sweet-sans-bold bottom-0 left-0 right-0 p-1"
      >
        Click to change
      </div>
    </button>
  </UiField>
</template>
