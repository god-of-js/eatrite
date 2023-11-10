<script setup lang="ts">
const variants = {
  primary: "bg-primary hover:shadow-md",
  neutralBordered:
    "bg-white hover:bg-gray-800 border text-gray-800 font-sweet-sans-medium hover:text-white border-gray-600 rounded-2xl",
};
const sizes = {
  sm: "text-xs py-2 px-3",
  large: "px-4 py-3 text-xs",
};
export type Variants = keyof typeof variants;
export type Size = keyof typeof sizes;
interface Props {
  loading?: boolean;
  disabled?: boolean;
  variant?: Variants;
  size?: Size;
  type?: "button" | "submit";
  borderedOnlyOnBottom?: boolean;
  rounded?: "none";
}
const props = withDefaults(defineProps<Props>(), {
  type: "submit",
  rounded: "none",
  variant: "primary",
  size: "large",
});
const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <button
    :class="[
      `flex w-fit uppercase items-center gap-4 app-border ${variants[variant]} ${sizes[size]}`,
    ]"
    :type="props.type"
    :disabled="props.disabled"
    @click="emit('click')"
  >
    <span v-if="props.loading"> Loading... </span>
    <slot v-else />
  </button>
</template>
