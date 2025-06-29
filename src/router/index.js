import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Users from '../pages/Users.vue'
import files from '../pages/myfile.vue'
import { ROUTES, ROUTE_NAMES } from '../constants/routes.js'
import Ais from '../pages/Ais.vue'
import Mycomputed from '@/Mycomputed.vue'

const routes = [
  {
    path: ROUTES.HOME,
    name: ROUTE_NAMES.HOME,
    component: Home
  },
  {
    path: ROUTES.USERS,
    name: ROUTE_NAMES.USERS,
    component: Users
  },
   {
    path: ROUTES.files,
    name: ROUTE_NAMES.files,
    component: files
  },
  {
    path: ROUTES.AIS,
    name: ROUTE_NAMES.AIS,
    component: Ais,
  },
  {
    path: ROUTES.Mycomputed,
    name: ROUTE_NAMES.Mycomputed,
    component: Mycomputed,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 