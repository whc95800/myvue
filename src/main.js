import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(vueResource)
Vue.use(Vuex)

new Vue({
  el:'#app',
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus=this
  }
})
