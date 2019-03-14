// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'
import store from './vuex/store'
Vue.use(Vuex)

import axios from 'axios'
Vue.prototype.axios = axios;
axios.defaults.baseURL='/wechat/api'; 

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI);

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next()
})

//import VueTouch from 'vue-touch'
//Vue.use(VueTouch, {name: 'v-touch'})





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
