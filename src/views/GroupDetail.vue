<script lang="ts" setup>
import placeholderImage from '@/assets/images/placeholder_ruben.jpg'; // Importeer de afbeelding
import Image from '@/components/Image.vue';
import SessionCard from '@/components/SessionCard.vue';
import useMember from '@/composables/useMembers';
import { ChevronLeft, Plus, SquarePen } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAppStore } from '../stores/appStore';

    const imageSrc = ref(placeholderImage); // Gebruik de geïmporteerde afbeelding
    const appStore = useAppStore()
    const router = useRouter()
    const route = useRoute()

    function computedStatus(id: number){
      if (id % 2 === 0) {
        return 'active'
      } else if (id % 3 === 0){
        return 'inactive'
      } else {
        return 'finished'
      }
    }

    const {fetchMembers, error, members, loading} = useMember()

    onMounted(async () => {
      await fetchMembers()
    })

onMounted(() => {
  appStore.setTopNavMeta( {
    leftIcon: ChevronLeft,
    rightIcon: SquarePen,
    onLeftIconClick: () => router.push('/groups-overview'),
    onRightIconClick: () => router.push('/'),
    title: route.params.id.toString()
  })
})


</script>

<template>
  <Teleport to="#topNavTitle">
  <div class="float-right ml-5">
      <Image
        v-for="member in members"
        class="-ml-3 rounded-2xl inline-block"
        :src="member.picture.thumbnail"
        :imageWidth="30"
        alt="Groep afbeelding"
        style="box-shadow: -1px -1px 101px 0px rgba(99,102,241,0.26);"
      />
    </div>
  </Teleport>
  <div class="relative w-[180px] h-[180px] m-auto mt-12">
    <Image
      class="rounded-2xl border-2 border-white"
      :src="imageSrc"
      :imageWidth="180"
      alt="Groep afbeelding"
      style="box-shadow: -1px -1px 101px 0px rgba(99,102,241,0.26);"
    />
  </div>
  <div class="m-7">
    <h1 class="font-secondary mb-5 inline-block text-xl font-bold">Sessies</h1>
    <div class="float-right flex items-center">
      <button class="font-secondary" value="Sessie toevoegen">Sessie toevoegen</button>
      <Plus class="ml-2" :size="20" />
    </div>
    <div v-if="loading">Sessies laden...</div>
    <div v-else-if="error">Error: {{ error.message || error }}</div>
    <div v-else>
    <SessionCard
      v-for="member in members"
      :key="computedStatus(member.location.postcode)"
      :sessionStatus="computedStatus(member.location.postcode)"
      :sessionCardImage="member.picture.thumbnail"
      sessionCardTitle="Etentje"
      sessionCardDate="07/01/2025"
    />
    </div>
    <p v-if="!members.length">Geen sessies gevonden</p>
  </div>
</template>
