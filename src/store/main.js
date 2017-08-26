import Vue from 'vue'; // get vue
import Vuex from 'vuex'; // get vuex
import VueResource from 'vue-resource';// get $http

Vue.use(Vuex);
Vue.use(VueResource);

const state = {
  newsData: [], //动态圈数据
  bannerData:[], //首页banner数据
  personalInfo:{}, //个人信息
  isloadingComplete: false,
  busy: false,
  isShow: false,
};

const getters = {};

const mutations = {
  updateLoadingState(state, data) {
    state.isloadingComplete = data;
  },
  updateBusyState(state, data) {
    state.busy = data;
  },
  addData(state, data) {
    state.newsData = state.newsData.concat(data);
  },
  refreshData(state, data) {
    state.newsData = data;
  },
  isShowAlert(state, data) {
    state.isShow = data;
  },
  fetchBanner(state,data){
    state.bannerData = data;
  },
  fetchPersonalInfo(state, data){
    state.personalInfo = data;
  }
};

const actions = {
  getNewsData(context, object) {
    const {progress, isRefresh} = object;
    progress.$Progress.start();
    context.commit('updateLoadingState', false);
    context.commit('updateBusyState', true);
    Vue.http.get('../../static/mock/news.json').then((response) => {
      const json = response.data.content.data;
      context.commit('updateLoadingState', true);
      context.commit('updateBusyState', false);
      if (isRefresh === true) {
        context.commit('refreshData', json);
      } else {
        context.commit('addData', json);
      }
      progress.$Progress.finish();
    }, () => {
      context.commit('updateBusyState', false);
      progress.$Progress.fail();
    });
  },

  getBannerData(context, object){
    const {progress} = object;
    progress.$Progress.start();
    context.commit('updateLoadingState', false);
    context.commit('updateBusyState', true);
    Vue.http.get('../../static/mock/banner.json').then((response) => {
      const json = response.data.content.data;
      context.commit('updateLoadingState', true);
      context.commit('updateBusyState', false);
      context.commit('fetchBanner', json);
      progress.$Progress.finish();
    }, () => {
      context.commit('updateBusyState', false);
      progress.$Progress.fail();
    });
  },

  getPersonalInfo(context, object){
    const {progress} = object;
    progress.$Progress.start();
    context.commit('updateLoadingState', false);
    context.commit('updateBusyState', true);
    Vue.http.get('../../static/mock/personal.json').then((response) => {
      const json = response.data.content.data;
      context.commit('updateLoadingState', true);
      context.commit('updateBusyState', false);
      context.commit('fetchPersonalInfo', json);
      progress.$Progress.finish();
    }, () => {
      context.commit('updateBusyState', false);
      progress.$Progress.fail();
    });
  }

};

const store = new Vuex.Store({
 state,
 getters,
 mutations,
 actions,
});

export default store;
