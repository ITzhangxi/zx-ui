import Vue from 'vue'
import Component from './func-toast'

const ToastConponent = Vue.extend(Component)

const Toast = (options) => {
  const instance = new ToastConponent({
    propsData: options
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
}
export default Toast
