import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login";
import store from "../store";
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
  mode: 'history' // 默认 hash 模式  //history
})

var storeTemp = store;
router.beforeEach((to, from, next) => {
  if (!storeTemp.state.token) {
    storeTemp.commit("saveToken", window.localStorage.Token);
  }
  if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限
    if (storeTemp.state.token) {
      // 通过vuex state获取当前的token是否存在
      next();
    } else {
      //这里使用Id4授权认证，用Jwt，请删之，并把下边的跳转login 打开；
      applicationUserManager.login();

    }
  } else {
    next();
  }
});

export default router
