<template>
  <div class="toast-container position-absolute pe-3 top-0 end-0">
    <Toast v-for="(msg, key) in messages" :key="key"
      :msg="msg"
    />
  </div>
</template>

<script>
import Toast from '../components/Toast.vue'

export default {
  components: { Toast },
  data () {
    return {
      messages: []
    }
  },
  inject: ['emitter'],
  mounted () {
    // 請自行補上 emitter 事件
    this.emitter.on('message', message => {
      // 解構賦值
      const { style = 'success', title, content } = message
      // push到陣列
      this.messages.push({ style, title, content })
    })
  }
}
</script>
