<template>
  <Loading :active="isLoading" :is-full-page="Boolean('true')"></Loading>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="150">購買時間</th>
        <th width="200">Email</th>
        <th>購買款項</th>
        <th width="150">應付金額</th>
        <th width="150">是否付款</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in orders" v-bind:key="'key' + index">
        <td>
          {{ this.$filters.ToLocalDate(item.create_at) }}
        </td>
        <td class="text-left">
          {{ item.user.email }}
        </td>
        <td>
          <span v-for="(product, index) in item.products" v-bind:key="'key' + index">
            {{ `${product.product.title}  數量：${product.qty}` }}
          </span>
        </td>
        <td>{{ this.$filters.currency(item.total) }}</td>
        <td>
          <div class="form-check form-switch">
            <input
            class="form-check-input"
            type="checkbox"
            v-bind:id="'checkBox' + index"
            v-model="item.is_paid"
            disabled
            />
            <label class="form-check-label" v-bind:for="'checkBox' + index">{{
              item.is_paid ? '已付款' : '未付款'
            }}</label>
          </div>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" v-on:click="openModal(item)">檢視</button>
            <button class="btn btn-outline-danger btn-sm"  v-on:click="openDelModal(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <order-view-modal ref="OrderViewModal" v-bind:data="tempOrders"></order-view-modal>
  <del-order-modal ref="DelOrderModal" v-bind:data="tempOrders"></del-order-modal>
  <pagination v-bind:pages='pagination'></pagination>
</template>

<script>
import OrderViewModal from '../components/OrderViewModal.vue'
import DelOrderModal from '../components/DelOrderModal.vue'
import Pagination from '../components/Pagination.vue'

export default {
  data () {
    return {
      // 訂單
      orders: [],
      // 分業
      pagination: {},
      // Loading開關
      isLoading: false,
      tempOrders: {}
    }
  },
  components: {
    OrderViewModal,
    Pagination,
    DelOrderModal
  },
  methods: {
    // 得到全部訂單
    getOrders () {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/admin/orders`
      this.isLoading = true
      this.axios.get(api)
        .then((response) => {
          if (response.data.success) {
            console.log(response)
            this.orders = response.data.orders
            this.pagination = response.data.pagination
            this.isLoading = false
          }
        })
    },
    // 打開Model
    openModal (item) {
      this.tempOrders = { ...item }
      const Modal = this.$refs.OrderViewModal
      Modal.showModal()
    },
    // 打開刪除Model
    openDelModal (item) {
      this.tempOrders = { ...item }
      const Modal = this.$refs.DelOrderModal
      Modal.showModal()
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
