<script lang="ts" setup>
import GroupCard from '@/components/GroupCard.vue';
import useMember from '@/composables/useMembers';
import { ChevronLeft, Plus } from 'lucide-vue-next';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '../stores/appStore';

const appStore = useAppStore();
const router = useRouter();

const { fetchMembers, error, members, loading } = useMember();

onMounted(async () => {
  await fetchMembers();
});

onMounted(() => {
  appStore.setTopNavMeta({
    leftIcon: ChevronLeft,
    rightIcon: Plus,
    onLeftIconClick: () => router.push('/groups-overview'),
    onRightIconClick: () => router.push('/create-group'),
    title: 'Mijn groepen',
  });
});
</script>

<template>
  <div class="relative m-auto mt-12"></div>
  <div class="m-7">
    <div v-if="loading">Groepen laden...</div>
    <div v-else-if="error">Error: {{ error.message || error }}</div>
    <div v-else>
      <GroupCard
        v-for="member in members"
        :key="member.location.postcode"
        :groupCardImage="member.picture.thumbnail"
        :groupCardTitle="member.name.first"
        :groupTeamMembers="members"
        @click="() => router.push({ name: 'group detail', params: { id: member.name.first, img: member.picture.thumbnail } })"
      ></GroupCard>
      <p v-if="!members.length">Geen groepen gevonden</p>
    </div>
  </div>
</template>
