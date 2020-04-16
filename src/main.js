import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'//导入路由  也可以写 router.js

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
