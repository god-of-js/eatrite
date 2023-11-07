<script setup lang="ts">
const variants = {
  primary: "bg-primary hover:shadow-md",
};
const sizes = {
  sm: "text-xs",
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
  size: "sm",
});
const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <button
    :class="[
      `flex uppercase items-center gap-4 px-4 py-3 app-border ${variants[variant]} ${sizes[size]}`,
    ]"
    :type="props.type"
    :disabled="props.disabled"
    @click="emit('click')"
  >
    <span v-if="props.loading"> Loading... </span>
    <slot v-else />
  </button>
</template>
