<script setup>
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'; // Importeert Lucide icons als components
import ActionButton from '@/components/ActionButton.vue';
import Image from '@/components/Image.vue';
import TopNav from '@/components/TopNav.vue';
import sadMunchie from '@/assets/images/sad_munchie.png';
</script>

<template>
  <TopNav :leftIcon="ChevronLeft" :rightIcon="ChevronRight" linkIconLeft="/recipes-overview" linkIconRight="/create-group" heading="Mijn groepen" /> <!-- -->
  <div class="m-8 flex flex-col p-10 bg-white shadow-lg rounded-xl">
    <h4 class="p-3 text-center font-primary">Je hebt nog geen groepen</h4>
    <router-link to="/create-group" class="m-auto">
      <ActionButton
        class="p-3 bg-orange-400 text-white rounded-xl w-48"
        type="submit"
        value="Maak een groep"
      />
    </router-link>
  </div>
  <Image
    :src="sadMunchie"
    alt="Happy Munchie Image"
    width="150"
    class="m-auto mt-36 mb-12"
  />
  <h1 class="p-3 text-center font-semibold text-2xl text-gray-500">
    Je hebt nog geen groepen...
  </h1>
</template>