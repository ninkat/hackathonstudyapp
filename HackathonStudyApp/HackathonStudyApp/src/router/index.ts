import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/logs',
      name: 'logs',
      component: () => import('../views/LogsView.vue')
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: () => import('../views/StudyAchievements.vue')
    },
    {
      path: '/timer',
      name: 'timer',
      component: () => import('../components/MyTimer.vue')
    }
  ]
})

export default router
