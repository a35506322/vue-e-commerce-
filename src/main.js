// 注入套件
import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

import App from './App.vue'
import router from './router'
import { currency, ToLocalDate } from './methods/filters.js'

// 全域註冊元件
const app = createApp(App)
// 全域註冊方法
app.config.globalProperties.$filters = {
  currency,
  ToLocalDate
}
app.use(VueAxios, axios)
app.use(router)
app.component('Loading', Loading)
app.mount('#app')
