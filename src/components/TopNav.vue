<!-- src/components/TopNav.vue -->
<template>
  <nav class="flex p-6">
    <router-link v-if="leftIcon && linkIconLeft" :to="linkIconLeft"> <!-- Checkt of de Lucide input bestaat -->
      <component :is="leftIcon" class="nav-icon"/>
    </router-link>
    <h1 class="m-auto font-semibold">{{ heading }}</h1>
    <router-link v-if="rightIcon && linkIconRight" :to="linkIconRight">
      <component :is="rightIcon" class="nav-icon"/>
    </router-link>
  </nav>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  leftIcon: {
    type: [Object, Function], // Accepteert Lucide als object en functie om het als component props mee te geven en conditioneel te renderen
    default: null,
  },
  rightIcon: {
    type: [Object, Function],
    default: null,
  },
  heading: {
    type: String,
    default: 'Tekst hier...',
  },
  linkIconLeft: {
    type: String,
    default: '/recipes-overview',
  },
  linkIconRight: {
    type: String,
    default: '/',
  },
});
</script>