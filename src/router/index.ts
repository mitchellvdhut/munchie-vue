import { createRouter, createWebHistory } from 'vue-router';
import RecipesOverview from '@/views/RecipesOverview.vue';
import GroupsOverview from '@/views/GroupsOverview.vue';
import GroupDetail from '@/views/GroupDetail.vue';
import SettingsOverview from '@/views/SettingsOverview.vue';
import PageNotFound from '@/views/PageNotFound.vue';
import CreateGroup from '@/views/CreateGroup.vue'

const routes = [
  {
    path: '/',
    name: 'recipes overview',
    component: RecipesOverview,
  },
  {
    path: '/create-group',
    name: 'create group',
    component: CreateGroup,
  },
  {
    path: '/groups-overview',
    children: [
      {
        path: '',
        name: 'group overview',
        component: GroupsOverview,
      },
      {
        path: 'group-detail/:id',
        name: 'group detail',
        component: GroupDetail,
      },
    ],
  },
  {
    path: '/settings-overview',
    name: 'settings overview',
    component: SettingsOverview,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'pagina niet gevonden',
    component: PageNotFound,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
