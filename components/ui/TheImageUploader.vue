<script setup lang="ts">
interface Props {
  name: string;
  error?: string;
}
const props = defineProps<Props>();
</script>
<template>
  <UiTheField :name="props.name" :error="props.error">
    <div></div>
  </UiTheField>
</template>
