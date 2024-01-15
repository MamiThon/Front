import { createRouter, createWebHistory } from 'vue-router'
import loginPage from '@/pages/login-page.vue'
import signupPage from '@/pages/signup-page.vue'


const routes = [
    {
        path: '/login',
        name: 'login',
        component: loginPage
    },
    {
        path: '/signup',
        name: 'signup',
        component: signupPage
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
  })


  export default router