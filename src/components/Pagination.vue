<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" v-if="pages.has_pre" v-on:click.prevent="emitPages(pages.current_page - 1)">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="i in pages.total_pages" v-bind:key="'key'+i"
      v-bind:class="{'active': i === pages.current_page}" v-on:click.prevent="emitPages(i)">
        <a class="page-link" href="#">{{ i }}</a>
      </li>
      <li class="page-item" v-if="pages.has_next" v-on:click.prevent="emitPages(pages.current_page + 1)">
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
  props: ['pages'],
  methods: {
    emitPages (val) {
      this.$emit('emit-page', val)
    }
  }
}
</script>
