<template>
  <Loading :active="isLoading"></Loading>
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
                <th style="width: 150px">數量</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody v-if="carts.length>0">
              <tr v-for="(item,index) in carts" v-bind:key="'key'+index">
                <td>
                  <button type="button" class="btn btn-outline-danger btn-sm" v-on:click="deleteCar(item.id)">
                    <i class="bi bi-trash"></i>
                  </button>
                </td>
                <td>
                  {{item.product.title}}
                  <div class="text-success" v-if="status.isCoupon">
                    已套用優惠券
                  </div>
                </td>
                <td>
                  <div class="input-group input-group-sm">
                    <input type="number" min="1" class="form-control"
                          :disabled="status.isUpdateLoading"
                          v-model="item.qty" v-on:change="updatedCart(item)">
                    <div class="input-group-text">/ 單位</div>
                  </div>
                </td>
                <td class="text-end">
                  {{item.product.price}}
                  <small class="text-success" v-if="status.isCoupon">折扣價：{{item.final_total}}</small>
                </td>
              </tr>
            </tbody>
            <tfoot>
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{total}}</td>
            </tr>
            <tr v-if="status.isCoupon">
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{final_total}}</td>
            </tr>
            </tfoot>
          </table>
          <div class="input-group mb-3 input-group-sm">
            <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" :disabled="status.isUpdateLoading" v-on:click="addCoupon">
                套用優惠碼
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <pagination v-bind:pages="pagination" v-on:emit-page="updatePages"></pagination>
  <div class="my-5 row justify-content-center">
    <div class="col-md-4">
      <Form v-on:submit="onSubmit" v-slot="{ errors, meta, isSubmitting}">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <Field type="email" name="email" rules="required|email" class="form-control" v-bind:class="{'is-invalid':errors['email']}"
            id="email" placeholder="請輸入Emal" v-model="form.user.email"></Field>
            <error-message name="user.email" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="recipient" class="form-label">收件人姓名</label>
            <Field class="form-control" name="recipient" id="recipient" rules="required" v-bind:class="{'is-invalid':errors['recipient']}"
            placeholder="請輸入姓名" v-model="form.user.recipient"></Field>
            <error-message name="recipient" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">收件人電話</label>
            <Field class="form-control" name="phone" id="phone" rules="required" v-bind:class="{'is-invalid':errors['phone']}"
            placeholder="請輸入電話" v-model="form.user.phone"></Field>
            <error-message name="phone" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <Field class="form-control" id="address" name="address" rules="required" v-bind:class="{'is-invalid':errors['address']}"
            placeholder="請輸入地址" v-model="form.user.address"></Field>
            <error-message name="address" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="leave_message" class="form-label">留言</label>
            <Field class="form-control" name="leave_message" id="leave_message" rows="3" v-model="form.leave_message" as="textarea"></Field>
          </div>
          <div class="text-end">
            <!--meta 驗證狀況 => valid 為全部驗證過 -->
            <button type="submit" class="btn btn-danger" :disabled="!meta.valid">
              <div class="text-light spinner-border  spinner-border-sm" role="status" v-if="isSubmitting">
                <span class="visually-hidden">Loading...</span>
              </div>
              送出訂單
            </button>
          </div>
      </Form>
    </div>
  </div>
</template>

<script>
import Pagination from '../components/Pagination.vue'

export default {
  data () {
    return {
      // 商品列表
      products: [],
      // 分頁資訊
      pagination: {},
      // 判定開關狀態
      status: {
        isLoadingItem: '',
        isUpdateLoading: false,
        isCoupon: false
      },
      // 購物車列表
      carts: [],
      // 商品總金額
      total: 0,
      // 商品總金額扣除優惠卷
      final_total: 0,
      // 整頁Loading
      isLoading: false,
      // 優惠倦代碼
      coupon_code: '',
      // 使用者填寫資料
      form: {
        user: {
          recipient: '',
          email: '',
          phone: '',
          address: ''
        },
        leave_message: ''
      },
      schema: {
        form: {
          user: {
            recipient: '',
            email: '',
            phone: '',
            address: ''
          },
          leave_message: ''
        }
      }
      // 驗證內容
      // schema: {
      //   form.user.email: 'required|email',
      //   form.user.recipient: 'required',
      //   form.user.phone: 'required',
      //   form.user.address: 'required'
      // }
    }
  },
  components: {
    Pagination
  },
  methods: {
    // 得到全部商品
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/products?page=${page}`
      this.isLoading = true
      this.axios.get(api)
        .then((response) => {
          console.log(response)
          if (response.data.success) {
            this.products = response.data.products
            this.pagination = response.data.pagination
            this.isLoading = false
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // 更新頁面
    updatePages (val) {
      this.getProducts(val)
    },
    // 導頁至個別商品
    getProdcut (id) {
      this.$router.push(`/user/product/${id}`)
    },
    // 得到購物車列表
    getCarts () {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/cart`
      this.isLoading = true
      this.axios.get(api)
        .then((response) => {
          console.log(response)
          if (response.data.success) {
            this.carts = response.data.data.carts
            this.total = response.data.data.total
            this.final_total = response.data.data.final_total
            this.isLoading = false
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // 新增購物車
    addCart (id) {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/cart`
      this.status.isLoadingItem = id
      this.isLoading = true
      this.axios.post(api, { data: { product_id: id, qty: 1 } })
        .then((response) => {
          if (response.data.success) {
            this.status.isLoadingItem = ''
            this.getCarts()
            this.isLoading = false
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // 刪除購物車
    deleteCar (id) {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/cart/${id}`
      this.isLoading = true
      this.axios.delete(api)
        .then((response) => {
          if (response.data.success) {
            this.getCarts()
            this.isLoading = false
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // 更新購物車
    updatedCart (item) {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/cart/${item.id}`
      const tempCart = {
        product_id: item.product_id,
        qty: Number(item.qty)
      }
      this.isLoading = true
      this.status.isUpdateLoading = true
      this.axios.put(api, { data: tempCart })
        .then((respone) => {
          if (respone.data.success) {
            this.getCarts()
            this.isLoading = false
            this.status.isUpdateLoading = false
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    addCoupon () {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_API}/coupon`
      this.isLoading = true
      this.status.isUpdateLoading = true
      this.axios.post(api, { data: { code: this.coupon_code } })
        .then((respone) => {
          if (respone.data.success) {
            this.getCarts()
            this.isLoading = false
            this.status.isCoupon = true
            this.status.isUpdateLoading = false
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    onSubmit (values, { restForm }) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(JSON.stringify(this.values))
        }, 2000)
        // 重製表單
        restForm()
      })
    }
  },
  created () {
    this.getProducts()
    this.getCarts()
  }
}
</script>
