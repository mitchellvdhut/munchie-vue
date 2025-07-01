<!-- src/components/TopNav.vue -->
<template>
  <nav class="flex p-6">
    <router-link v-if="leftIcon && linkIconLeft" :to="linkIconLeft">
      <component :is="leftIcon" class="nav-icon" />
    </router-link>
    <div class="m-auto">
      <h1 class="font-secondary inline-block text-xl font-bold">{{ heading }}</h1>
      <slot></slot>
    </div>
    <div v-if="rightIcon && onRightIconClick">
      <button @click="onRightIconClick">
        <component :is="rightIcon" class="nav-icon" />
      </button>
    </div>
  </nav>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  leftIcon: {
    type: [Function, Object],
    default: null,
  },
  rightIcon: {
    type: [Function, Object],
    default: null,
  },
  heading: {
    type: String,
    default: 'Tekst hier...',
  },
  linkIconLeft: {
    type: String,
    default: '/',
  },
  onRightIconClick: {
    type: Function,
    default: '/',
  },
});
</script>