import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GetStarted from '../views/GetStarted.vue'
import Examples from "../views/Examples.vue"
import Workshop from "../views/Workshop.vue"
import About from "../views/About.vue"
import Error from "../views/Error.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    name: 'Error',
    component: Error
  },
  {
    path: '/get-started',
    name: 'GetStarted',
    component: GetStarted
  },
  {
    path: '/examples',
    name: 'Examples',
    component: Examples
  },
  {
    path: '/workshop',
    name: 'Workshop',
    component: Workshop
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

const router = new VueRouter({
  routes
})

export default router
