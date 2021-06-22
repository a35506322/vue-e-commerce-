<template>
  <nav-bar></nav-bar>
  <div class="container-fluid mt-3 position-relative">
    <toast-message></toast-message>
    <router-view></router-view>
  </div>
</template>

<script>
// import { cookieFuc } from '../JS/cookie.js'
import navBar from '../components/Navbar.vue'
import emitter from '../methods/emitter.js'
import $httpMessageState from '../methods/httpMessageState.js'
import ToastMessage from '../components/ToastMessage.vue'

export default {
  // 外層注入子層皆可以使用此套件搭配inject
  provide () {
    return {
      emitter,
      $httpMessageState
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // headers 加了token 進行驗證,但她用戶端跟後台取的資料不一樣
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_PATH}api/user/check`
    // 登入未成功返回登入頁面
    this.$http.post(api, '').then((res) => {
      if (!res.data.success) {
        this.$router.push('/login')
      }
    })
  },
  mounted () {
    emitter.emit('message', { title: '登入成功' })
  },
  // 此方法錯誤應該再畫面還沒生成就要檢查
  // mounted () {
  //   // JS在mouted才可以操作
  //   // 取得由登入後塞的cookie中的token值
  //   const token = cookieFuc.getItem('hexToken')
  //   // 全域寫入
  //   this.$http.defaults.headers.common.Authorization = token
  //   const api = `${process.env.VUE_APP_PATH}api/user/check`
  //   this.$http.post(api, '')
  //     .then((response) => {
  //       console.log(response)
  //       if (!response.data.success) {
  //         this.$router.push('/login')
  //       }
  //     })
  // },
  components: {
    navBar,
    ToastMessage
  }
}
</script>
