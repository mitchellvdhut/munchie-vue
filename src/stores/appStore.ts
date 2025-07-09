import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { TopNavMeta } from '@/types/router.ts'

export const useAppStore = defineStore('appStore', () => {
  const topNavMeta = ref<TopNavMeta | undefined>(undefined)

  function setTopNavMeta(meta: TopNavMeta) {
    topNavMeta.value = meta
  }

  return { topNavMeta, setTopNavMeta }
})
