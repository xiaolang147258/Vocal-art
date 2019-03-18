<template>
  <!--关于我们-->
  <div id="hello" style="width:100%;">
      <div class="img_box"><img src="../../static/img/lianxi.jpg" alt="" /></div>
      	  
       <div class="act_div">
       	   <p class="tabs">联系方式</p>
       	   <img class="ditu" src="../../static/img/suoha_03.jpg" alt="" />
       	   <img class="xian" src="../../static/img/suoha_05.jpg" alt="" />
       	   <div class="fankui_box">
       	   	   <p class="p_ad">客户留言</p>
       	   	   <div class="inp1_box">
       	   	   	  <input class="inp1" type="text" name="" placeholder="姓名" />
       	   	   	  <input class="inp1" type="text" name="" placeholder="电子邮箱" />
       	   	   	  <input class="inp1" type="number" maxlength="11" placeholder="电话" />
       	   	   </div>
       	   	  <div style="width: 1181px;height: 197px;margin: 15px auto;"> 
       	   	   <textarea class="inp2" placeholder="留言"></textarea>
       	   	  </div> 
       	   	  
       	   	   <div class="inp1_boxs">
       	   	   	   <input class="inp1" type="text" name="" placeholder="输入图中验证码" />
       	   	   	   <div class="yanzhen"><img src="../../static/img/kecheng/yan_08.jpg" alt="" /></div>
       	   	   </div>
       	   	   
       	   	   <div class="jiao">提交</div>
       	   	   
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
    	 
    }
  },
  methods:{
  	
  },
  mounted(){
  	  window.scrollTo(0,0);  
  	  store.state.btn_box_show = 4;
  }
}
</script>

<style scoped>
	.jiao{
		width: 251px;
		height: 67px;
		margin: 41px auto;
		background: #cf3f00;
		border-radius: 33.5px;
		line-height: 67px;
		text-align: center;
		font-size: 29px;
		color: white;
	}
	.yanzhen img{
		width: 100%;
		height: 100%;
	}
	.yanzhen{
		width: 96px;
		height: 30px;
		float: left;
		margin: 17px 0 0 26px;
		background: white;
	}
	.inp2{
		 width:1181px;
		 height:197px;
		 border-radius: 10px;
		/*background: wheat;*/
		border: 1px solid #d3d3d2;
		float: left;
		font-size: 20px;
		padding-left: 18px;
		padding-top: 18px;
		box-sizing: border-box;
		outline:none;
		
	}
	
	.inp1{
		width: 357px;
		height: 100%;
		border-radius: 10px;
		/*background: wheat;*/
		border: 1px solid #d3d3d2;
		float: left;
		font-size: 20px;
		padding-left: 18px;
		box-sizing: border-box;
		outline:none;
		
	}
	.inp1_boxs{
		width: 1178px;
		height: 67px;
		margin: 0 auto;
	}
	.inp1_box{
		width: 1178px;
		height: 67px;
		margin: 0 auto;
		margin-top: 44px;
		/*background: red;*/
		display:-webkit-flex; 
     display:flex;
		 flex-direction:row;
		justify-content:space-between;
		
		
	}
	.p_ad{
		  width: 100%;
		  font-size: 30px;
		  color:#606060;
		  
		  text-align: center;
	}
	.fankui_box{
		width: 100%;
		/*height: 624px;*/
		background: #f2ffbd;
		padding-top: 44px;
		padding-bottom: 10px;
	}
	.xian{
		 width: 100%;
		 height: 262px;
	}
	.ditu{
		 width: 100%;
		 height: 506px;
	}
	.tabs{
		 width: 100%;
		 text-align: center;
		 font-size: 31px;
		  color: #606060;
		  margin: 61px 0;
	}
	.act_div{
		width: 1317px;
		/*height: 1541px;*/
		margin:  0 auto;
	  /*border: 1px solid red;*/
	}
	.img_box{
		  width: 100%;
		  height: 100%;
	}
	  .img_box{
	  	  width: 100%;
	  	  height: 452px;
	  	  
	  }
</style>
