<script lang="ts" setup>
import GroupCard from '@/components/GroupCard.vue';
import Image from '@/components/Image.vue';
import useMember from '@/composables/useMembers';
import { ChevronLeft, Plus, ChevronRight } from 'lucide-vue-next';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '../stores/appStore';

    const appStore = useAppStore()
    const router = useRouter()


    const {fetchMembers, error, members, loading} = useMember()
    onMounted(async () => {
      await fetchMembers()
    })

    
onMounted(() => {
  appStore.setTopNavMeta( {
    leftIcon: ChevronLeft,
    rightIcon: Plus,
    onLeftIconClick: () => router.push('/groups-overview'),
    onRightIconClick: () => router.push('/create-group'),
    title: 'Mijn groepen',
  })
})

</script>

<template>
<div class="relative m-auto mt-12">
  </div>
  <div class="m-7">
    <GroupCard
      v-for="member in members"
      :key="member.location.postcode"
      :groupCardImage="member.picture.thumbnail"
      :groupCardTitle="member.name.first"
    >
    <div class="ml-3">
    <Image
        v-for="member in members"
        class="-ml-3 rounded-2xl inline-block"
        :src="member.picture.thumbnail"
        :imageWidth="30"
        alt="Groep afbeelding"
        style="box-shadow: -1px -1px 101px 0px rgba(99,102,241,0.26);"
      />
      </div>
    </GroupCard>
  </div>
</template>