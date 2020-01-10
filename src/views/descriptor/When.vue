<template>
  <v-container fluid>
    <v-layout>
      <v-flex grow>
        <v-card>
          <app-card-title>一张流程图</app-card-title>
          <v-card-text>
            <div ref="mermaid" v-html="m"></div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import mermaid from 'mermaid'

  const text = `graph TB
    A[冗余代码+++ 非业务代码+++] --> B{封装}
    B -->|可函数| C[函数]
    B -->|不可函数| D[装饰器]
    C -->|不够简单| D
    D --> E[完成]
    C --> E
    `

  export default {
    name: 'When',
    data() {
      return {
        m: '',
      }
    },
    mounted() {
      this.renderMermaid()
    },
    methods: {
      renderMermaid() {
        this.m = mermaid.render('when', text)
      },
    },
  }
</script>

<style scoped>

</style>
