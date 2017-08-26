import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/index.vue';
import News from '../views/news.vue';
import Car from '../views/car.vue';
import Personal from '../views/personal.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', redirect: '/home'},
  { path: '/home', component: Home },
  { path: '/news', component: News },
  { path: '/car', component: Car },
  { path: '/personal', component: Personal },
];

const router = new VueRouter({routes});

export default router;
