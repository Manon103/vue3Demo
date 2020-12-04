/**
 * vue3与vue2路由的区别：
 * vue2采用的是构造函数
 * vue3使用createRouter
 * 
 */
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/common/InnerHome.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
      },
      {
        path: 'project',
        component: () => import('../views/project/Project.vue')
      },
      {
        path: 'data',
        component: () => import('../views/technology/Data.vue')
      },
      {
        path: 'dom',
        component: () => import('../views/technology/VirtualDom.vue')
      },
      {
        path: 'setUp',
        component: () => import('../views/grammer/SetUp.vue')
      },
      {
        path: 'computed',
        component: () => import('../views/grammer/Computed.vue')
      },
      {
        path: 'watch',
        component: () => import('../views/grammer/Watch.vue')
      },
      {
        path: 'lifeCycle',
        component: () => import('../views/grammer/LifeCycle.vue')
      },
      {
        path: 'vuex',
        component: () => import('../views/grammer/Store.vue')
      },
      {
        path: 'conclusion',
        component: () => import('../views/conclusion/Conclusion.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
