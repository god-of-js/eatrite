<script setup lang="ts">
import {
  PhPhone,
  PhShoppingCart,
  PhHeart,
  PhUser,
  PhMagnifyingGlass,
  PhFileImage,
} from "@phosphor-icons/vue";

const icons = {
  Phone: PhPhone,
  Cart: PhShoppingCart,
  Heart: PhHeart,
  User: PhUser,
  Search: PhMagnifyingGlass,
  Image: PhFileImage,
};

export type Icons = keyof typeof icons;

interface Props {
  icon: Icons;
  size?: number;
}
const props = withDefaults(defineProps<Props>(), {
  size: 16,
});
</script>

<template>
  <component :is="icons[props.icon]" :size="props.size" />
</template>
