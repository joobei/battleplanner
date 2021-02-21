import { createApp } from 'vue'
import { FontAwesomeIcon } from "@/font-awesome"
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Matchlist from './components/Matchlist'
import Memberlist from './components/Memberlist'

const routes = 
[
    {
        path:'/',
        name:'Home',
        component: Matchlist
    },
    {
      path:'/members',
      name:'Members',
      component: Memberlist
    }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes // short for `routes: routes`
})

createApp(App).use(router).component("fa", FontAwesomeIcon).mount('#app')