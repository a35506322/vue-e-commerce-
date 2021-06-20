import Modal from '../../node_modules/bootstrap/js/dist/modal'

export default {
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      modal: {},
      tempData: {}
    }
  },
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  },
  watch: {
    data (n, o) {
      // 記住單向資料流,很容易踩到物件的傳參考特性的雷
      this.tempData = { ...this.data }
    }
  }
}
