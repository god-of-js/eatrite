<script setup lang="ts">
import "vue-toast-notification/dist/theme-sugar.css";
</script>

<template>
  <div>
    <img
      src="~/assets/full-logo.png"
      alt="eatrite.ng logo"
      width="200"
      class="mx-auto -mb-14 -mt-4"
    />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
