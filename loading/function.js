import Vue from 'vue'
import Component from './loading.vue'

const LaodingComponent = Vue.extend(Component)
let intance

function newComponent (options) {
  intance = new LaodingComponent({
    propsData: options
  })
  intance.vm = intance.$mount()
  document.body.appendChild(intance.vm.$el)
}

export default {
  show (options) {
    newComponent(options)
    intance.show()
  },
  hidden () {
    intance.hidden()
  }
}
