import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Home from '../views/Home.vue'
import Activities from '../views/Activities.vue'
import Perfil from '../views/Perfil.vue'
import List from '../views/List.vue'
import Register from '../views/Register.vue'
import AdminUsers from '../views/AdminUsers.vue'
import Login from '../views/Login.vue'
import Questions from '../views/Questions.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'perfil',
      component: Perfil
    },
    {
      path: '/',
      name: 'activities',
      component: Activities
    },
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
      path: '/',
      name: 'register',
      component: Register
    },
    {
      path: '/',
      name: 'adminUsers',
      component: AdminUsers
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'questions',
      component: Questions
    },
    
  ]
})

export default router
