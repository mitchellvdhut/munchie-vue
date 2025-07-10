<script setup lang="ts">
import Image from '@/components/Image.vue';
import { computed } from 'vue';

const buttonText = computed(() => {
  if (props.sessionStatus === 'active'){
    return 'Stop'
  } else if (props.sessionStatus === 'inactive'){
    return 'Start'
  } else {
    return ''
  }
})

const props = withDefaults(defineProps<{
  sessionCardTitle: string,
  sessionCardDate: string,
  sessionCardImage: string,
  sessionStatus: 'active' | 'inactive' | 'finished'
}>(), {
  sessionCardTitle:
    'Tekst hier...',
  sessionCardDate:
    'Datum hier...',
});

</script>

<template>
  <Transition>
  <div
    style="box-shadow: 1px 7px 9px 0px rgba(0,0,0,0.25);"
    class="bg-orange-300 mb-9 rounded-xl flex items-center justify-between p-4"
    :class="{
      'bg-blue-100': sessionStatus === 'active',
      'bg-orange-100': sessionStatus === 'inactive',
      'bg-purple-200': sessionStatus === 'finished',
    }"
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
    <button 
      class="bg-orange-500 p-3 w-24 font-secondary text-white rounded-xl" 
      :value="buttonText" 
      v-if="sessionStatus !== 'finished'"
    >
      {{ buttonText }}
    </button>
  </div>
  </Transition>
</template>