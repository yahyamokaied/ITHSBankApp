import { createRouter, createWebHashHistory } from 'vue-router'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User1 from '../views/User1.vue'
import User2 from '../views/User2.vue'
import Users from '../views/Users.vue'
import History from '../views/History.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user1',
    name: 'User1',
    component: User1
  },
  {
    path: '/user2',
    name: 'User2',
    component: User2
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
