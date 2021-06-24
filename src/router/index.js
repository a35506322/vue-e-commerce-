import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/Products.vue')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('../views/Orders.vue')
      },
      {
        path: 'coupons',
        name: 'coupons',
        component: () => import('../views/Coupons.vue')
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/Userboard.vue'),
    children: [
      {
        path: 'usercar',
        name: 'usercar',
        component: () => import('../views/Usercar.vue')
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('../views/Useproduct.vue'),
        props: (route) => {
          return {
            id: route.params.id
          }
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router
