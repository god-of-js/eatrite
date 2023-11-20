<script setup lang="ts">
interface Props {
  error?: string;
  modelValue: string;
  name: string;
  suggestion?: string;
  label: string;
}
const props = withDefaults(defineProps<Props>(), {
  error: "",
  suggestion: "",
});
const emit = defineEmits<{
  (e: "update:modelValue", p: string): void;
}>();

const inputValue = computed({
  set(val: string) {
    emit("update:modelValue", val);
  },
  get() {
    return props.modelValue;
  },
});
</script>

<template>
  <UiField
    :name="props.name"
    :error="props.error"
    :label="props.label"
    :suggestion="props.suggestion"
  >
    <textarea
      :id="props.name"
      v-model="inputValue"
      v-bind="$attrs"
      class="w-full bg-gray-200 b-0 b-b-1 rounded-lg outline-none p-3 text-left text-3 app-border"
      :class="[{ 'b-red': !!props.error }]"
      p="y-1"
      bg="transparent"
      outline="none active:none"
    />
  </UiField>
</template>

<style>
textarea {
  resize: none;
  overflow: hidden;
  min-height: 150px;
}
</style>
