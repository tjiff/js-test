import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify'
import './assets/main.css'
import AppCardTitle from '@/components/app-card-title'

Vue.config.productionTip = false

Vue.component('AppCardTitle', AppCardTitle)

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
