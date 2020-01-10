<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <v-flex grow>
        <v-card>
          <app-card-title>
            <template v-slot:items>
              <v-btn text :color="setBtnColor(window === 1)" @click="window = 1">功能实现</v-btn>
              <v-btn text :color="setBtnColor(window === 2)" @click="window = 2">一段代码和几个问题</v-btn>
            </template>
          </app-card-title>
          <v-window v-model="window">
            <v-window-item :value="1">
              <v-card-text>
                <v-layout>
                  <v-flex shrink>
                    <v-btn @click="isShowRequire = true" :color="setBtnColor(isShowRequire)">需求</v-btn>
                  </v-flex>
                  <v-flex shrink>
                    <v-btn @click="isImplemented = true" :color="setBtnColor(isImplemented)">实现</v-btn>
                  </v-flex>
                </v-layout>
                <v-card class="mt-2">
                  <v-card-text>
            <pre>
  class Test1 {
    test() {
      return 'test' <span v-if="isShowRequire" class="blue--text">// 不改变这个函数</span>
    }
  }

  let r = ''
  <span :style="`text-decoration: ${isImplemented ? 'line-through' : 'none'}`">const t1 = new Test1()
  r = t1.test()
  console.log(r)</span><span class="green--text"> // => 'test' <span v-if="isShowRequire"
                                                                     class="blue--text">输出结果变成 'test1'</span></span></pre>
                    <pre v-if="isImplemented">

  const decorator = function (testFn: () => string) {
    return () => testFn() + 1
  }

  Test1.prototype.test = decorator(Test1.prototype.test)
  const t2 = new Test1()
  r = t2.test()
  console.log(r)</pre>
                  </v-card-text>
                </v-card>
              </v-card-text>
            </v-window-item>
            <v-window-item :value="2">
              <v-card-text>
                <v-layout>
                  <v-flex xs9>
                    <v-window v-model="windowInner">
                      <v-window-item :value="INNER.CODE">
                        <v-card>
                          <v-card-text>
                    <pre>
  const Decorator = function (val: string) {
    return function (target: <u id="test-class">Test</u>, key: string, descriptor: <u id="descriptor">Descriptor</u>) {
      const origin = descriptor.value
      descriptor.value = function (this: <u id="test-instance">TestInstance</u>, arg: any) {
        const result = origin.call(this, arg)
        return result + ' & ' + val
      }
    }
  }

  class Test {
    propVal = 'propVal'

    @Decorator('val')
    test(arg: any) {
      return `test: return ${this.propVal} & ${arg}`
    }
  }

  const t = new Test()
  console.log(t.test('any')) <span class="green--text">// => test: return propVal & any & val</span></pre>
                            <v-menu activator="#descriptor" top open-on-click>
                              <v-card>
                                <v-card-text>
                  <pre>
  interface Descriptor {
    /** 被装饰器修饰对象的值 */
    value: (arg: any) => any
    /**
     描述对象的enumerable属性，称为”可枚举性“，如果该属性为false，就表示某些操作会忽略当前属性
     目前，有四个操作会忽略enumerable为false的属性。
     for...in循环：只遍历对象自身的和继承的可枚举的属性。
     Object.keys()：返回对象自身的所有可枚举的属性的键名。
     JSON.stringify()：只串行化对象自身的可枚举的属性。
     Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。
     */
    enumerable: boolean
    /** 对象属性是否可修改,false为不可修改，默认值为true */
    writable: boolean
    /** 能否使用delete、能否需改属性特性、或能否修改访问器属性，false 为不可重新定义，默认值为 true */
    configurable: boolean
  }</pre>
                                </v-card-text>
                              </v-card>
                            </v-menu>
                            <v-menu activator="#test-instance" top open-on-click>
                              <v-card>
                                <v-card-text>
                  <pre>
  /** 方便理解定义了固定类型的接口，实际为动态 */
  interface TestInstance {
    propVal: string
    test: (arg: any) => string
  }
