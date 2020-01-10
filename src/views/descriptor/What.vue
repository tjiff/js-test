<template>
  <v-container grid-list-lg>
    <h3>
      几段代码
    </h3>
    <v-layout>
      <v-flex v-for="{title, content} in list" :key="title">
        <v-card height="100%">
          <app-card-title>{{ title }}</app-card-title>
          <v-card-text>
            <pre v-html="content"/>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <h3>一句话</h3>
    <v-layout>
      <v-flex>
        <p>
          装饰器可以在不改变原有代码的前提下, 让一个函数或者类拥有原本没有的功能
        </p>
      </v-flex>
    </v-layout>
    <h3>一张图</h3>
    <v-layout>
      <v-flex shrink>
        <v-card>
          <img src="../../assets/what.png" alt="装饰器图">
        </v-card>
      </v-flex>
      <v-flex>
        <p>蓝色：函数</p>
        <p>黑色：装饰器</p>
        <p>可以改变原函数执行前和/或执行后</p>
      </v-flex>
    </v-layout>
    <h3>一个生活DEMO</h3>
    <v-layout>
      <v-flex>
        <v-card>
          <app-card-title>
            每个人都上班，但方式不一样
          </app-card-title>
          <v-card-text>
            <v-layout>
              <v-flex xs6>
                <p>出行方式</p>
                <v-checkbox label="走着" hide-details v-model="isWalk"/>
                <v-checkbox label="公交" hide-details v-model="isBus"/>
                <v-checkbox label="骑车" hide-details v-model="isBike"/>
                <v-checkbox label="汽车" hide-details v-model="isCar"/>
                <v-checkbox label="摩托" hide-details v-model="isMotor"/>
                <v-checkbox label="其他" hide-details v-model="isOther"/>
              </v-flex>
              <v-divider vertical/>
              <v-flex xs6>
                <p>修饰出行方式</p>
                <pre v-if="isWalk">  <span>@走着()</span></pre>
                <pre v-if="isBus">  <span>@公交()</span></pre>
                <pre v-if="isBike">  <span>@骑车()</span></pre>
                <pre v-if="isCar">  <span>@汽车()</span></pre>
                <pre v-if="isMotor">  <span>@摩托()</span></pre>
                <pre v-if="isOther">  <span>@其他('自己填')</span></pre>
                <pre>  上班() {}</pre>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component
  export default class What extends Vue {

    isWalk = false
    isBus = false
    isBike = false
    isCar = false
    isMotor = true
    isOther = false

    list = [
      {
        title: '一个装饰器',
        content: `
  @Watch('isLock')
  public onLock() {
    // ...
  }`,
      },
      {
        title: '多个装饰器',
        content: `
  @Component
  export class RequestDataMixin extends Vue {

    @Getter(lessonId) public lessonId!: number;

    @Getter(courseId) public courseId!: number;

    @Getter(uid) public uid!: number;

    @Getter(initData) public initData!: any;

    // ...

  }`,
      },
      {
        title: '多个装饰器修饰一个函数',
        content: `
  @Watch('isFull')
  @Watch('isForbidden1')
  @Watch('isForbidden2')
  onForbidden(val: boolean) {
    // ...
  }`,
      },
    ]
  }
</script>

<style scoped>

</style>
