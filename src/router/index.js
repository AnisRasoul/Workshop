import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import apiView from '../views/apiView.vue'
import Questions from '../views/Questions.vue'
import AuthorsView from '@/views/AuthorsView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/authors',
      name: 'authors',
      component: AuthorsView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/api',
      name: 'api',
      component: apiView
    },
    {
      path: '/questions',
      name: 'questions',
      component: Questions
    }
    
    
  ]
})

export default router
