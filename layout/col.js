export default {
  name: 'ZxCol',
  props: {
    span: {
      type: [String, Number],
      default: 24
    },
    offset: {
      type: [String, Number],
      default: 0
    },
    push: {
      type: [String, Number],
      default: 0
    },
    pull: {
      type: [String, Number],
      default: 0
    },
    xs: [String, Number],
    sm: [String, Number],
    md: [String, Number],
    lg: [String, Number]
  },
  computed: {
    style () {
      const ret = {}
      const gutter = this.$parent.gutter
      if (gutter) {
        ret.paddingLeft = `${gutter / 2}px`
        ret.paddingRight = `${gutter / 2}px`
      }
      return ret
    }
  },
  render (h) {
    let classList = []
    // if (this.span) {
    //   classList.push(
    //     `zx-col-span-${this.span}`
    //   )
    // }
    // if (this.offset) {
    //   classList.push(
    //     `zx-col-offset-${this.offset}`
    //   )
    // }
    // if (this.push) {
    //   classList.push(
    //     `zx-col-push-${this.push}`
    //   )
    // }
    // if (this.pull) {
    //   classList.push(
    //     `zx-col-pull-${this.pull}`
    //   )
    // }
    const prop = ['span', 'offset', 'push', 'pull']
    prop.forEach(prop => {
      if (this[prop]) {
        classList.push(`zx-col-${prop}-${this[prop]}`)
      }
    })

    const sizes = ['xs', 'sm', 'md', 'lg', 'xl']
    sizes.forEach(size => {
      if (this[size]) {
        classList.push(`zx-col-${size}-${this[size]}`)
      }
    })
    return (
      <div
        class={['zx-col', classList]}
        style={this.style}>
        {this.$slots.default}
      </div>
    )
  }
}
