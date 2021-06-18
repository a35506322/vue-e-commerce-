<template>
  <div
    class="modal fade"
    tabindex="-1"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title">
            <span>檢視訂單</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <table class="table">
                <thead>
                  <tr>
                    <th colspan="4" class="fs-2 text-left">用戶資料</th>
                  </tr>
                </thead>
                <tbody v-if="tempData.user">
                  <tr>
                    <th scope="row">姓名</th>
                    <td colspan="3">{{ tempData.user.name }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email</th>
                    <td colspan="3">{{ tempData.user.email }}</td>
                  </tr>
                  <tr>
                    <th scope="row">電話</th>
                    <td colspan="3">{{ tempData.user.tel }}</td>
                  </tr>
                  <tr>
                    <th scope="row">地址</th>
                    <td colspan="3">{{ tempData.user.address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-sm-8">
              <div class="mb-6">
                <table class="table">
                  <thead>
                    <tr>
                      <th colspan="8" class="fs-2 text-left">訂單細節</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">訂單編號</th>
                      <td colspan="7">{{ tempData.id }}</td>
                    </tr>
                    <tr>
                      <th scope="row">下單時間</th>
                      <td colspan="7">
                        {{ $filters.ToLocalDate(tempData.create_at) }}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">付款時間</th>
                      <td colspan="3" v-if="tempData.paid_date">
                        {{
                          $filters.ToLocalDate(tempData.paid_date)
                        }}
                      </td>
                      <td colspan="3" v-else>
                        時間不正確
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">付款狀態</th>
                      <td colspan="3">
                        {{ tempData.is_paid ? '已付款' : '未付款' }}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">總金額</th>
                      <td colspan="3">
                        {{
                          tempData.total
                            ? $filters.currency(tempData.total)
                            : ''
                        }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="mb-6">
                <table class="table">
                  <thead>
                    <tr>
                      <th colspan="8" class="fs-2 text-left">選購商品</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(product, index) in tempData.products"
                      v-bind:key="'key' + index"
                    >
                      <th scope="row">{{ product.id }}</th>
                      <td colspan="4">{{ product.product_id }}</td>
                      <td colspan="4">{{ product.qty }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary" v-on:click="hideModal()">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalMixins from '../mixins/ModalMixins.js'

export default {
  mixins: [ModalMixins]
}
</script>
