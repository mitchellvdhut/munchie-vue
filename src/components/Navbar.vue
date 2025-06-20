<template>
  <nav class="bg-white fixed bottom-0 left-0 right-0 z-10">
    <ul class="flex items-center justify-around px-4 py-4">
      <li
        v-for="item in menuItems"
        :key="item.path"
        class="flex flex-col items-center flex-1"
      >
        <div class="rounded-full mb-1 w-6 h-6">
          <img :src="item.icon" />
        </div>
        <router-link
          :to="item.path"
          class="text-sm text-black sm:text-base text-center"
          active-class="font-semibold"
        >
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      menuItems: [
        {
          path: '/',
          label: 'Recepten',
          icon: new URL('@/assets/icons/recipes-icon.png', import.meta.url).href,
          iconWidth: 'w-6 h-6',
        },
        {
          path: '/page-2',
          label: 'Groepen',
          icon: new URL('@/assets/icons/groups-icon.png', import.meta.url).href,
          iconWidth: 'w-6 h-6',
        },
        {
          path: '/page-3',
          label: 'Instellingen',
          icon: new URL('@/assets/icons/settings-icon.png', import.meta.url).href,
          iconWidth: 'w-10 h-6',
        },
      ],
    };
  },
};
</script>

<style>
nav{
  box-shadow: 0px -4px 14px 0px rgba(0, 0, 0, 0.10);
}
</style>