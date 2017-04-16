import Vue from 'vue'
import App from './app'
// import router from './router'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  // store,
  render: h => h(App)
})