<template>
<div class="container">
  <div class="row mt-4">
    <div class="col-md-7">
      <table class="table mt-4">
        <thead>
          <tr>
            <th>圖片</th>
            <th>商品名稱</th>
            <th>價格</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in products" v-bind:key="'key'+index">
            <td style="width: 200px;">
              <div v-bind:style="{backgroundImage:`url(${item.imageUrl})`}"
              style="height: 100px;background-size: cover;background-position: center;">
              </div>
            </td>
            <td>
              <a href="#" class="text-dark">{{item.title}}</a>
            </td>
            <td>
              <div class="h5" v-if="!item.price">{{item.origin_price}}</div>
              <del class="h6" v-if="item.price">原價：{{item.origin_price}}</del>
              <div class="h5" v-if="item.price">現在只要：{{item.price}}</div>
            </td>
            <td>
              <div class="btn-group">
                <button class="btn btn-outline-primary btn-sm" v-on:click="getProdcut(item.id)">查看更多</button>
                <button class="btn btn-outline-danger btn-sm" v-on:click="addCart(item.id)" v-bind:disabled="item.id===status.isLoadingItem">
                    <div v-if="item.id===status.isLoadingItem" class="spinner-grow text-danger spinner-grow-sm" role="status" aria-hidden="true">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  加到購物車
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-5">
      <div class="sticky-top">
        <table class="table align-middle">
          <thead>
            <tr>
              <th></th>
              <th>品名</th>
              <th style="width: 110px">數量</th>
              <th>單價</th>
            </tr>
          </thead>
          <tbody v-if="carts.length>0">
            <tr v-for="(item,index) in carts" v-bind:key="'key'+index">
              <td>
                <button type="button" class="btn btn-outline-danger btn-sm">
                  <i class="bi bi-trash"></i>
                </button>
              </td>
              <td>
                {{item.product.title}}
                <div class="text-success">
                  已套用優惠券
                </div>
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <input type="number" class="form-control" v-model="item.qty">
                  <div class="input-group-text">/ 單位</div>
                </div>
              </td>
              <td class="text-end">
                {{item.product.price}}
                <small class="text-success">折扣價：</small>
              </td>
            </tr>
          </tbody>
          <tfoot>
          <tr>
            <td colspan="3" class="text-end">總計</td>
            <td class="text-end">{{total}}</td>
          </tr>
          <tr>
            <td colspan="3" class="text-end text-success">折扣價</td>
            <td class="text-end text-success">199</td>
          </tr>
          </tfoot>
        </table>
        <div class="input-group mb-3 input-group-sm">
          <input type="text" class="form-control" placeholder="請輸入優惠碼">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">
              套用優惠碼
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  data () {
    return {
      products: [],
      pagination: {},
      status: {
        isLoadingItem: ''
      },
      carts: [],
      total: 0,
      final_total: 0
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/products`
      this.axios.get(api)
        .then((response) => {
          console.log(response)
          if (response.data.success) {
            this.products = response.data.products
            this.pagination = response.data.pagination
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getProdcut (id) {
      this.$router.push(`/user/product/${id}`)
    },
    getCarts () {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/cart`
      this.axios.get(api)
        .then((response) => {
          console.log(response)
          if (response.data.success) {
            this.carts = response.data.data.carts
            this.total = response.data.data.total
            this.final_total = response.data.data.final_total
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    addCart (id) {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/cart`
      this.status.isLoadingItem = id
      this.axios.post(api, { data: { product_id: id, qty: 1 } })
        .then((response) => {
          if (response.data.success) {
            this.status.isLoadingItem = ''
            this.getCarts()
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created () {
    this.getProducts()
    this.getCarts()
  }
}
</script>
