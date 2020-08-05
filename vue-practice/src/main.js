import Vue from 'vue'
import App from './App.vue'
import test from './components/test.vue'

import 'animate.css'
import 'fullpage-vue/src/fullpage.css'
import VueFullpage from 'fullpage-vue'
Vue.use(VueFullpage)
Vue.component('test', test)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


//npm run serve