<template>
  <TopNav
    :left-icon="topNavMeta?.leftIcon"
    :right-icon="topNavMeta?.rightIcon"
    :on-left-icon-click="topNavMeta?.onLeftIconClick"
    :on-right-icon-click="topNavMeta?.onRightIconClick"
  >
    {{ topNavMeta?.title }}
  </TopNav>
  <RouterView />
  <Navbar />
</template>

<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import TopNav from '@/components/TopNav.vue'
import { useAppStore } from '@/stores/appStore.ts'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const appStore = useAppStore()
const { topNavMeta } = storeToRefs(appStore)
const router =  useRouter()

onMounted(() => {
  appStore.setTopNavMeta(
  {
    leftIcon: ChevronLeft,
    rightIcon: ChevronRight,
    onLeftIconClick: () => router.push('/groups-overview'),
    onRightIconClick: () => {},
    title: 'Home',
  })
})
</script>
