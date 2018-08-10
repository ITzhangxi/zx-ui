import Loading from './loading.vue'
import loading from './function'

export default (Vue) => {
  Vue.component(Loading.name, Loading)
  Vue.prototype.$zxLoading = loading
}
