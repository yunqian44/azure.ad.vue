import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login";
import LoginCallbackView from "../views/LoginCallbackView";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/callback",
    name: "LoginCallbackView",
    component: LoginCallbackView
  },
  {
    path: '/',//路径
    name: 'about',//名称
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')//方式二
  }
]

const router = new VueRouter({
  routes,
  mode: 'history' // 默认 hash 模式
})

export default router
