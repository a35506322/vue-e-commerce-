import Modal from '../../node_modules/bootstrap/js/dist/modal.js'

export default {
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      model: {},
      tempProduct: {}
    }
  },
  methods: {
    showModel () {
      this.model.show()
    },
    hideModel () {
      this.model.hide()
    }
  },
  mounted () {
    this.model = new Modal(this.$refs.model)
  },
  watch: {
    product (n, o) {
      this.tempProduct = this.product
    }
  }
}
