import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'


import home from '@/components/home/home.vue'
import rule from '@/components/rule/rule.vue'
import Upload_video from '@/components/Upload_video/Upload_video.vue'


Vue.use(Router)

export default new Router({
  routes: [
      {path: '/home',meta:{title:'视频投票'},component:home},
      {path: '/rule',meta:{title:'规则'},component:rule},
      {path: '/Upload_video',meta:{title:'上传视频'},component:Upload_video},
      
      
      
      {path: '/*',meta:{title:'首页'},component:home},
  ]
})
