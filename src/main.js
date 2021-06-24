// 注入套件
import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email } from '@vee-validate/rules'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import { localize, setLocale } from '@vee-validate/i18n'
import App from './App.vue'
import router from './router'
import { currency, ToLocalDate } from './methods/filters.js'

// 註冊vee-validate
defineRule('required', required)
defineRule('email', email)
configure({
  generateMessage: localize('zh_TW', zhTW),
  validateOnInput: true
})
setLocale('zh_TW')
// 全域註冊元件
const app = createApp(App)
// 全域註冊方法
app.config.globalProperties.$filters = {
  currency,
  ToLocalDate
}
app.component('Loading', Loading)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
