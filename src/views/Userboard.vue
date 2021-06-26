<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">用戶端</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  <div class="container-fluid mt-3 position-relative">
    <toast-message></toast-message>
    <router-view></router-view>
  </div>
</template>

<script>
import emitter from '../methods/emitter.js'
import ToastMessage from '../components/ToastMessage.vue'
import $httpMessageState from '../methods/httpMessageState'

export default {
  // 外層注入子層皆可以使用此套件搭配inject
  provide () {
    return {
      emitter,
      $httpMessageState
    }
  },
  components: {
    ToastMessage
  }
}
</script>
