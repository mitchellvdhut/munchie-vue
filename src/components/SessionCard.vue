<script setup>
import Image from '@/components/Image.vue';
import ActionButton from '@/components/ActionButton.vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  sessionCardTitle: {
    type: String,
    default: 'Tekst hier...',
  },
  sessionCardDate: {
    type: String,
    default: 'Datum hier...',
  },
  sessionCardButtonText: {
    type: String,
    default: 'Start',
  },
  sessionCardImage: {
    type: String,
  },
});

const emit = defineEmits(['click']); // Definieer een custom event

</script>

<template>
  <div
    style="box-shadow: 1px 7px 9px 0px rgba(0,0,0,0.25);"
    class="bg-orange-300 mb-9 rounded-xl flex items-center justify-between p-4"
  >
    <div class="flex items-center">
      <Image
        :imageWidth="75"
        :src="sessionCardImage"
        class="border-2 rounded-full border-white"
      />
      <div class="ml-4">
        <h1 class="font-secondary inline-block text-xl font-bold">{{ sessionCardTitle }}</h1>
        <h4 class="font-secondary">{{ sessionCardDate }}</h4>
      </div>
    </div>
    <ActionButton
      class="bg-orange-500 p-3 w-24 font-secondary text-white rounded-xl"
      :value="sessionCardButtonText"
      @click="$emit('click')"
    ></ActionButton>
  </div>
</template>