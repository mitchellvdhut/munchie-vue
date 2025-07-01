<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import TopNav from '@/components/TopNav.vue';
import { ChevronLeft, Check, SwitchCamera } from 'lucide-vue-next';
import Image from '@/components/Image.vue';

export default defineComponent({
  name: 'CreateGroup',
  components: {
    TopNav,
    Image,
    SwitchCamera,
  },
  setup() {
    const router = useRouter();
    const imageSrc = ref('https://placehold.co/150x150');
    const groupName = ref('');
    const isInvalid = ref(false);

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        imageSrc.value = URL.createObjectURL(file);
        console.log('Geüploade afbeelding URL:', imageSrc.value); // Debug
      }
    };

    const validateAndSubmit = () => {
      if (!groupName.value.trim()) {
        isInvalid.value = true;
        alert('Vul een groepnaam in.');
        return;
      }
      isInvalid.value = false;
      router.push({ name: 'group detail', params: { id: groupName.value, img: imageSrc.value } });
    };

    const handleInput = () => {
      if (groupName.value.trim()) {
        isInvalid.value = false;
      }
    };

    return {
      imageSrc,
      handleImageChange,
      groupName,
      validateAndSubmit,
      handleInput,
      isInvalid,
      ChevronLeft,
      Check,
    };
  },
});
</script>

<template>
  <TopNav
    :leftIcon="ChevronLeft"
    :rightIcon="Check"
    linkIconLeft="/groups-overview"
    :onRightIconClick="validateAndSubmit"
    heading="Groep maken"
  />
  <div class="relative w-[180px] h-[180px] m-auto mt-12">
    <Image
      class="rounded-2xl border-2 border-white"
      :src="imageSrc"
      :imageWidth="180"
      alt="Groep afbeelding"
      style="box-shadow: -1px -1px 101px 0px rgba(99,102,241,0.26);"
    />
    <label class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
      <SwitchCamera class="stroke-white bg-indigo-500 rounded-full p-[8px]" :size="40" />
      <input type="file" accept="image/*" class="hidden" @change="handleImageChange" />
    </label>
  </div>
  <form @submit.prevent="validateAndSubmit">
    <div class="grid m-5 gap-3">
      <label>Groep naam</label>
      <input
        v-model="groupName"
        type="text"
        :class="[
          'bg-gray-200 rounded-lg p-4',
          { 'border-2 border-red-500': isInvalid }
        ]"
        required
        @input="handleInput"
        maxlength="99"
      />
    </div>
  </form>
</template>