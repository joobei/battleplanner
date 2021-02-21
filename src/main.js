import { createApp } from 'vue'
import { FontAwesomeIcon } from "@/font-awesome"
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Matchlist from './components/Matchlist'

const routes = 
[
    {
        path:'/',
        name:'Home',
        component: Matchlist
    }
]

const router = createRouter({
  history: createWebHistory('/base-directory/'),
  routes // short for `routes: routes`
})

createApp(App).use(router).component("fa", FontAwesomeIcon).mount('#app')