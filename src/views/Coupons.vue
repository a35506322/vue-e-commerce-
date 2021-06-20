<template>
  <Loading :active="isLoading" :is-full-page="Boolean('true')"></Loading>
  <div class="text-end">
    <button type="button" class="btn btn-primary" v-on:click="openModal(true)">新增優惠卷</button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>名稱</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in coupons" v-bind:key="'key'+index">
        <td>{{item.title}}</td>
        <td class="text-right">
          {{item.percent}}
        </td>
        <td class="text-right">
          {{ $filters.ToLocalDate(item.due_date)}}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" v-on:click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" v-on:click="delModal(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <pagination v-bind:pages="pagination" v-on:emit-page="UpdatePage"></pagination>
  <coupons-modal ref="CouponsModal" v-bind:isNew="isNew" v-bind:data="tempCoupon" v-on:update-coupons="UpdateCoupons"></coupons-modal>
  <del-coupons-modal ref="DelCouponsModal" v-bind:data="tempCoupon" v-on:del-coupons="DelCoupons"></del-coupons-modal>
</template>

<script>
import Pagination from '../components/Pagination.vue'
import CouponsModal from '../components/CouponsModal.vue'
import DelCouponsModal from '../components/DelCouponsModal.vue'

export default {
  data () {
    return {
      // 優惠卷
      coupons: [],
      // 分頁
      pagination: {},
      // 暫存優惠卷
      tempCoupon: {},
      // 判斷新增修改
      isNew: true,
      // Loading開關
      isLoading: false
    }
  },
  inject: ['emitter', '$httpMessageState'],
  methods: {
    // 取得優惠卷
    getCoupos (page = 1) {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/admin/coupons?page=${page}`
      this.isLoading = true
      this.axios.get(api)
        .then((response) => {
          if (response.data.success) {
            console.log(response)
            this.coupons = response.data.coupons
            this.pagination = response.data.pagination
            this.isLoading = false
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // 新增/更新 Modal
    openModal (isNew, item = {}) {
      this.isNew = isNew
      // 要複製才能避免傳參考特性的雷
      this.tempCoupon = { ...item }
      if (this.isNew === true) {
      } else {
        this.tempCoupon = { ...item }
        this.tempCoupon.due_date = this.$filters.ToLocalDate(this.tempCoupon.due_date)
      }
      this.$refs.CouponsModal.showModal()
    },
    delModal (item) {
      // 要複製才能避免傳參考特性的雷
      this.tempCoupon = { ...item }
      this.$refs.DelCouponsModal.showModal()
    },
    UpdateCoupons (item) {
      let api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/admin/coupon`
      let method = 'post'
      let status = '新增'
      if (this.isNew === false) {
        api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/admin/coupon/${item.id}`
        method = 'put'
        status = '修改'
      }
      this.isLoading = true
      this.tempCoupon = { ...item }
      // 將時間轉換Unix Timestamp
      this.tempCoupon.due_date = Math.floor(new Date(this.tempCoupon.due_date).getTime() / 1000)
      // 新增要有屬性才能新增
      if (this.isNew) {
        const hasPercentProperty = Object.prototype.hasOwnProperty.call(this.tempCoupon, 'percent')
        if (!hasPercentProperty) {
          this.tempCoupon.percent = 100
        }

        const hasIsEnabledProperty = Object.prototype.hasOwnProperty.call(this.tempCoupon, 'is_enabled')
        if (!hasIsEnabledProperty) {
          this.tempCoupon.is_enabled = 0
        }
      }
      this.axios[method](api, { data: this.tempCoupon })
        .then((response) => {
          this.$httpMessageState(response, status)
          this.getCoupos()
          this.$refs.CouponsModal.hideModal()
          this.isLoading = false
        })
        .catch((error) => {
          console.log(error)
        })
    },
    DelCoupons (id) {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/admin/coupon/${id}`
      this.isLoading = true
      this.axios.delete(api)
        .then((response) => {
          this.$httpMessageState(response, '刪除')
          this.getCoupos()
          this.$refs.DelCouponsModal.hideModal()
          this.isLoading = false
        })
        .catch((error) => {
          console.log(error)
        })
    },
    UpdatePage (page) {
      this.getCoupos(page)
    }
  },
  created () {
    this.getCoupos()
  },
  components: {
    CouponsModal,
    DelCouponsModal,
    Pagination
  }
}
</script>
