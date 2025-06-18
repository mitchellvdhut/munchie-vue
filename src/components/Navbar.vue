<!-- src/components/NavBar.vue -->
<template>
  <nav class="bg-gray-800 fixed bottom-0 left-0 right-0">
    <ul class="flex items-center justify-between px-4 py-4">
      <li>
        <router-link
          to="/"
          class="text-white text-md sm:text-base hover:text-green-400 transition-colors w-full text-center"
          active-class="font-bold text-green-400"
        >
          Page 1
        </router-link>
      </li>
      <li>
        <router-link
          to="/page-2"
          class="text-white text-md sm:text-base hover:text-green-400 transition-colors w-full text-center"
          active-class="font-bold text-green-400"
        >
          Page 2
        </router-link>
      </li>
      <li>
        <router-link
          to="/page-3"
          class="text-white text-md sm:text-base hover:text-green-400 transition-colors w-full text-center"
          active-class="font-bold text-green-400"
        >
          Page 3
        </router-link>
      </li>
      <li>
        <router-link
          to="/page-4"
          class="text-white text-md sm:text-base hover:text-green-400 transition-colors w-full text-center"
          active-class="font-bold text-green-400"
        >
          Page 4
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
defineOptions({ name: 'NavBar' });
</script>