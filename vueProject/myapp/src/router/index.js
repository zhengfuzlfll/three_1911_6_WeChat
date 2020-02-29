import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Home from '../views/home/index.vue'
import Footer from '@/components/Footer.vue'

Vue.use(VueRouter)

// 路由懒加载，（不在头部全部引入，否则每次加载都全部加载一次）
const routes = [
  { // 重定向
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home', // 命名路由，可以用于声明式导航传参
    components: { // 路由懒加载，
      default: () => import('@/views/home/index.vue'),
      footer: Footer
    }
  },
  {
    path: '/kind',
    name: 'kind', // 命名路由，可以用于声明式导航传参
    components: { // 路由懒加载，
      default: () => import('@/views/kind/index.vue'),
      footer: Footer
    }
  },
  {
    path: '/cart',
    name: 'cart', // 命名路由，可以用于声明式导航传参
    components: { // 路由懒加载，
      default: () => import('@/views/cart/index.vue'),
      footer: Footer
    }
  },
  {
    path: '/user',
    name: 'user', // 命名路由，可以用于声明式导航传参
    components: { // 路由懒加载，
      default: () => import('@/views/user/index.vue'),
      footer: Footer
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
