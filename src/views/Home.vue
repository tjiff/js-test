<template>
  <v-container fluid full-height>
    <div class="c">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </v-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component
  export default class Home extends Vue {
  }
</script>

<style>
  .c {
    width: auto;
    display: inline-block;
  }

  .box {
    width: 20px;
    height: 20px;
    margin-left: 10px;
    background-color: #aaa;
    display: inline-block;
  }

  .box:last-child {
    margin-right: 10px;
  }
</style>
