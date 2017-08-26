import Vue from 'vue'
import App from './app'
import router from './router/router';
import store from './store/main';
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import VueProgressBar from 'vue-progressbar'; // get vue-progressbar
import InfiniteScroll from 'vue-infinite-scroll'; // get vue-infinite-scroll

Vue.use(VueAwesomeSwiper)
Vue.use(VueResource)
Vue.use(InfiniteScroll);

const progressOpt = {
  color: '#fff',
  failedColor: '#874b4b',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s'
  },
  autoRevert: true,
  location: 'top',
  inverse: false
};
Vue.use(VueProgressBar, progressOpt);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})