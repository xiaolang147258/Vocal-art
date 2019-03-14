import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'


import home from '@/components/home/home.vue'
import rule from '@/components/rule/rule.vue'
import Upload_video from '@/components/Upload_video/Upload_video.vue'
import Video_details from '@/components/home/Video_details.vue'

Vue.use(Router)

export default new Router({
	
  routes: [
      {path:'/home',meta:{title:'视频投票'},component:home},
      {path: '/Video_details',meta:{title:'查看视频'},component:Video_details},
      {path: '/rule',meta:{title:'规则'},component:rule},
      {path: '/Upload_video',meta:{title:'视频'},component:Upload_video},
      
      
      {path: '/*',meta:{title:'首页'},component:home},
  ]
})
