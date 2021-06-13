<template>
  <div class="text-end">
    <button type="button" class="btn btn-primary"
    v-on:click="openModel(true)">新增產品</button>
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
            <button class="btn btn-outline-primary btn-sm" v-on:click="openModel(false,item)">編輯</button>
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
      tempProduct: {},
      // 判別是新增或編輯
      isNew: true
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
            this.products = response.data.products
            this.pagination = response.data.pagination
          }
        })
    },
    // 開啟新增頁面
    openModel (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      const Model = this.$refs.ProductModel
      Model.showModel()
    },
    updateProduct (item) {
      this.tempProduct = item
      let api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/admin/product`
      let method = 'post'
      if (!this.isNew) {
        api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/admin/product/${item.id}`
        method = 'put'
      }
      this.axios[method](api, { data: this.tempProduct })
        .then((response) => {
          if (response.data.success) {
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
  }
}
</script>
