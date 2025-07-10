<template>
  <div class="rounded-xl bg-white shadow-lg flex flex-col overflow-hidden">
    <img src="../../public/margherita_pizza.png" alt="margherita pizza"/>
    <div class="flex flex-col justify-center p-6 pb-0 gap-4">
      <div class="flex flex-row justify-between">
        <h2 class="font-bold text-xl leading-tight inline-block">
          {{recipe.name}}
        </h2>
        <div class="flex flex-row align-middle gap-2"><Clock class="inline-block"/> <span>{{recipe.preparationTime}}</span></div>
      </div>
      <p class="color-gray-600">{{recipe.kitchen}}</p>
      <p class="color-gray-600">{{recipe.ingredients.length}} Ingrediënten</p>
    </div>
    <div class="flex flex-row justify-center p-6 gap-4">
      <button class="bg-gray-100 p-2 rounded-lg w-full flex justify-center">
        <X/>
      </button>
      <button class="bg-orange-500 p-2 rounded-lg w-full flex justify-center">
        <Heart color="white"/>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Clock, Heart, X } from 'lucide-vue-next';
import type { Recipe } from '@/types'

const props = defineProps<{recipe: Recipe}>()

</script>

<style lang="scss" scoped>

</style>
