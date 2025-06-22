import { createRouter, createWebHistory } from 'vue-router'

import PageOne from '@/views/PageOne.vue'
import PageTwo from '@/views/PageTwo.vue'
import PageThree from '@/views/PageThree.vue'
import PageFour from '@/views/PageFour.vue'
import PageFive from '@/views/PageFive.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'page 1',
      component: PageOne,
    },
    {
      path: '/page-2',
      name: 'page 2',
      component: PageTwo,
    },
    {
      path: '/page-3',
      name: 'page 3',
      component: PageThree,
    },
    {
      path: '/page-4',
      name: 'page 4',
      component: PageFour,
    },
    {
      path: '/page-5',
      name: 'page 5',
      component: PageFive,
    },
  ],
})

export default router
