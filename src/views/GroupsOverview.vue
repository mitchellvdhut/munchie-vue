<script setup>
import { ChevronLeft, Plus } from 'lucide-vue-next'; // Importeert Lucide icons als components
import Image from '@/components/Image.vue';
import TopNav from '@/components/TopNav.vue';
import munchieOverviewImage from '@/assets/images/munchie_groups_overview.png';
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<template>
  <TopNav :leftIcon="ChevronLeft" :rightIcon="Plus" linkIconLeft="/recipes-overview" :onRightIconClick="() => router.push({ name: 'create group'})" heading="Mijn groepen" />
  <Image
    :src="munchieOverviewImage"
    alt="Happy Munchie Image"
    width="250"
    class="m-auto mt-12"
  />
</template>