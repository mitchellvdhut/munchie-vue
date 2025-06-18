<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Lorum ipsum</RouterLink>
        <RouterLink to="/">Lorum ipsum</RouterLink>
        <RouterLink to="/">Lorum ipsum</RouterLink>
        <RouterLink to="/">Lorum ipsum</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
