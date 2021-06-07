<template>
  Dashboard
</template>

<script>
import { cookieFuc } from '../JS/cookie.js'

export default {
  // created () {
  //   const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
  //   console.log(token)
  //   this.$http.defaults.headers.common.Authorization = token
  //   const api = `${process.env.VUE_APP_PATH}api/user/check`
  //   this.$http.post(api, '').then((res) => {
  //     if (!res.data.success) {
  //       this.$router.push('login')
  //     }
  //   })
  // }
  mounted () {
    // JS在mouted才可以操作
    // 取得由登入後塞的cookie中的token值
    const token = cookieFuc.getItem('hexToken')
    // 全域寫入
    this.axios.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_PATH}api/user/check`
    this.axios.post(api, '')
      .then((response) => {
        console.log(response)
        if (!response.data.success) {
          this.$router.push('/login')
        }
      })
  }
}
</script>
