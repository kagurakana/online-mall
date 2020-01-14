import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
  path:'',
  redirect:'/home'
  },
  {
    path:'/home',
    component:()=>import("views/home/Home")
  },
  {
    path:'/cart',
    component:()=>import("views/cart/Cart")
  },
  {
    path:'/category',
    component:()=>import("views/category/Category")
  },
  {
    path:'/profile',
    component:()=>import("views/profile/Profile")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
