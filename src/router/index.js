import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SegundaVirginidad from '../views/SegundaVirginidad.vue'
import Ediciones from '../views/Ediciones.vue'
import Resenas from '../views/Resenas.vue'
import Infinity from '../views/Infinity.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/segundavirginidad',
    name: 'SegundaVirginidad',
    component: SegundaVirginidad
  },
  {
    path: '/ediciones',
    name: 'Ediciones',
    component: Ediciones
  },
  {
    path: '/resenas',
    name: 'Resenas',
    component: Resenas
  },
  {
    path: '/infinity',
    name: 'Infinity',
    component: Infinity
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
