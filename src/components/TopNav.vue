<!-- src/components/TopNav.vue -->
<template>
  <nav class="flex p-6">
    <a v-if="leftIcon && onLeftIconClick" @click="onLeftIconClick">
      <component :is="leftIcon" />
      <LucideIcon/>
    </a>
    <div class="m-auto">
      <!--      <h1 class="font-secondary inline-block text-xl font-bold">{{ heading }}</h1>-->
      <slot></slot>
    </div>
    <div v-if="rightIcon && onRightIconClick">
      <button @click="onRightIconClick">
        <component :is="rightIcon" class="nav-icon" />
      </button>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import type { TopNavMeta } from '@/types/router.ts'

defineProps<TopNavMeta>()
</script>
