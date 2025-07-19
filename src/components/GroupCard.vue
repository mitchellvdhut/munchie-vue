<script setup lang="ts">
import Image from '@/components/Image.vue';
import type { Member } from '@/types';
import { ChevronRight } from 'lucide-vue-next';

const props = withDefaults(defineProps<{
  groupCardTitle: string,
  groupCardImage: string,
  groupCardGroupImage: string
  groupCardLink: string
  groupTeamMembers: Array<Member>
}>(), {
});

</script>

<template>
  <div
    style="box-shadow: 1px 7px 9px 0px rgba(0,0,0,0.25);"
    class="bg-orange-100 flex mb-9 rounded-xl p-4"
  >
    <div class="flex flex-grow">
      <Image
        :imageWidth="75"
        :src="groupCardImage"
        class="border-2 rounded-full border-white"
      />
      <div class="flex ml-4 flex-col ">
        <h1 class="font-secondary inline-block text-xl font-bold">{{ groupCardTitle }}</h1>
        <div class="flex">
          <Image
          v-for="member in groupTeamMembers"
          class="-ml-3 first:ml-0 rounded-2xl inline-block"
          :src="member.picture.thumbnail"
          :imageWidth="30"
          alt="Groep afbeelding"
          style="box-shadow: -1px -1px 101px 0px rgba(99,102,241,0.26);"
        />
        </div>
      </div>
    </div>
        <ChevronRight class="m-6"/>
  </div>
</template>
