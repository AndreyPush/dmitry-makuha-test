import Vue from 'vue'
import App from './App.vue'
import {router} from "@/router/router"
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import axios from 'axios'
import moment from 'moment'

Vue.component('date-picker', DatePicker)

Vue.config.productionTip = false

Vue.prototype.axios = axios;
Vue.prototype.moment = moment;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
