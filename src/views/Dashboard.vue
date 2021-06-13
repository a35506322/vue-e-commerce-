<template>
  <nav-bar></nav-bar>
  <div class="container-fluid">
    <router-view></router-view>
  </div>
</template>

<script>
// import { cookieFuc } from '../JS/cookie.js'
import navBar from '../components/Navbar.vue'

export default {
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_PATH}api/user/check`
    // 登入未成功返回登入頁面
    this.$http.post(api, '').then((res) => {
      if (!res.data.success) {
        this.$router.push('/login')
      }
    })
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
    navBar
  }
}
</script>
