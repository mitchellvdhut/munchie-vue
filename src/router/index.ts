import { createRouter, createWebHistory } from 'vue-router'
import RecipesOverview from '@/views/RecipesOverview.vue'
import GroupsOverview from '@/views/GroupsOverview.vue'
import GroupDetail from '@/views/GroupDetail.vue'
import CreateGroup from '@/views/CreateGroup.vue'
import SettingsOverview from '@/views/SettingsOverview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'recipes overview',
      component: RecipesOverview,
    },
    {
      path: '/group-detail',
      name: 'group detail',
      component: GroupDetail,
    },
    {
      path: '/create-group',
      name: 'create group',
      component: CreateGroup,
    },
    {
      path: '/groups-overview',
      name: 'group overview',
      component: GroupsOverview,
    },
    {
      path: '/settings-overview',
      name: 'settings overview',
      component: SettingsOverview,
    },
  ],
})

export default router
