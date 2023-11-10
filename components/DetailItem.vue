<script setup lang="ts">
interface Props {
  name: string;
  heroImg: string;
  description?: string;
  actionText: string;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="rounded overflow-hidden">
    <div
      class="rounded h-96 w-full bg-cover bg-center"
      :style="`background-image: url(${props.heroImg})`"
    ></div>
    <div class="mt-4 text-lg font-sweet-sans-bold text-gray-800 text-center">
      {{ props.name }}
    </div>
    <div
      v-if="props.description"
      class="mt-2 text-sm font-sweet-sans-bold text-gray-700 text-center"
    >
      {{ props.description }}
    </div>
    <UiButton class="mx-auto mt-4" variant="neutralBordered" size="sm">{{
      props.actionText
    }}</UiButton>
  </div>
</template>
