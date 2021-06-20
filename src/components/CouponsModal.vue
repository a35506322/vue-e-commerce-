<template>
  <div class="modal fade" tabindex="-1" aria-hidden="true" ref="modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>{{ isNew? '新增' : '修改' }}優惠卷</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="mb-3">
              <label for="title" class="form-label">名稱</label>
              <input type="text" class="form-control" id="title"
                      v-model.trim="tempData.title" placeholder="請輸入名稱">
            </div>
            <div class="mb-3">
              <label for="percent" class="form-label">折扣百分比</label>
              <input type="number" class="form-control" id="percent"
                      v-model.number="tempData.percent" placeholder="請輸入折扣百分比，不填即為預設100%">
            </div>
            <div class="mb-3">
              <label for="due_date" class="form-label">到期日</label>
              <input type="date" class="form-control" id="due_date"
                      v-model="tempData.due_date" placeholder="請輸入到期日" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}">
            </div>
            <div class="mb-3">
              <label for="code" class="form-label">優惠代碼</label>
              <input type="text" class="form-control" id="code"
                      v-model.trim="tempData.code"  placeholder="請輸入優惠代碼">
            </div>
            <div class="mb-3">
              <input class="form-check-input" type="checkbox"
                      :true-value="1"
                      :false-value="0"
                      id="is_enabled"
                      v-model="tempData.is_enabled">
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary" v-on:click="sure()">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalMixins from '../mixins/ModalMixins.js'

export default {
  mixins: [ModalMixins],
  props: {
    isNew: {
      type: Boolean
    }
  },
  data () {
    return {
      tempIsNew: true
    }
  },
  methods: {
    sure () {
      this.$emit('update-coupons', this.tempData)
    }
  }
}
</script>
