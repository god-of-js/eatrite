<script setup lang="ts">
interface Option {
  value: boolean;
  label: string;
}
interface Props {
  name: string;
  label: string;
  options: Option[];
}
const props = defineProps<Props>();
</script>

<template>
  <UiField :name="props.name" :label="props.label">
    <UiCheckbox
      v-for="(option, index) in props.options"
      :key="index"
      :value="option.value"
      >{{ option.label }}</UiCheckbox
    >
  </UiField>
</template>
