<template>
  <Loading :active="isLoading" :is-full-page="Boolean('true')"></Loading>
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
          {{ $filters.currency (item.origin_price) }}
        </td>
        <td class="text-right">
          {{ $filters.currency (item.price) }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" v-on:click="openModel(false,item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" v-on:click="openDelModel(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <pagination v-bind="pagination" v-on:emit-page="updatePages"></pagination>
  <product-model ref="ProductModel" v-bind:product="tempProduct" v-on:update-product="updateProduct"></product-model>
  <del-model ref="DelModel" v-bind:product="tempProduct" v-on:del-product="delProduct"></del-model>
</template>

<script>
import ProductModel from '../components/ProductModel.vue'
import DelModel from '../components/DelModel.vue'
import Pagination from '../components/Pagination.vue'

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
      isNew: true,
      // Loading開關
      isLoading: false
    }
  },
  components: {
    ProductModel,
    DelModel,
    Pagination
  },
  inject: ['emitter', '$httpMessageState'],
  methods: {
    // 得到全部產品
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/admin/products?page=${page}`
      this.isLoading = true
      this.axios.get(api)
        .then((response) => {
          if (response.data.success) {
            console.log(response)
            this.products = response.data.products
            this.pagination = response.data.pagination
            this.isLoading = false
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
    openDelModel (item) {
      this.tempProduct = { ...item }
      const Model = this.$refs.DelModel
      Model.showModel()
    },
    updateProduct (item) {
      this.isLoading = true
      this.tempProduct = item
      let api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/admin/product`
      let method = 'post'
      if (!this.isNew) {
        api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/admin/product/${item.id}`
        method = 'put'
      }
      this.axios[method](api, { data: this.tempProduct })
        .then((response) => {
          const status = this.isNew ? '新增' : '更新'
          const page = this.isNew ? 1 : this.pagination.current_page
          this.$refs.ProductModel.hideModel()
          this.$httpMessageState(response, status)
          this.getProducts(page)
          this.isLoading = false
        })
        .catch((error) => {
          console.log(error)
        })
    },
    delProduct (id) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/admin/product/${id}`
      this.axios.delete(api)
        .then((response) => {
          this.$refs.DelModel.hideModel()
          this.$httpMessageState(response, '刪除')
          this.getProducts(this.pagination.current_page)
          this.isLoading = false
        })
        .catch((error) => {
          console.log(error)
        })
    },
    updatePages (val) {
      this.getProducts(val)
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
