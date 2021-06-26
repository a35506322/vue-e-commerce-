<template>
  <Loading :active="isLoading"></Loading>
  <div class="my-5 row justify-content-center">
    <form class="col-md-6" v-on:submit.prevent="payOrder">
      <table class="table align-middle">
        <thead>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        <tbody>
        <tr v-for="(item, index) in order.products" v-bind:key="'key'+index">
          <td>{{item.product.title}}</td>
          <td>{{item.qty}}/ 個</td>
          <td class="text-end">
            <div class="h6" v-if="!item.hasOwnProperty('coupon')">{{item.product.price}}</div>
            <del class="h6" v-if="item.hasOwnProperty('coupon')">原價：{{item.product.price}}</del>
            <div class="h6" v-if="item.hasOwnProperty('coupon')">折價後：{{item.final_total / item.qty}}</div>
          </td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td colspan="2" class="text-end">總計</td>
          <td class="text-end">{{order.total}}</td>
        </tr>
        </tfoot>
      </table>

      <table class="table">
        <tbody v-if="order.user">
          <tr>
            <th width="100">Email</th>
            <td>{{order.user.email}}</td>
          </tr>
          <tr>
            <th>姓名</th>
            <td>{{order.user.name}}</td>
          </tr>
          <tr>
            <th>收件人電話</th>
            <td>{{order.user.tel}}</td>
          </tr>
          <tr>
            <th>收件人地址</th>
            <td>{{order.user.address}}</td>
          </tr>
          <tr>
            <th>付款狀態</th>
            <td>
              <span v-if="!order.is_paid">尚未付款</span>
              <span v-else class="text-success">付款完成</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-end" v-if="!order.is_paid">
        <button class="btn btn-danger">確認付款去</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['orderid'],
  data () {
    return {
      isLoading: false,
      order: {}
    }
  },
  methods: {
    getOrder (orderid) {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/order/${orderid}`
      this.isLoading = true
      this.axios.get(api)
        .then((response) => {
          if (response.data.success) {
            console.log(response)
            this.order = response.data.order
          }
          this.isLoading = false
        })
        .catch((error) => {
          console.log(error)
        })
    },
    payOrder () {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/pay/${this.orderid}`
      this.isLoading = true
      this.axios.post(api)
        .then((response) => {
          if (response.data.success) {
            console.log(response)
            this.getOrder(this.orderid)
          }
          this.isLoading = false
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created () {
    this.getOrder(this.orderid)
  }
}
</script>
