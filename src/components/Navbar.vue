<template>
  <nav class="bg-white fixed bottom-0 left-0 right-0 z-1">
    <ul class="flex items-center justify-start px-4 py-4">
      <li class="flex flex-col items-center w-1/3">
        <div class="w-6 h-6 rounded-full mb-1">
          <img src="../assets/icons/recipes-icon.png"/>
        </div>
        <router-link
          to="/"
          class="text-sm sm:text-base text-center"
          active-class="font-semibold"
        >
          Recepten
        </router-link>
      </li>
      <li class="flex flex-col items-center w-1/3">
        <div class="w-6 h-6 rounded-full mb-1">
          <img src="../assets/icons/groups-icon.png"/>
        </div>
        <router-link
          to="/groups-overview"
          class="text-sm sm:text-base text-center"
          active-class="font-semibold"
        >
          Groepen
        </router-link>
      </li>
      <li class="flex flex-col items-center w-1/3">
        <div class="w-10 h-6 rounded-full mb-1">
          <img src="../assets/icons/settings-icon.png"/>
        </div>
        <router-link
          to="/settings-overview"
          class="text-sm sm:text-base text-center"
          active-class="font-semibold"
        >
          Instellingen
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style>
nav{
  box-shadow: 0px -4px 14px 0px rgba(0, 0, 0, 0.10);
}
</style>