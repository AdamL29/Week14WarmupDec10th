import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/views/HomePage';
import AdvicePage from '@/views/AdvicePage';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: 'Home',
    component: HomePage
  },
  {
    path: "/advice",
    name: 'advice',
    component: AdvicePage
  }
]
const router = new VueRouter({
  routes
})

export default router
