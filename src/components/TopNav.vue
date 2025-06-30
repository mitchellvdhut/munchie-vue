<!-- src/components/TopNav.vue -->
<template>
  <nav class="flex p-6">
    <router-link v-if="leftIcon && linkIconLeft" :to="linkIconLeft">
      <component :is="leftIcon" class="nav-icon" />
    </router-link>
    <h1 class="m-auto font-secondary text-xl font-bold">{{ heading }}</h1>
    <div v-if="rightIcon">
      <router-link v-if="linkIconRight" :to="linkIconRight">
        <component :is="rightIcon" class="nav-icon" />
      </router-link>
      <button v-else-if="onRightIconClick" @click="onRightIconClick">
        <component :is="rightIcon" class="nav-icon" />
      </button>
    </div>
  </nav>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  leftIcon: {
    type: [Object, Function],
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
    default: '/',
  },
  linkIconRight: {
    type: String,
    default: null,
  },
  onRightIconClick: {
    type: Function,
    default: null,
  },
});
</script>