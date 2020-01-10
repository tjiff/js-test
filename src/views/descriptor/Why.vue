<template>
  <v-container grid-list-lg>
    <v-card>
      <app-card-title>装饰器可以：</app-card-title>
      <v-card-text>
        <p>提升开发体验：<v-btn>一个@解决问题</v-btn></p>
        <p>利于代码复用：<v-btn>一个@可以加在多个函数或类上</v-btn></p>
        <p>提升可读性：<v-btn class="ml-3">抽离非业务代码到装饰器中, 函数内只表达业务内容</v-btn></p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'Why',
    data() {
      return {}
    },
  }
</script>

<style scoped>

</style>
