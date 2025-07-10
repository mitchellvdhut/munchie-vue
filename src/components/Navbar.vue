<template>
  <nav class="bg-white fixed bottom-0 left-0 right-0 z-1">
    <ul class="flex items-center justify-around py-4 w-full">
      <router-link
          to="/"
          class="text-sm font-secondary sm:text-base text-center flex flex-col items-center w-1/3"
          active-class="font-bold"
      >
        <div class="w-6 h-6 rounded-full mb-1">
          <img src="../assets/icons/recipes-icon.png"/>
        </div>
        Recepten
      </router-link>
      <router-link
          to="/groups-overview"
          class="text-sm font-secondary sm:text-base text-center flex flex-col items-center w-1/3"
          active-class="font-bold"
      >
        <div class="w-6 h-6 rounded-full mb-1">
          <img src="../assets/icons/groups-icon.png"/>
        </div>
        Groepen
      </router-link>
      <router-link
          to="/settings-overview"
          class="text-sm font-secondary sm:text-base text-center flex flex-col items-center w-1/3"
          active-class="font-bold"
      >
        <div class="w-10 h-6 rounded-full mb-1">
          <img src="../assets/icons/settings-icon.png"/>
        </div>
        Instellingen
      </router-link>
    </ul>
  </nav>
</template>

<style>
nav{
  box-shadow: 0px -4px 14px 0px rgba(0, 0, 0, 0.10);
}
</style>

