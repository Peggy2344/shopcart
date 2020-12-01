import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 根據 icon 的種類引用
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
library.add(faShoppingBag)

// 註冊元件
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(Vuesax)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
