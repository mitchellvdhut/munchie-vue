<template>
  <main class="bg-white p-6">
    <h1 class="text-2xl font-bold">Recepten</h1>
    <RecipeCard :recipe="recipe"/>
  </main>
</template>

<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard.vue'

const recipe = {
  id: 1,
  name: 'test',
  kitchen: 'Italian',
  ingredients: [],
  preparations: [],
  preparationTime: '30 min.',
  images: ['margherita_pizza'],
}
</script>
