<template>
  <!--品牌信息-->
  <div id="hello" style="width:100%;padding-bottom:81px;">
  	
  	<div class="top_img" style="">
  		<img style="width: 100%;height:100%;" src="../../static/img/ding.jpg" alt="" />  
  	</div>
    <div class="top_box">
    	<div class="top_box_c_box">
    		<span><p class="left" v-for="(i,index) in tab" @click="p_click(i,index)" :class="{top_box_c_box_p:tab_show==index}">{{i}}&nbsp;&nbsp;&nbsp;&nbsp;<a>|</a></p></span>
            <span>
            	<p class="right_p" style="color:#b7d537;"><a>/</a>发声艺术介绍</p>
            	<p class="right_p"><a>/</a>品牌信息</p>
            	<p class="right_p">首页</p>
            </span>
    	</div>
    </div>
    
    <div class="btn_box">
    	<p class="tabls">发声艺术介绍</p>
    	
       <div class="btn_box_box_f">
       	 <div class="btn_box_box" id="box1" v-for="(i,index) in 3">
    		<div id="shan1" class="shan"></div>
    		<p class="p_ta">2018</p>
    		<div class="img_box"><img src="../../static/img/pin1.jpg" alt="" /></div>
    		<p class="tet_box">发声艺术商标注册有十年之久发，声艺术商标注册有十年之久发声艺术商标注册有十年之久，发声艺术商标注册有十年之久</p>
    		<div class="shu_xian_box" id="dian1"></div>
    	 </div>
       </div>
    	
    	<div class="shu_xian"></div>
    		
       <div class="btn_box_box_f_s">
       	 <div class="btn_box_box" id="box2" v-for="(i,index) in 2">
    		<div id="shan2" class="shan"></div>
    		<p class="p_ta">2017</p>
    		<div class="img_box"><img src="../../static/img/pin2.jpg" alt="" /></div>
    		<p class="tet_box">发声艺术商标注册有十年之久发，声艺术商标注册有十年之久发声艺术商标注册有十年之久，发声艺术商标注册有十年之久</p>
    		<div id="dian2"></div>
    	 </div>
       </div>
    	
    	
    </div>
  </div>
</template>

<script>

import store from '../vuex/store.js'
import router from '../router/index.js'
import axios from 'axios'
export default {
  data () {
    return {
    	tab:['发声艺术介绍','发声艺术名人','发声艺术团队'],
    	tab_show:0,
    	
    	
    }
  },
  methods:{
  	 p_click(i,index){
  	 	this.tab_show = index
  	 },
  	 
  	 
  },
  mounted(){
  	  window.scrollTo(0,0);  
  	  store.state.btn_box_show = 1;
  }
}
</script>

