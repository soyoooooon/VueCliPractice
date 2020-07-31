import Vue from 'vue'
import App from './App.vue'
import 'animate.css'
import 'fullpage-vue/src/fullpage.css'
import VueFullpage from 'fullpage-vue'
Vue.use(VueFullpage)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


//npm run serve