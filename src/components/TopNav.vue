<!-- TopNav.vue -->
<template>
  <nav class="flex p-6">
    <!-- Checkt wat de prop input is ('ChevronRight, ChevronLeft, etc.'). Kijkt of er sprake is van een prop icon -->
    <router-link :to="leftIconLink">
    <component
      :is="leftIconComponent"
      v-if="leftIconComponent"
    />
    </router-link>
    <h1 class="m-auto font-semibold">{{ heading }}</h1>
    <router-link :to="rightIconLink">
    <component
      :is="rightIconComponent"
      v-if="rightIconComponent"
    />
    </router-link>
  </nav>
</template>

<script setup>

import { computed } from 'vue'; // Voor het afhandelen van dynamische prop icons (reactief)
import * as LucideIcons from 'lucide-vue-next';

// Definieer props met Composition API
const props = defineProps({
  leftIcon: {
    type: String,
    default: 'ChevronLeft', // Standaard chevron links
    validator: (value) => Object.keys(LucideIcons).includes(value), // valideert of er sprake is van een geldige icon uit Lucide
  },
  rightIcon: {
    type: String,
    default: '', // Geen standaard rechter pictogram
    validator: (value) => Object.keys(LucideIcons).includes(value),
  },
  heading: {
    type: String,
    default: 'Tekst hier...', // Standaard titel in het midden 
  },
  leftIconLink: {
    type: String,
    default: '/' // Standaard route link is home
  },
  rightIconLink: {
    type: String,
    default: '/'
  }
});

// Computed properties voor dynamische icon links
const leftIconComponent = computed(() => {
  return LucideIcons[props.leftIcon] || null;
});

// Computed properties voor dynamische icon rechts
const rightIconComponent = computed(() => {
  return LucideIcons[props.rightIcon] || null;
});
</script>