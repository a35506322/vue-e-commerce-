<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/user/cart">購物車</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
      </ol>
    </nav>
    <div class="row justify-content-center">
      <article class="col-8">
        <h2>{{ product.title }}</h2>
        <div>{{ product.content }}</div>
        <div>{{ product.description }}</div>
        <img :src="product.imageUrl" alt="" class="img-fluid mb-3">
      </article>
      <div class="col-4">
        <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
        <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
        <div class="h5" v-if="product.price">現在只要 {{ product.price }} 元</div>
        <hr>
        <button type="button" class="btn btn-outline-danger">
          加到購物車
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  props: ['id'],
  data () {
    return {
      product: {},
      isLoading: false
    }
  },
  methods: {
    getProduct (id) {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/product/${id}`
      this.isLoading = true
      this.axios.get(api)
        .then((response) => {
          console.log(response)
          if (response.data.success) {
            this.product = response.data.product
            this.isLoading = false
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created () {
    this.getProduct(this.id)
  }
}
</script>
