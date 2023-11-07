<template>
  <div class="w-full max-w-screen-xl mx-auto text-neutralBlack">
    <div class="flex justify-between text-gray-900">
      <a
        href="tel:08063036733"
        class="bg-white shadow-md p-2 flex items-center gap-2 rounded-3xl"
      >
        <LazyUiTheIcon icon="Phone" :size="28" />
        <span class="text-lg font-semibold font-sweet-sans-bold"
          >08063036733</span
        >
      </a>
      <nav class="bg-white shadow-md p-2 flex items-center gap-6 rounded-3xl">
        <LazyUiTheIcon icon="User" :size="24" />
        <LazyUiTheIcon icon="Heart" :size="24" />
        <LazyUiTheIcon icon="Cart" :size="24" />
        <LazyUiTheIcon icon="Search" :size="24" />
      </nav>
    </div>
  </div>
</template>
