import Vue from 'vue'

export default Vue.extend({
  name: 'AppCardTitle',
  functional: true,
  render(h, {children, props, scopedSlots, slots}) {
    return h('v-toolbar', {props: {elevation: 0, color: 'grey lighten-3', dense: true}}, [
      h('v-toolbar-title', scopedSlots.default && scopedSlots.default(props)),
      scopedSlots.items && h('v-toolbar-items', [h('v-spacer'), scopedSlots.items(props)]),
    ])
  },
})
