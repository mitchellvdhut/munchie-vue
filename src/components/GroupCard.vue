<script setup lang="ts">
import Image from '@/components/Image.vue';

const props = withDefaults(defineProps<{
  groupCardTitle: string,
  groupCardImage: string,
  groupCardGroupImage: string
  groupCardLink: string
}>(), {
});

</script>

<template>
  <div
    style="box-shadow: 1px 7px 9px 0px rgba(0,0,0,0.25);"
    class="bg-orange-100 mb-9 rounded-xl flex items-center justify-between p-4"
  >
    <div class="flex items-center">
      <Image
        :imageWidth="75"
        :src="groupCardImage"
        class="border-2 rounded-full border-white"
      />
      <div class="ml-4">
        <h1 class="font-secondary inline-block text-xl font-bold">{{ groupCardTitle }}</h1>
        <slot></slot>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>