</pre>
                                </v-card-text>
                              </v-card>
                            </v-menu>
                            <v-menu activator="#test-class" top open-on-click>
                              <v-card>
                                <v-card-text>
                                  <pre>方便理解定义了固定类型的接口，实际为动态</pre>
                                </v-card-text>
                              </v-card>
                            </v-menu>
                          </v-card-text>
                        </v-card>
                      </v-window-item>
                      <v-window-item :value="INNER.EXECUTE">
                        <v-card>
                          <v-card-text>
                            <pre>
  const Decorator = function (val: string) {
    return function () {
      // 类似 Test1.prototype.test = decorator(Test1.prototype.test)
      descriptor.value = function () {
        // ...
      }
    }
  }

  class Test {
    @Decorator('val') <span class="blue--text">// => Decorator('val')()</span>
    test() {
      // ...
    }
  }

  const t = new Test()
  console.log(t.test())</pre>
                          </v-card-text>
                        </v-card>
                      </v-window-item>
                      <v-window-item :value="INNER.THIS">
                        <v-card>
                          <v-card-text>
                            <pre>
  const Decorator = function (val: string) {
    return <b>function</b> (target: Test, key: string, descriptor: Descriptor) {
      const origin = descriptor.value
      descriptor.value = <b>function</b> (this: TestInstance, arg: any) {
        const result = <b>origin.call(this, arg)</b>
        // ...
      }
    }
  }
  class Test {
    propVal = 'propVal'

    // ...
  }
                            </pre>
                          </v-card-text>
                        </v-card>
                      </v-window-item>
                      <v-window-item :value="INNER.RETURN">
                        <v-card>
                          <v-card-text>
                            <pre>
  const Decorator = function (val: string) {
    return function (target: Test, key: string, descriptor: Descriptor) {
      const origin = descriptor.value
      descriptor.value = function (this: TestInstance, arg: any) {
        const result = origin.call(this, arg)
        <b>return</b> result + ' & ' + val
      }
    }
  }

  class Test {
    propVal = 'propVal'

    @Decorator('val')
    test(arg: any) {
      return `test: return ${this.propVal} & ${arg}`
    }
  }

  const t = new Test()
  console.log(<b>t.test('any')</b>) <b>// => test: return propVal & any & val</b>
                            </pre>
                          </v-card-text>
                        </v-card>
                      </v-window-item>
                    </v-window>
                  </v-flex>
                  <v-flex xs3>
                    <v-list>
                      <v-list-item
                        :input-value="windowInner === INNER.CODE"
                        @click="windowInner = INNER.CODE"
                      >
                        代码
                      </v-list-item>
                      <v-list-item
                        :input-value="windowInner === INNER.EXECUTE"
                        @click="windowInner = INNER.EXECUTE"
                      >
                        执行过程? (仅一个时)
                      </v-list-item>
                      <v-list-item
                        :input-value="windowInner === INNER.THIS"
                        @click="windowInner = INNER.THIS"
                      >
                        this?
                      </v-list-item>
                      <v-list-item
                        :input-value="windowInner === INNER.RETURN"
                        @click="windowInner = INNER.RETURN"
                      >
                        return?
                      </v-list-item>
                    </v-list>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-window-item>
          </v-window>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'How',
    data: () => ({
      window: 2,
      isShowRequire: false,
      isImplemented: false,
      windowInner: 'code',
      INNER: {
        CODE: 'code',
        EXECUTE: 'execute',
        THIS: 'this',
        RETURN: 'return',
      },
    }),
    methods: {
      setBtnColor(flag) {
        return flag ? 'primary' : 'default'
      },
    },
  }
</script>

<style scoped>
  u {
    cursor: pointer;
    font-weight: 900;
    color: #000;
  }

  b {
    color: #000;
    font-weight: 900;
  }
</style>
