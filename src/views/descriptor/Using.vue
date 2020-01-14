<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <v-flex>
        <v-card>
          <app-card-title>
            <template v-slot:items>
              <v-btn text @click="window = TAB.CODE" :color="setBtnColor(window === TAB.CODE)">在Vue中的变化</v-btn>
              <v-btn text @click="window = TAB.VPD" :color="setBtnColor(window === TAB.VPD)">第三方库中</v-btn>
              <v-btn text @click="window = TAB.DEMO" :color="setBtnColor(window === TAB.DEMO)">小栗子</v-btn>
              <v-btn text @click="window = TAB.DEMO_BIG" :color="setBtnColor(window === TAB.DEMO_BIG)">大栗子</v-btn>
            </template>
          </app-card-title>
          <v-window v-model="window">
            <v-window-item :value="TAB.CODE">
              <v-card-text>
                <v-card>
                  <v-card-text>
            <pre>
  const Decorator = function (val: string) {
    return function (target: <b><i>Test</i> => Vue组件(ClassVue)</b>, key: string, descriptor: Descriptor) {
      const origin = descriptor.value
      descriptor.value = function (this: <b><i>TestInstance</i> => Vue实例</b>, arg: any) {
        const result = origin.call(this, arg)
        return result
      }
    }
  }

  @Component
  export default class Test extends Vue {
    @Decorator('val')
    test() {}
  }</pre>
                  </v-card-text>
                </v-card>
              </v-card-text>
            </v-window-item>
            <v-window-item :value="TAB.VPD">
              <v-card-text>
                <v-card>
                  <v-card-text>
            <pre>

  // === Test.vue ===
  @Prop({required: true, default: 12345678})
  value!: number


  // === 引自 vue-property-decorator.js 8.2.2, 有修改 ===
  /**
   * decorator of a prop
   * @param  options the options for the prop
   * @return PropertyDecorator | void
   */
  export function Prop(options) {
      // ...
      return function (target, key) {
          // ...
          createDecorator(function (componentOptions, k) {
              if (!componentOptions.props) {
                componentOptions.props = {}
              }
              <b>componentOptions.props[k] = options;</b>
          })(target, key);
      };
  }
            </pre>
                  </v-card-text>
                </v-card>
              </v-card-text>
            </v-window-item>
            <v-window-item :value="TAB.DEMO">
              <v-card-text>
                <v-subheader>与 component.data</v-subheader>
                <v-card>
                  <v-card-text>
<pre>
  // === Test1.vue 一个加载状态 ===

  @Component
  class Test extends Vue {
    <b>loading = false</b>

    <b>@Loading</b>
    async getList() {
      <i>this.loading = true</i>
      // ...
      <i>this.loading = false</i>
    }
  }
  // template
  this.<b>loading</b> ? &lt;加载中/&gt; : &lt;list/&gt;

  // === Test2.vue 多个加载状态 ===

  @Component
  class Test extends Vue {
    loading = {
      <b><span class="blue--text">list</span></b>: false,
      <b><span class="green--text">submit</span></b>: false,
    }

    @Loading('<b><span class="blue--text">list</span></b>')
    async getList() {
      <i>this.loading.list = true</i>
      // ...
      <i>this.loading.list = false</i>
    }

    @Loading('<b><span class="green--text">submit</span></b>')
    async sendSubmit() {
      <i>this.loading.submit = true</i>
      // ...
      <i>this.loading.submit = false</i>
    }
  }
  // template
  this.loading.<b><span class="blue--text">list</span></b> ? &lt;加载中/&gt; : &lt;list/&gt;
  ...
  this.loading.<b><span class="green--text">submit</span></b> ? &lt;加载中/&gt; : &lt;submit-finish/&gt;</pre>
                  </v-card-text>
                </v-card>
                <v-card class="mt-2">
                  <v-card-text>
<pre>
  // === Loading.ts ===

  export const Loading = (val?: string) => {
    return function (target: any, key: string, descriptor: any) {
      const original = descriptor.value
      descriptor.value = async function (...args: any) {
        if (val) {
          <b>this.loading[val] = true</b>
          await original.apply(this, args)
          this.$nextTick(() => <b>this.loading[val] = false</b>)
        } else {
          <b>this.loading = true</b>
          await original.apply(this, args)
          this.$nextTick(() => <b>this.loading = false</b>)
        }
      }
    }
  }
</pre>
                  </v-card-text>
                </v-card>
              </v-card-text>
            </v-window-item>
            <v-window-item :value="TAB.DEMO_BIG">
              <v-card-text>
                <v-subheader>与生命周期</v-subheader>
                <v-card>
                  <v-card-text>
<pre>
  // === Test3.vue ===

  // === before ===
  @Component
  class Test extends Vue {
    unRegister = null

    created() {
      // 注册 Sign
      this.unRegister = SignRegister(<b>10086</b>, (signData) => this.handle(signData))
    }

    <b><span class="green--text">handle(signData) {
      // 处理 Sign...
    }</span></b>

    beforeDestroy() {
      // ...
      this.unRegister();
      // ...
    }

  // === after ===
  @Component
  class Test extends Vue {
      <b>@Sign(10086)
      <span class="green--text">handle(signData) {
        // 处理 Sign...
      }</span></b>
    }
  }
</pre>
                  </v-card-text>
                </v-card>
                <v-card class="mt-2">
                  <v-card-text>
                    <pre class="pointer" v-show="!isShowMergeEvent" @click="isShowMergeEvent = !isShowMergeEvent">  const mergeEvent = (old: null | (() => void) | Array&lt;() => void&gt;, newEvent: () => void) => {<span
                      class="grey lighten-2">...</span>}</pre>
                    <pre class="pointer" v-show="isShowMergeEvent" @click="isShowMergeEvent = !isShowMergeEvent">
  const mergeEvent = (old: null | (() => void) | Array&lt;() => void&gt;, newEvent: () => void) => {
    if (old) {
      if (typeof old === 'function') {
        return [old, newEvent];
      } else if (Array.isArray(old)) {
        return old.concat(newEvent);
      } else {
        return newEvent;
      }
    } else {
      return newEvent;
    }
  };</pre>
                    <pre>

  export const Sign = (signId: any) => {
    return function (target: any, methodName: string, descriptor: any) {
      let unRegister: (() => void) | undefined
      target.<b>created</b> = mergeEvent(target.created, function () {
        unRegister = SignRegister(signId, descriptor.value.bind(this))
      })
      target.<b>beforeDestroy</b> = mergeEvent(target.beforeDestroy, () => {
        unRegister && unRegister()
        unRegister = undefined
      })
    }
  }
                    </pre>
                  </v-card-text>
                </v-card>
              </v-card-text>
            </v-window-item>
          </v-window>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component({
    name: 'Using',
  })
  export default class Using extends Vue {

    isShowMergeEvent = false

    window = 'code'

    TAB = {
      CODE: 'code',
      DEMO: 'demo',
      DEMO_BIG: 'demoBig',
      VPD: 'VPD',
    }

    setBtnColor(flag: boolean) {
      return flag ? 'primary' : 'default'
    }

  }
</script>

<style scoped>
  i {
    text-decoration: line-through;
  }

  .pointer {
    cursor: pointer;
  }
</style>
