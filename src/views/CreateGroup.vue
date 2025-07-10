<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Check, ChevronLeft, SwitchCamera } from 'lucide-vue-next'
import Image from '@/components/Image.vue'
import { useAppStore } from '@/stores/appStore.ts'

const router = useRouter()
const imageSrc = ref('https://placehold.co/150x150')
const groupName = ref('')
const isInvalid = ref(false)
const appStore = useAppStore()
const file = ref<File | null>(null)

const handleImageChange = (event: InputEvent) => {
  const fileList = (event.target as HTMLInputElement).files
  if (fileList && fileList.length){
    file.value = fileList[0]
  }
  if (file.value) {
    imageSrc.value = URL.createObjectURL(file.value)
    console.log(file.value)
    console.log('Geüploade afbeelding URL:', imageSrc.value) // Debug
  }
}

const validateAndSubmit = () => {
  if (!groupName.value.trim()) {
    isInvalid.value = true
    alert('Vul een groepnaam in.')
    return
  }
  isInvalid.value = false
  router.push({ name: 'group detail', params: { id: groupName.value, img: imageSrc.value } })
}

const handleInput = () => {
  if (groupName.value.trim()) {
    isInvalid.value = false
  }
}

onMounted(() => {
  appStore.setTopNavMeta( {
    leftIcon: ChevronLeft,
    rightIcon: Check,
    onLeftIconClick: () => router.push('/groups-overview'),
    onRightIconClick: validateAndSubmit,
    title: 'Groep maken',
  })
})
</script>

<template>
  <div class="relative m-auto mt-12 h-[180px] w-[180px]">
    <Image
      class="rounded-2xl border-2 border-white"
      :src="imageSrc"
      :imageWidth="180"
      alt="Groep afbeelding"
      style="box-shadow: -1px -1px 101px 0px rgba(99, 102, 241, 0.26)"
    />
    <label class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
      <SwitchCamera class="rounded-full bg-indigo-500 stroke-white p-[8px]" :size="40" />
      <input type="file" accept="image/*" class="hidden" @change="(e) => handleImageChange(e as InputEvent)" />
    </label>
  </div>
  <form @submit.prevent="validateAndSubmit">
    <div class="m-5 grid gap-3">
      <label>Groep naam</label>
      <input
        v-model="groupName"
        type="text"
        :class="['rounded-lg bg-gray-200 p-4', { 'border-2 border-red-500': isInvalid }]"
        required
        @input="handleInput"
        maxlength="99"
      />
    </div>
  </form>
</template>
