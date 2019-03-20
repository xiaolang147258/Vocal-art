<template>
  <div id="app" style="padding-top: 100px;">
  	
  <div class="top">
  	<div style="width: 1331px;height:100%;margin: 0 auto;color: #606060;">
  		<img class="logo" src="../static/img/logo.jpg" alt="" />
      <div class="inp_box">
      	<input type="text"  id="inp" placeholder="搜索" />
      	<img src="../static/img/sou.jpg" alt="" />
      </div>
      <div class="tab" :class="{tabs:indexa==index}" v-for="(i,index) in tab_act" @click="tab_click(i,index)">{{i}}</div>  
  	</div>
  </div>
   
  
     <router-view class="transitionBody"></router-view>
 
   
   <div class="tab_bom">
   	  <div style="width: 1248px;height:100%;margin: 0 auto;">
   	  	  <div class="text_box">
   	  	  	  <p class="tabsa">联系我们</p>
   	  	  	  <p class="pas">公司：12154785214</p><p class="pas">地址 ：12131232113</p><p class="pas">电话：1213232123132132</p><p class="pas">邮箱：2123213132123132</p>
   	  	  </div>
   	  	  <div class="text_box_to">
   	  	  	  <p class="tabsa">品牌故事</p>
   	  	  	  <p class="pas">U宝介绍</p><p class="pas">U宝名人堂</p><p class="pas">U团队</p><p class="pas">资质荣誉</p>
   	  	  </div>
   	  	  <div class="text_box_to">
   	  	  	  <p class="tabsa">发声课程</p>
   	  	  	  <p class="pas">课程体系</p><p class="pas">特色介绍</p><p class="pas">大家说</p>
   	  	  </div>
   	  	  <div class="text_box_to">
   	  	  	  <p class="tabsa">发声合作</p>
   	  	  	  <p class="pas">市场分析</p><p class="pas">加盟优势</p><p class="pas">加盟流程</p><p class="pas">全国分布</p>
   	  	  </div>
   	  	  <div class="text_box_to">
   	  	  	  <p class="tabsa">发声动态</p>
   	  	  	  <p class="pas">U发布</p><p class="pas">新闻中心</p><p class="pas">合作共赢</p>
   	  	  </div>
   	  	  
   	  	  <div class="boxa">
   	  	  	 <div class="img_box"></div>
   	  	  	 	<p class="px">微信公众号</p>
   	  	  	  <div class="img_box_to">
   	  	  	  	 <img src="../static/img/weixn.jpg" alt="" />
   	  	  	  	 <img src="../static/img/qq.jpg" alt="" />
   	  	  	  	 <img style="margin: 0;" src="../static/img/weibo.jpg" alt="" />
   	  	  	  </div>
   	  	  </div>
   	  	  
   	  </div>
   </div>
   
  </div>
</template>

<script>
import router from './router/index.js'
import store from './vuex/store.js'
	
export default {
  name: 'App',
  store,
  data(){
  	return{
  		tab_act:['首页','品牌信息','课程体系','品牌合作','联系我们'],
//		tab_i:0,
  		
  	}
  },
  
  computed:{
  	 indexa(){
  	 	  return this.$store.state.btn_box_show
  	 },
  },
 methods:{
 	
 	 tab_click(i,index){
 	 	   this.tab_i = index;
 	 	   if(index==0){
 	 	   	  router.push({
	   	       path:'./home',
	        });
 	 	   }else if(index==1){
 	 	   	  router.push({
	   	       path:'./Brand_information',
	        });
 	 	   }else if(index==2){
 	 	   	  router.push({
	   	       path:'./curriculum_structure',
	        });
 	 	   }else if(index==3){
 	 	   	  router.push({
	   	       path:'./brand_cooperation',
	        });
 	 	   }else if(index==4){
 	 	   	  router.push({
	   	       path:'./about_us',
	        });
 	 	   }
 	 },
 
 },
 mounted(){
   	 document.getElementsByTagName('body')[0].style.zoom=0.8;
   console.log(this.$store.state.btn_box_show)
 }
}
</script>

<style scoped="scoped">
	*{
		font-family: "FangSong_GB2312";
	}
	
	.img_box_to img{
		width: 43px;
		height: 43px;
		float: left;
		margin-right:18px;
	}
	.img_box_to{
		 width: 100%;
		 height: 43px;
		 margin-top:48px;
	}
	.px{
		 font-size: 15px;
		 color: white;
		 margin-top: 10px;
	}
	.img_box img{
		 width: 100%;
		 height: 100%;
	}
	.img_box{
		 width: 100%;
		 height: 163px;
		 background: white;
	}
	.boxa{
		 width: 165px;
		 height: 282px;
		 float: right;
		 text-align: center;
	}
	
	.text_box_to{
		 width: 124px;
		 height: 282px;
		 float: left;
		 margin-right: 51px;
	}
	.pas{
		font-size: 16px;
		color: #adadad;
		line-height: 41px;
	}
	.tabsa{
		 font-size: 26px;
		 color: white;
		 font-weight: 600;
		 margin-bottom: 14px;
		 
	}
	.text_box{
		 width: 308px;
		 height: 282px;
		 float: left;
	}
	.tab_bom{
		width: 100%;
		height: 523px;
		background: #464444;
		padding-top: 70px;
	}
	.tabs{
		 height: 100%;
		 float: left;
		 color: white;
		 text-align: center;
		 line-height: 100px;
		 padding: 0 12px;
		 font-size: 21px;
		 margin-left:10px;
		 background:#b0ce2f;
	}
	.tab:hover{
		cursor: pointer;
	}
	.tab{
		 /*width: 120px;*/
		 height: 100%;
		 float: left;
		 text-align: center;
		 line-height: 100px;
		 padding: 0 12px;
		 font-size: 19px;
		 margin-left:30px;
	}
	
	.inp_box img{
		 width: 19px;
		 height: 20px;
		 float: right;
		 margin: 11px 18px 0 0;
	}
	.inp_box input{
		height: 20px;
		width: 198px;
		margin-top: 12px;
		float: left;
		margin-left:28px;
		border: none;
		outline: none;
	}
	.inp_box{
		width: 271px;
		height: 42px;
		float: left;
		margin-left: 63px;
		margin-top: 30px;
		background: white;
		border-radius: 21px;
		border:1px solid #e9e9e9;
		margin-right: 75px;
	}
	.top{
		width: 100%;
		height: 100px;
		background:#f5f5f5;
		border-bottom:1px solid #bfbfbf;
		overflow: hidden;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 500;
	}
	.logo{
		height:100%;
		float: left;
		margin-left: 10px;
		margin-top:1px;
	}

	
</style>
