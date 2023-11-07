<script setup lang="ts"></script>

<template>
  <div>
    <LazyLayoutTheTopNav />
    <LayoutSectionLinks />
    <div class="max-w-screen-xl mx-auto">
      <slot />
    </div>
  </div>
</template>
