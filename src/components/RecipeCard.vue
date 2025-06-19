<template>
  <div class="rounded-xl bg-white shadow-lg flex flex-col overflow-hidden">
    <img src="../../public/margherita_pizza.png" alt="margherita pizza"/>
    <div class="flex flex-col justify-center p-6 gap-4">
      <h2 class="font-bold text-xl leading-tight">
        Margherita pizza
      </h2>
      <p class="color-gray-600">Italiaans</p>
      <p class="color-gray-600">6 Ingrediënten</p>
    </div>
    <div class="flex flex-row justify-center p-6 gap-4">
      <button class="bg-gray-100 p-2 rounded-lg w-full flex justify-center">
        <X color="white"/>
      </button>
      <button class="bg-orange-500 p-2 rounded-lg w-full flex justify-center">
        <Heart color="white"/>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Heart, X } from 'lucide-vue-next';

</script>

<style lang="scss" scoped>

</style>
