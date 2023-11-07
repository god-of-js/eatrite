<script setup lang="ts">
interface Props {
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
  borderedOnlyOnBottom?: boolean;
  rounded?: "none";
}
const props = withDefaults(defineProps<Props>(), {
  type: "submit",
  rounded: "none",
});
const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <button
    class="flex bg-primary uppercase items-center gap-4 px-4 py-3 app-border"
    :class="{
      'b-l-0 b-r-0 b-t-0': props.borderedOnlyOnBottom,
    }"
    :type="props.type"
    :disabled="props.disabled"
    @click="emit('click')"
  >
    <span v-if="props.loading"> Loading... </span>
    <slot v-else />
  </button>
</template>
