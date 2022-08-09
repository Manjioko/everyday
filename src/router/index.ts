import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GoLang from '../views/GoLang.vue'
import Baidu from '../views/BaiduPage.vue'
import Rust from '../views/RustPage.vue'
import Ruby from '../views/RubyView.vue'
import VuePage from '../views/VuePage.vue'
import Angular from '../views/AngularPage.vue'
import test from '../views/test.vue'
import Node from '../views/NodePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: '/baidu',
    name: 'baidu',
    component: Baidu
  },
  {
    path: '/golang',
    name: 'golang',
    component: GoLang
  },
  {
    path: '/rust',
    name: 'rust',
    component: Rust
  },
  {
    path: '/ruby',
    name: 'ruby',
    component: Ruby
  },
  {
    path: '/vue',
    name: 'vue',
    component: VuePage
  },
  {
    path: '/angular',
    name: 'angular',
    component: Angular
  },
  {
    path: '/node',
    name: 'node',
    component: Node
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
