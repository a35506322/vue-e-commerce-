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
            <td style="width: 200px;" class="">
              <img v-bind:src="item.imageUrl" with="150px" heigh="100px">
            </td>
            <td>標題</td>
            <td class="text-right">
              200
            </td>
            <td>
              <div class="btn-group">
                <button class="btn btn-outline-primary btn-sm">查看更多</button>
                <button class="btn btn-outline-danger btn-sm">加到購物車</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

</template>

<script>
export default {
  data () {
    return {
      products: [],
      pagination: {}
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
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
