<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <v-flex>
        <v-card>
          <app-card-title>
            <template v-slot:items>
              <v-btn text @click="window = TAB.CODE" :color="setBtnColor(window === TAB.CODE)">修改后的一段代码</v-btn>
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
            <v-window-item :value="TAB.DEMO">
              <v-card-text>
                <v-card>
                  <v-card-text>
<pre>
  export const Loading = (val?: string) => {
    return function (target: any, key: string, descriptor: any) {
      const original = descriptor.value
      descriptor.value = async function (...args: any) {
        if (val) {
          this.loading[val] = true
          await original.apply(this, args)
          this.$nextTick(() => this.loading[val] = false)
        } else {
          this.loading = true
          await original.apply(this, args)
          this.$nextTick(() => this.loading = false)
        }
      }
    }
  }
</pre>
                  </v-card-text>
                </v-card>
                <v-card class="mt-2">
                  <v-card-text>
<pre>
  // === Test1.vue ===
  @Component
  class Test extends Vue {
    loading = false

    @Loading
    async getList() {
      <i>this.loading = true</i>
      // ...
      <i>this.loading = false</i>
    }
  }
  // template
  this.loading ? 加载中... : list
</pre>
                  </v-card-text>
                </v-card>
                <v-card class="mt-2">
                  <v-card-text>
<pre>
  // === Test2.vue ===
  @Component
  class Test extends Vue {
    loading = {
      list: false,
    }

    @Loading('list')
    async getList() {
      <i>this.loading.list = true</i>
      // ...
      <i>this.loading.list = false</i>
    }
  }
  // template
  this.loading.list ? 加载中... : list</pre>
                  </v-card-text>
                </v-card>
              </v-card-text>
            </v-window-item>
            <v-window-item :value="TAB.DEMO_BIG">
              <v-card-text>
                <v-card>
                  <v-card-text>
                    <pre class="pointer" v-show="!isShowMergeEvent" @click="isShowMergeEvent = !isShowMergeEvent">  const mergeEvent = (old: null | (() => void) | Array&lt;() => void&gt;, newEvent: () => void) => {...}</pre>
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

  export const Sign = (signId?: any) => {
    return function (target: any, methodName: string, descriptor: any) {
      let unRegister: (() => void) | undefined
      target.created = mergeEvent(target.created, function () {
        unRegister = SignRegister(signId, descriptor.value.bind(this))
      })
      target.beforeDestroy = mergeEvent(target.beforeDestroy, () => {
        unRegister && unRegister()
        unRegister = undefined
      })
    }
  }
                    </pre>
                  </v-card-text>
                </v-card>
                <v-card class="mt-2">
                  <v-card-text>
<pre>
  // === Test3.vue ===
  // === before ===
  unRegister = null

  created() {
    // 注册 Sign
    this.unRegister = SignRegister(10086, (signData) => this.handle(signData))
  }

  handle(signData) {
    // 处理 Sign...
  }

  beforeDestroy() {
    // ...
    this.unRegister();
    // ...
  }

  // === after ===
  @Sign(10086)
  handle(signData) {
    // 处理 Sign...
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