<style scoped>
	#box1:hover #dian1{
		background: #b7d537;
	}
	#box1:hover #shan1{
		background:url('../../static/img/right2.jpg');
	}
	#box1:hover{
		background: #b7d537;
	}
	
	#box2:hover #dian2{
		background: #b7d537;
	}
	#box2:hover #shan2{
		background:url('../../static/img/right2.jpg');
		
	   -webkit-transform: rotate(180deg);
		
	}
	#box2:hover{
		background: #b7d537;
	}
	
	#shan2{
		 width: 22px;
      height: 38px;
    position: absolute;
    left:-22px;
    top: 23px;
    background:url('../../static/img/left1.jpg');
    background-size:100% 100%;background-repeat:no-repeat;
	}
	#dian2{
		width: 11px;
		height: 11px;
		border-radius: 50%;
		background:#d0d0d0;
		position: absolute;
		left: -42px;
		top:-5px;
	}
	
	.btn_box_box_f_s{
		width: 436px;
		float: right;
		margin-right: 8px;
		padding-top: 55px;
	}
	.btn_box_box{
		width: 436px;
		height: 454px;
		border-radius: 6px;
		background: white;
		margin-top: 62px;
		-moz-box-shadow:0px 0px 14px #BFBFBF; -webkit-box-shadow:0px 0px 14px #BFBFBF; box-shadow:0px 0px 14px #BFBFBF;
		padding: 23px 23px 0 23px;
		box-sizing: border-box;
		position: relative;
	}
	
	
	
	
	.tet_box{
		width: 397px;
		height:120px;
		font-size: 16px;
		text-align:justify;
		display: -webkit-box;  
		display: -moz-box;  
		overflow: hidden;  
		text-overflow: ellipsis;  
		word-break: break-all;  
		-webkit-box-orient: vertical;  
		-webkit-line-clamp:5;
		color: #606060;
		line-height: 25px;
	}
	
    .p_ta{
    	font-size: 25px;
    	float: left;
    	width:100%;
    	margin-bottom: 14px;
    }
	
	.img_box img{
		width: 100%;
		height: 100%;
	}
	.img_box{
		width: 397px;
		height: 231px;
		margin: 0 auto;
		border-radius: 10px;
		overflow: hidden;
		margin-bottom: 20px;
	}
	
	.shan{
      width: 22px;
      height: 38px;
    position: absolute;
    right:-22px;
    top: 23px;
    background:url('../../static/img/rihgt.jpg');
    background-size:100% 100%;background-repeat:no-repeat;
    /*color:transparent*/
   /*BACKGROUND-COLOR: transparent;opacity:0;*/
	}
	
	.btn_box_box:hover{
		cursor: pointer;
	}
	.btn_box_box_f{
		width: 436px;
		float: left;
		
		margin-left: 8px;
	}
	.btn_box_box{
		width: 436px;
		height: 454px;
		border-radius: 6px;
		background: white;
		margin-top: 62px;
		-moz-box-shadow:0px 0px 14px #BFBFBF; -webkit-box-shadow:0px 0px 14px #BFBFBF; box-shadow:0px 0px 14px #BFBFBF;
		
		padding: 23px 23px 0 23px;
		
		box-sizing: border-box;
		position: relative;
	}
	
	#dian5{
		margin-top: 442px;
	}
	#dian4{
		margin-top: 46px;
	}
	#dian3{
		margin-top: 442px;
	}
	#dian2{
		margin-top: 46px;
	}
	.shu_xian_box{
		width: 11px;
		height: 11px;
		border-radius: 50%;
		background:#d0d0d0;
		position: absolute;
		right: -42px;
		top: 36px;
	}
	.shu_xian{
		width:1px;
		height: 1518px;
		
		background:#d0d0d0;
		/*margin: 0 auto;*/
		margin-top: 51px;
		position: relative;
		padding-top: 49px;
		float: left;
		margin-left: 36px;
	}
	.tabls{
		font-size: 29px;
		color: #606060;
		width: 100%;
		text-align: center;
	}
	.btn_box{
		width:962px;
		height: 1656px;
		margin: 0 auto;
		margin-top: 72px;
		/*text-align: center;*/
		/*border: 1px solid #464444;*/
		position: relative;
	}
	
	.right_p{
		font-size: 17px;
		float: right;
	}
	.top_box_c_box_p{
		 color: #b5d334;
	}
	.top_box_c_box a{
		color: #606060
	}
	.left{
		float: left;
		margin-right:19px;
		font-size: 23px;
	}
	.top_box_c_box:hover{
		cursor: pointer;
	}
	.top_box_c_box{
		width: 1322px;
		height: 100%;
	    margin: 0 auto;
	    line-height: 74px;
	    padding-left: 92px;
	    color: #606060
	}
	.top_box{
		width: 100%;
		height: 74px;
		-moz-box-shadow:0px 2px 11px #B0B0B0; -webkit-box-shadow:0px 2px 11px #B0B0B0; box-shadow:0px 2px 11px #B0B0B0;
	}
	.top_img{
		width: 100%;
		height: 452px;
	}
	
</style>
