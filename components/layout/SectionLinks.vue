<script setup lang="ts">
interface Route {
  title: string;
  link: string;
  isDropdown?: boolean;
}
interface Props {
  routes: Route[];
}
const props = defineProps<Props>();
</script>

<template>
  <div
    class="p-3 bg-primary rounded my-6 max-w-screen-xl mx-auto flex items-center justify-around"
  >
    <NuxtLink
      v-for="(route, index) in props.routes"
      :key="index"
      :to="route.link"
      class="text-sm uppercase font-sweet-sans-bold"
    >
      {{ route.title }}
    </NuxtLink>
  </div>
</template>
