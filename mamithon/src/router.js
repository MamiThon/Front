import { createRouter, createWebHistory } from 'vue-router'
import loginPage from '@/pages/login-page.vue'
import signupPage from '@/pages/signup-page.vue'
import homePage from '@/pages/home-page.vue'
import createCategoryIngredient from './pages/create-category-ingredient.vue'
import createIngredient from './pages/create-ingredient.vue'
import showAllIngredients from './pages/show-all-ingredient.vue'


const routes = [

    {
        path: '/',
        name: 'home',
        component: homePage
    },

    {
        path: '/login',
        name: 'login',
        component: loginPage
    },
    {
        path: '/signup',
        name: 'signup',
        component: signupPage
    },
    {
        path: '/create-category-ingredient',
        name: 'create-category-ingredient',
        component: createCategoryIngredient
    },
    {
        path: '/create-ingredient',
        name: 'create-ingredient',
        component: createIngredient
    },
    {
        path: '/show-all-ingredients',
        name: 'show-all-ingredients',
        component: showAllIngredients
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
  })


  export default router