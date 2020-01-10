<template>
  <v-app>
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-toolbar-title>{{ $route.meta.title }}</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      app
      clipped
    >
      <!--      <v-list>
              <v-list-group v-for="{title, data} in navList" :key="title">
                <template v-slot:activator>
                  <v-list-item-content>{{ title }}</v-list-item-content>
                </template>
                <v-list-item v-for="j in data" :key="title + j.title" :to="j.to">
                  <v-list-item-content>{{ j.title }}</v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>-->
      <v-list>
        <v-list-item v-for="{title, to} in navList[0].data" :key="title" :to="to">
          <v-list-item-content>{{ title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {navList} from './navs'

  @Component
  export default class App extends Vue {
    navList = navList

  }
</script>
<style>
</style>
