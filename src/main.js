import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import axios from 'axios'
import VTooltip from 'v-tooltip'
import VueScrollTo from 'vue-scrollto'
import VueProgressBar from 'vue-progressbar'
import VueScrollReveal from 'vue-scroll-reveal'
import * as VueGoogleMaps from 'vue2-google-maps'
import {globalVar} from '@/globalVar'

import '@/style/style.scss'

Vue.prototype.$http = axios

Vue.use(VTooltip)
Vue.use(VueScrollTo)
Vue.use(VueScrollReveal)
Vue.use(VueProgressBar, {
  color: '#ffbe19',
  failedColor: 'red',
  height: '2px'
})

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.GOOGLE_API,
    libraries: 'places',
  },
})

Kakao.init(process.env.KAKAO_KEY)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
