<template>
  <div class="text-end">
    <button type="button" class="btn btn-primary"
    v-on:click="openModel()">新增產品</button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in products" v-bind:key="'key'+index">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">
          {{ item.origin_price }}
        </td>
        <td class="text-right">
          {{ item.price }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm">編輯</button>
            <button class="btn btn-outline-danger btn-sm">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <product-model ref="ProductModel" v-bind:product="tempProduct" v-on:update-product="updateProduct"></product-model>
</template>

<script>
import ProductModel from '../components/ProductModel.vue'

export default {
  data () {
    return {
      // 產品
      products: [],
      // 分頁
      pagination: {},
      // 暫存產品
      tempProduct: {}
    }
  },
  components: {
    ProductModel
  },
  methods: {
    // 得到全部產品
    getProducts () {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/admin/products`
      this.axios.get(api)
        .then((response) => {
          if (response.data.success) {
            console.log(response)
            this.products = response.data.products
            this.pagination = response.data.pagination
          }
        })
    },
    // 開啟新增頁面
    openModel () {
      this.tempProduct = {}
      const Model = this.$refs.ProductModel
      Model.showModel()
    },
    updateProduct (item) {
      this.tempProduct = item
      console.log(this.tempProduct)
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/admin/product`
      this.axios.post(api, { data: this.tempProduct })
        .then((response) => {
          console.log(response)
          if (response.data.success) {
            this.tempProduct = {}
            this.$refs.ProductModel.hideModel()
            this.getProducts()
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created () {
    this.getProducts()
  },
  mounted () {
    console.log(this.$refs)
  }
}
</script>
