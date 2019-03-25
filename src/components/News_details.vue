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
            	<p class="right_p" style="color:#b7d537;"><a>/</a>发声艺术2017大记实</p>
            	<p class="right_p"><a>/</a>发声艺术介绍</p>
            	<p class="right_p"><a>/</a>品牌信息</p>
            	<p class="right_p">首页</p>
            </span>
    	</div>
    </div>
    
    <div class="val_box">
    	<p class="psa">发声艺术2017大记实</p>
    	<img src="../../static/img/pinpai/xiangs.jpg" alt="" />
    	<div>
                          由于教材的专业性，被浙江省选中为武安国由于教材的专业性，被浙江省选中为武安国由于教材的专业性，被浙江省选中为武安国由于教材的专业性，被浙江省选中为武安国由于教材的专业性，被浙江省选中为武安国
    	    由于教材的专业性，被浙江省选中为武安国由于教材的专业性，被浙江省选中为武安国由于教材的专业性，被浙江省选中为武安国由于教材的专业性，被浙江省选中为武安国由于教材的专业性，被浙江省选中为武安国
    	    由于教材的专业性，被浙江省选中为武安国由于教材的专业性，被浙江省选中为武安国由于教材的专业性，被浙江省选中为武安国由于教材的专业性，被浙江省选中为武安国由于教材的专业性，被浙江省选中为武安国
    	    由于教材的专业性，被浙江省选中为武安国由于教材的专业性，被浙江省选中为武安国由于教材的专业性，被浙江省选中为武安国由于教材的专业性，被浙江省选中为武安国由于教材的专业性，被浙江省选中为武安国
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
    	tab:['发声艺术介绍','发声艺术名人','发声艺术团队','资质荣誉'],
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
	.val_box div{
		 width: 100%;
		 font-size: 17px;
		 color: #606060;
		 text-align:justify;
		 margin-top: 47px;
		 line-height: 40px;
	}
	.val_box img{
		width: 100%;
		height: 546px;
		margin-top: 57px;
	}
	.psa{
		font-size: 28px;
		text-align: center;
		color: #606060;
	}
	.val_box{
		width: 925px;
		margin: 0 auto 60px auto;
		padding-top: 77px;
		box-sizing: border-box;
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
		
		transition: 0.4s;
	}
	
	.tet_box{
		width: 397px;
		height:120px;
		font-size: 15px;
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
		font-size: 15px;
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
		font-size: 20px;
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
