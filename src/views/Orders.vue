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
            {{ `${product.product_id}  數量：${product.qty}` }}
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
            readonly
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
      // const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/admin/orders`
      // this.isLoading = true
      // this.axios.get(api)
      //   .then((response) => {
      //     if (response.data.success) {
      //       this.orders = this.response.data.orders
      //       this.pagination = this.response.data.pagination
      //       this.isLoading = false
      //     }
      //   })
      const OrdersData = {
        success: true,
        orders: [
          {
            create_at: 1523539834,
            id: '-L9u2EUkQSoEmW7QzGLF',
            is_paid: true,
            message: '這是留言',
            paid_date: 1523539924,
            payment_method: 'credit_card',
            products: {
              L8nBrq8Ym4ARI1Kog4t: {
                id: 'L8nBrq8Ym4ARI1Kog4t',
                product_id: '-L8moRfPlDZZ2e-1ritQ',
                qty: '3'
              }
            },
            total: 100,
            user: {
              address: 'kaohsiung',
              email: 'test@gmail.com',
              name: 'test',
              tel: '0912346768'
            },
            num: 1
          },
          {
            create_at: 1523539519,
            id: '-L9u11NAE0m0SpSBUDIq',
            is_paid: false,
            message: '這是留言',
            payment_method: 'credit_card',
            products: {
              L8nBrq8Ym4ARI1Kog4t: {
                id: 'L8nBrq8Ym4ARI1Kog4t',
                product_id: '-L8moRfPlDZZ2e-1ritQ',
                qty: '3'
              }
            },
            user: {
              address: 'kaohsiung',
              email: 'test@gmail.com',
              name: 'test',
              tel: '0912346768'
            },
            num: 2
          }
        ],
        pagination: {
          total_pages: 1,
          current_page: 1,
          has_pre: false,
          has_next: false,
          category: null
        },
        messages: []
      }

      this.orders = OrdersData.orders
      this.pagination = OrdersData.pagination
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
