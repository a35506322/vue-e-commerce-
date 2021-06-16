<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" v-if="has_pre" v-on:click.prevent="emitPages(current_page - 1)">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="i in total_pages" v-bind:key="'key'+i"
      v-bind:class="{'active': i === current_page}" v-on:click.prevent="emitPages(i)">
        <a class="page-link" href="#">{{ i }}</a>
      </li>
      <li class="page-item" v-if="has_next" v-on:click.prevent="emitPages(current_page + 1)">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
export default {
  props: ['category', 'current_page', 'has_next', 'has_pre', 'total_pages'],
  data () {
    return {
    }
  },
  methods: {
    emitPages (val) {
      this.$emit('emit-page', val)
    }
  }
}
</script>
