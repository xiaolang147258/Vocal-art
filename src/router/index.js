import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home.vue'

Vue.use(Router)

export default new Router({
	
  routes: [
      {path: '/home',meta:{title:'首页'},component:home},
      
      
      {path: '/*',meta:{title:'首页'},component:home},
  ]
})
