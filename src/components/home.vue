<template>
  <!--首页-->
  <div id="hello" style="width:100%;">
      <div class="swip_box">
      	  <el-carousel>
           <el-carousel-item v-for="item in 4" :key="item">
                 <h3>{{ item }}</h3>
               </el-carousel-item>
         </el-carousel>
      </div>
      
      <div class="top_2_box">
      	
      	  <div @mouseenter="truesa1=true" @mouseleave="truesa1=false" class="top_2_box_box" style="-moz-box-shadow:0px 3px 18px #9DBC18; -webkit-box-shadow:0px 3px 18px #9DBC18; box-shadow:0px 3px 18px #9DBC18;">
      	  	<img src="../../static/img/shouyeaaa_03.jpg" alt="" />
      	  	 <transition name="el-zoom-in-top">
                <div v-show="truesa1" class="mengs" style="background: rgba(157, 188, 24, 0.7);">
                	   <p>教学特色</p>
                	   <div style="color: rgba(157, 188, 24, 0.7);">More</div>
                </div>
           </transition>
      	  </div>
      	  
      	  <div @mouseenter="truesa2=true" @mouseleave="truesa2=false" class="top_2_box_box" style="-moz-box-shadow:0px 3px 18px #e77e31; -webkit-box-shadow:0px 3px 18px #e77e31; box-shadow:0px 3px 18px #e77e31;">
      	  	<img src="../../static/img/shouyeaaa_05.jpg" alt="" />
      	  	<transition name="el-zoom-in-top">
                <div v-show="truesa2" class="mengs" style="background: rgba(231, 126, 49, 0.7);">
                	   <p>发声动态</p>
                	   <div style="color: rgba(231, 126, 49, 0.7);">More</div>
                </div>
            </transition>
      	  </div>
      	  
      	  <div @mouseenter="truesa3=true" @mouseleave="truesa3=false" class="top_2_box_box" style="margin:0;-moz-box-shadow:0px 3px 18px #9DBC18; -webkit-box-shadow:0px 3px 18px #9DBC18; box-shadow:0px 3px 18px #9DBC18;">
      	  	<img src="../../static/img/shouyeaaa_07.jpg" alt="" />
      	  	<transition name="el-zoom-in-top">
                <div v-show="truesa3" class="mengs" style="background: rgba(157, 188, 24, 0.7);">
                	   <p>合作加盟</p>
                	   <div style="color: rgba(157, 188, 24, 0.7);">More</div>
                </div>
            </transition>
      	  </div>
      </div>
      
      <div class="fasheng_p"><img src="../../static/img/fasheng.jpg" alt="" /></div>
      <div class="top_3_box">
      	  <img src="../../static/img/top3.jpg"/>
      	  <img src="../../static/img/to4.jpg"/>
      	  <img style="margin:0;" src="../../static/img/to5.jpg"/>
      </div> 
      <div class="gen"><img src="../../static/img/gengduo.jpg"/></div>
      <div class="fasheng_p" style="overflow:hidden;"><img style="margin-top:-10px;" src="../../static/img/feng.jpg" alt="" /></div>
      
      <div class="xin_box">
      	  <div class="xin_box_c" v-for="(i,index) in 6">
      	  	 <div class="xin_box_c_box" >
      	  	 	<div class="meng"><img src="../../static/img/bo.png" alt="" /></div>
      	  	 	<img class="xin_box_c_box_img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3220681365,3634029949&fm=27&gp=0.jpg" alt="" />
      	  	 </div>
      	  	 <div class="p_box">鞠萍姐携手各位大咖同台亮相鞠萍姐携手各位大咖同台亮相</div>
      	  </div>
      </div>
      
      <div class="gen"><img src="../../static/img/gengduo.jpg"/></div>
      
      <img v-show="false" class="to_top" src="../../static/img/to_top.png"/>
      
  </div>
</template>

<script>

import store from '../vuex/store.js'
import router from '../router/index.js'
import axios from 'axios'
export default {
  
  data () {
    return {
    	 truesa1:false,
    	 truesa2:false,
    	 truesa3:false,
    	 
    	 
    }
  },
  methods:{
  	 
  	 
  },
  mounted(){
  	  window.scrollTo(0,0);  
  	  store.state.btn_box_show = 0;
  }
}
</script>

<style scoped>
	.mengs div{
		 width: 150px;
		 height: 60px;
		 background: white;
		 border-radius: 30px;
		 line-height: 60px;
		 text-align: center;
		 font-size: 24px;
		 margin: 20px auto;
		 
	}
	.mengs p{
		font-size: 30px;
		color: white;
	}
	.mengs{
		 width: 100%;
		 height: 100%;
		 position: absolute;
		 top: 0;
		 left: 0;
		 z-index: 300;
		 text-align: center;
		 padding-top: 90px;
	}
	
	.xin_box_c_box_img{
		width: 100%;
		min-height: 100%;
	}
	.meng img{
		width: 106px;
		height: 106px;
		margin: 73px 149px;
	}
	.xin_box_c_box:hover .meng{
		opacity:1;
		transition:0.5s;
	}
	.xin_box_c_box:hover{
		 cursor: pointer;
	}
	.meng{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.7);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 400;
		opacity:0;
		transition:0.5s;
	}
	.to_top{
		width: 50px;
		height: 50px;
		position: fixed;
		bottom: 100px;
		right:30px;
		z-index:500;
	}
	.p_box{
		font-size: 18px;
		width: 345px;
		margin: 30px auto 0 auto;
		text-align: center;
		 overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
	}
	.xin_box_c_box{
		width: 100%;
		height: 251px;
		border-radius:10px;
		overflow:hidden;
		background: #475669;
		position: relative;
	}
	.xin_box_c{
		width: 402px;
		height:303px;
		float: left;
		position: relative;
	}
	.xin_box{
		width: 1326px;
		height: 687px;
		margin: 0 auto;
		 display:-webkit-flex; 
         display:flex;
		 flex-direction:row;
		 flex-wrap:wrap;
		 justify-content:space-between;
	}
	.gen img{
		width: 100%;
		height: 100%;
	}
	.gen{
		width: 259px;
		height: 74px;
		margin: 47px auto;
	}
	.top_3_box img{
		width: 423px;
		height: 100%;
		float: left;
		margin-right: 30px;
	}
	.top_3_box{
		width: 1331px;
		height: 412px;
		margin: 10px auto;
	}
	.fasheng_p img{
		width: 100%;
		height: 100%;
	}
	.fasheng_p{
		width: 435px;
		height: 189px;
		margin: 0 auto;
	}
	.top_2_box_box img{
		 width: 100%;
		 height: 100%;
	}
	.top_2_box_box{
		width: 433px;
		height: 100%;
		float: left;
		margin-right: 16px;
		position: relative;
		overflow: hidden;
		border-radius: 4px;
	}
	.top_2_box{
		width: 1331px;
		height: 308px;
		margin: 0 auto;
		margin-top: 78px;
		/*background: red;*/
	}
	.el-carousel__item h3{
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 500px;
     margin: 0;
     text-align: center;
  }
	.el-carousel-item{
		height: 100%;
	}
	.el-carousel{
		height: 100%;
	}
	 .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
	.swip_box{
		 width: 100%;
		 height: 700px;
	}
</style>
