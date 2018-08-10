import Toast from './Toast.vue'
import toast from './function'

export default (Vue) => {
  Vue.component(Toast.name, Toast)
  Vue.prototype.$zxToast = toast
}
