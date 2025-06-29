<script setup>
import TopNav from '@/components/TopNav.vue';
import { ChevronLeft, Check } from 'lucide-vue-next'
import Image from '@/components/Image.vue';

</script>

<template>
<TopNav :leftIcon="ChevronLeft" :rightIcon="Check" linkIconLeft="/" linkIconRight="/" heading="Nieuwe groep" />
<div>
 <Image class="rounded-2xl m-auto mt-12" src="https://placehold.co/150x150"/>
</div>
<form>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
    </div>
</form>
</template>