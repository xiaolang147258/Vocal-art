<template>
  <!--品牌合作-->
  <div id="hello" style="width:100%;padding-bottom: 50px;">
     <div class="top_img" style="">
  		<img style="width: 100%;height:100%;" src="../../static/img/pinpai/pin.jpg" alt="" />  
  	</div>
    <div class="top_box">
    	<div class="top_box_c_box">
    		<span><p class="left" v-for="(i,index) in tab" @click="p_click(i,index)" :class="{top_box_c_box_p:tab_show==index}">{{i}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a>|</a></p></span>
            <span>
            	<p class="right_p" style="color:#b7d537;"><a>/</a>发声艺术介绍</p>
            	<p class="right_p"><a>/</a>品牌合作</p>
            	<p class="right_p">首页</p>
            </span>
    	</div>
    </div>
   
   <div class="act_box">
   	   <p class="tatl">市场分析</p>
   	   <div class="text">
   	   	   课程分为十级，适合4-3岁小孩子的训练进行学习学习 课程分为十级，适合4-3岁小孩子的训练进行学习学习 课程分为十级，适合4-3岁小孩子的训练进行学习学习 
   	   	   课程分为十级，适合4-3岁小孩子的训练进行学习学习 课程分为十级，适合4-3岁小孩子的训练进行学习学习
   	   	    课程分为十级，适合4-3岁小孩子的训练进行学习学习 课程分为十级，适合4-3岁小孩子的训练进行学习学习 课程分为十级，适合4-3岁小孩子的训练进行学习学习。
   	   	     课程分为十级，适合4-3岁小孩子的训练进行学习学习 课程分为十级，适合4-3岁小孩子的训练进行学习学习 课程分为十级，适合4-3岁小孩子的训练进行学习学习 
   	   	     课程分为十级，适合4-3岁小孩子的训练进行学习学习 课程分为十级，适合4-3岁小孩子的训练进行学习学习
   	   	    课程分为十级，适合4-3岁小孩子的训练进行学习学习 课程分为十级，适合4-3岁小孩子的训练进行学习学习 课程分为十级，适合4-3岁小孩子的训练进行学习学习。
   	   	     课程分为十级，适合4-3岁小孩子的训练进行学习学习 课程分为十级，适合4-3岁小孩子的训练进行学习学习 课程分为十级，适合4-3岁小孩子的训练进行学习学习 
   	   	     课程分为十级，适合4-3岁小孩子的训练进行学习学习 课程分为十级，适合4-3岁小孩子的训练进行学习学习
   	   	    课程分为十级，适合4-3岁小孩子的训练进行学习学习 课程分为十级，适合4-3岁小孩子的训练进行学习学习 课程分为十级，适合4-3岁小孩子的训练进行学习学习。
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
    	 tab:['市场分析','加盟优势','加盟流程','全国分布','师资查询'],
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
  	  store.state.btn_box_show = 3;
  }
}
</script>

<style scoped>
	
	.text{
		  width: 100%;
		  font-size: 17px;
		  line-height: 35px;
		  text-align:justify;
		  margin-top:63px;
		  
	}
	 .tatl{
	 	 width: 100%;
	 	 text-align: center;
     font-size: 29px;
     color: #606060;
	 }
	
	 .act_box{
	 	width: 935px;
	 	/*height: 888px;*/
	 	margin: 76px auto;
	 	/*background: red;*/
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
		margin-right:25px;
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
