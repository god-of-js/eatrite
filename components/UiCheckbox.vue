<script setup lang="ts">
interface Props {
  value: boolean;
  disabled?: boolean;
  loading?: boolean;
}
const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "toggle"): void;
}>();
</script>

<template>
  <label class="checkbox flex gap-3" @click.prevent="emit('toggle')">
    <input
      :checked="props.value"
      :disabled="disabled || loading"
      type="checkbox"
      class="bg-green"
      :class="{ 'is-loading': loading }"
    />
    <slot />
  </label>
</template>
