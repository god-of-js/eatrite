<script setup lang="ts">
interface Props {
  type?: "text" | "password" | "tel";
  error?: string;
  modelValue: string;
  name: string;
  suggestion?: string;
  label: string;
}
const props = withDefaults(defineProps<Props>(), {
  type: "text",
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
    <input
      :id="props.name"
      v-model="inputValue"
      :type="props.type"
      v-bind="$attrs"
      class="w-full bg-gray-200 b-0 b-b-1 h-11 rounded-lg outline-none px-3 text-left text-3 app-border"
      :class="[{ 'b-red': !!props.error }]"
      p="y-1"
      bg="transparent"
      outline="none active:none"
    />
  </UiField>
</template>
