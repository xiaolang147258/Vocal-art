<template>
  <!--首页-->
  <div id="hello" style="width:100%;background:#F8515E;padding-bottom:0.413333rem;float: left;">
  	
  	  <img class="feng1" src="../../../static/img/fengye.png" alt="" />
  	  <img class="feng2" src="../../../static/img/fengye_b.png"/>
  	  <img class="feng3" src="../../../static/img/fengye_a.png"/>
  	  <img class="feng4" src="../../../static/img/fengye_b.png"/>
  	
      <img class="top_img" src="../../../static/img/banner.png" alt="" />
      
      <div class="img_box"><img src="../../../static/img/laba.png" alt="" />
         <p>活动倒计时：<a>10</a>天<a>21</a>时<a>30</a>分<a>50</a>秒</p></div>
      
      <div class="yin"> 
      	  <div class="yin_box">
      	  	  <div class="yin_box_c"><img src="../../../static/img/shipin.png" />
      	  	     <p style="font-size:0.333333rem;margin-bottom:0.133333rem;">视频量</p>
      	  	     <p style="font-size:0.426666rem;">3432523</p>
      	  	  </div>
      	  	  <div class="shu"></div>
      	  	   <div class="yin_box_c"><img src="../../../static/img/zongtoupiao.png" />
      	  	     <p style="font-size:0.333333rem;margin-bottom:0.133333rem;">总投票</p>
      	  	     <p style="font-size:0.426666rem;">3432523</p>
      	  	  </div>
      	  	  <div class="shu"></div>
      	  	  <div class="yin_box_c"><img style="height:1.026666rem;margin-bottom:0.32rem;" src="../../../static/img/liulanliang.png" />
      	  	     <p style="font-size:0.333333rem;margin-bottom:0.133333rem;">浏览量</p>
      	  	     <p style="font-size:0.426666rem;">3432523</p>
      	  	  </div>
      	  </div>
      </div>
      
      <div class="img_box_2">
      	  <input @blur="inp_show=true" @focus="inp_show=false" type="text" id="inp" />
      	  <img @click="inp_fl" v-show="inp_show" src="../../../static/img/sousuo.png" alt="" /><p @click="inp_fl" v-show="inp_show">搜索学生姓名</p>
      </div>
      
      <div class="yin_s2">
      	  <div class="yin_s2_box">
      	  	  <div class="yin_s2_box_c1">
      	  	  	  <div @click="btn_click(0)" class="yin_s2_box_c1_ch" :class="{yin_cas:show_btn==0}">推荐</div>
      	  	  	    <div class="xina_shu"></div>
      	  	  	  <div @click="btn_click(1)" class="yin_s2_box_c1_ch2" :class="{yin_cas:show_btn==1}" style="">外国语言赛区</div>
      	  	  	    <div class="xina_shu"></div>
      	  	  	  <div @click="btn_click(2)" class="yin_s2_box_c1_ch2" :class="{yin_cas:show_btn==2}" style="">学前教育赛区</div>
      	  	  	    <div class="xina_shu"></div>
      	  	  	  <div @click="btn_click(3)" class="yin_s2_box_c1_ch2" :class="{yin_cas:show_btn==3}" style="">少儿英语培训赛区</div>
      	  	  </div>
      	  	  <div class="xian"></div>
      	  	  
      	  	   <div class="xuan_xiang_box">
      	  	   	
      	  	   	 <div v-for="(i,index) in 6" class="xuan_xiang_box_c" @click="go_vdet">
      	  	   	 	  <div class="img_box_s"><img src="http://img2.imgtn.bdimg.com/it/u=3991096239,1179572883&fm=26&gp=0.jpg"/>
      	  	   	 	    <div class="img_btn">231号</div></div>
      	  	   	 	  <p class="names">陈立农</p>
      	  	   	 	  <p class="xuexiao">剑桥郡金山谷学校</p>
      	  	   	 	  <p class="p_img"><img src="../../../static/img/aixin.png" /> &nbsp;<a>243245票</a></p>
      	  	   	 </div>
      	  	   	
      	  	   </div>
      	  	  
      	  </div>
      </div>
      
      
      
  </div>
</template>

<script>

import store from '../../vuex/store.js'
import router from '../../router/index.js'
import axios from 'axios'
export default {
  store,
  data () {
    return {
    	inp_show:true,
    	show_btn:0,
    	
    }
  },
  methods:{
  	git_token(){//微信授权
  		   axios.get('token'
        	    ).then(res=>{
        	    	 if(res.status = 200){
        	    	 	   console.log(res.data.data);
        	    	 	   localStorage.token = res.data.data
        	    	 	   window.location.href = 'http://video-mp.cieo.com.cn/wechat/login?token='+localStorage.token
        	    	 }
                }).catch(err=>{
                	console.log(err)
              }); 
  	},
  	
  	go_vdet(){//跳转入作品详情
  		  router.push({
  	   	 path:'./Video_details'
  	   });
  	   window.location.reload()
  	},
  	
  	inp_fl(){
  		document.getElementById('inp').focus()
  	},
  	
  	btn_click(i){
  	  	this.show_btn = i 
  	},
  	
  },
  mounted(){
//	 if(localStorage.token){
//	 	 console.log(localStorage.token)
//	 }else{
//	 	   this.git_token();
//	 }
  	  localStorage.token = '65b037f32dc6838e950d683215bafe4e' 
  	
//	   document.getElementById('hello').style.height = document.documentElement.clientHeight;
  	   this.$store.state.btn_show = true;
  	   this.$store.state.bottom_1 = true;
  	   this.$store.state.bottom_2 = false;
  	   this.$store.state.bottom_3 = false;
	     window.scrollTo(0,0);  
  }
}

</script>

<style scoped>
	.img_btn{
		width: 1.746666rem;
		height: 0.72rem;
		position: absolute;
		bottom: 0.133333rem;
		right: 0.133333rem;
		background: #FF6F7A;
		line-height: 0.72rem;
		font-size: 0.373333rem;
		color: white;
		border-radius:0.16rem;
		text-align: center;
	}
	.p_img a{
		color: #4DB1E5;
		
	}
	.p_img{
		margin-top: 0.133333rem;
		margin-left: 0.32rem;
		font-size: 0.32rem;
		
	}
	
	.p_img img{
		width: 0.386666rem;
		height: 0.32rem;
		/*float: left;*/
		margin-bottom: -0.036666rem;
		
	}
	.xuexiao{
		font-size: 0.32rem;
		color: #BABABA;
		line-height:0.586666rem;
		margin-top:0.133333rem;
		margin-left: 0.32rem;
	}
	.names{
		margin-top: 0.213333rem;
		margin-left: 0.32rem;
		font-size: 0.4rem;
		font-weight:500;
line-height:0.586666rem;
color:rgba(0,0,0,1);
opacity:1;
	}
	.img_box_s img{
		width: 100%;
		height: 100%;
	}
	.img_box_s{
		width: 100%;
		height: 4.213333rem;
		border:0.08rem solid rgba(255,111,122,1);
		opacity:1;
		border-radius:0.266666rem;
		overflow: hidden;
		position: relative;
	}
	
	.xuan_xiang_box_c{
		width: 4.213333rem;
		height: 6.533333rem;
		float:left;
		background:rgba(255,255,255,1);
		box-shadow:0px 5px 20px rgba(255,186,198,0.46);
		opacity:1;
		border-radius:0.266666rem;
		margin-left:0.3rem;
		margin-bottom: 0.426666rem;
	}
	.xuan_xiang_box{
	  width:100%;
	  margin-top: 0.413333rem;
	  /*padding-left: 0.4rem;*/
	  float: left;
	}
	.yin_cas{
		 background: #4DB1E5;
		 color: #D6F1FF;
	}
	
	.yin_s2_box_c1_ch2{
		width:2.106666rem;margin-left:0.103333rem;
		font-size:0.4rem;
		/*color: #BABABA;*/
		float: left;
		border-radius:0.12rem;
		height:1.35rem;
		padding: 0.08rem 0.213333rem;
		text-align: center;
		/*background: red;*/
	}
	.xina_shu{
		width:0.053333rem;
		height: 0.553333rem;
		background: #D6F1FF;
		float: left;
		margin-top: 0.313333rem;
		margin-left: 0.146666rem;
	}
	.yin_s2_box_c1_ch{
		font-size:0.4rem;
		/*color: #BABABA;*/
		text-align: center;
		width: 1.52rem;
		height:1.35rem;
		line-height: 1.28rem;
		/*background: red;*/
		float: left;
		border-radius:0.12rem;
	}
	
	
	.xian{
		width: 8.72rem;
		height: 0.053333rem;
		background:#D6F1FF;
		margin: auto;
	}
	.yin_s2_box_c1{
		width: 8.82rem;
		height:1.693333rem;
		margin: auto;
		color: #BABABA;
	}
	.yin_s2_box{
		width: 9.36rem;
		/*height: 6.666666rem;*/
		background: white;
		
		margin-left:-0.4rem;
		border-radius:0.266666rem;
		padding: 0.56rem 0 0.133333rem 0;
		float: left;
	}
	.feng4{
		width: 3.88rem;
		height: 4.626666rem;
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: 0;
	}
	.feng3{
		width: 1.773333rem;
		height:3.426666rem;
		position: absolute;
		top:9.333333rem;
		left: 0;
		z-index: 0;
	}
	.feng2{
		width: 3.88rem;
		height: 4.626666rem;
		position: absolute;
		top: 10.373333rem;
		right: 0;
		z-index: 0;
	}
	.feng1{
		width: 1.56rem;
		height: 3.2rem;
		position: absolute;
		top: 3.453333rem;
		right: 0;
		z-index:0;
	}
	
	.yin_s2{
		width: 8.56rem;
		/*height:6.666666rem;*/
		margin: auto;
		background: #FFADB4;
		border-radius:0.266666rem;
		position: relative;
		 z-index: 1;
		 padding: 0.213333rem 0;
		 float: left;
		 margin-left: 0.72rem;
	}
	
	.img_box_2 p{
		font-size: 0.426666rem;
		position:absolute;
		right: 3.106666rem;
		top: 0.226666rem;
		color: #BABABA;
	}
	.img_box_2 img{
		 width: 0.4rem;
		 height: 0.4rem;
		 position: absolute;
		 left: 3.133333rem;
		 top: 0.333333rem;
	}
	#inp{
		border: none;
		height: 100%;
		width: 60%;
		margin-left: 1.8rem;
		text-align: center;
	}
	
	.img_box_2{
		width: 9.36rem;
		height: 1.066666rem;
		margin: 0.28rem auto;
		background:url('../../../static/img/sousuokaung.png');
		background-size:100% 100%;background-repeat:no-repeat;
		position: relative;
		 z-index: 1;
	}
	
	.shu{
		width: 0.053333rem;
		height: 1.133333rem;
		float: left;
		background: #D6F1FF;
		margin-top: 1.44rem;
	}
	.yin_box_c img{
		 width: 0.92rem;
		 height: 0.88rem;
		 margin-left: 0.023333rem;
		 margin-bottom:0.466666rem;
	}
	.yin_box_c{
		 width: 3.04rem;
		 height:100%;
		 text-align: center;
		 float: left;
		 padding-top: 0.746666rem;
		 color: #4DB1E5;
	}
	
	.yin_box{
		 width: 9.36rem;
		 height: 4.093333rem;
		 background: white;
		 border-radius:0.266666rem;
		 position: absolute;
         top: 0.2rem;
         left: -0.4rem;
         padding-left: 0.133333rem;
	}
	
	.img_box p a{
		 font-size: 0.373333rem;
	}
	.img_box p{
		 font-size: 0.32rem;
		 float: left;
		 line-height:0.85rem;
		 margin-left: 0.133333rem;
	}
	.img_box img{
		 width: 0.32rem;
		 height: 0.306666rem;
		 float: left;
		 margin-top: 0.28rem;
	}
	
	.yin{
		 width: 8.56rem;
		 height:4.493333rem;
		 border-radius:0.266666rem;
		 background: #FFADB4;
		 margin: 0 auto;
		 position: relative;
		 z-index: 1;
	}
	
	.img_box{
		width: 8.786666rem;
		height:0.893333rem;
		margin: 0.1806666rem auto 0.256666rem auto;
		background: url('../../../static/img/huodongjiezhi.png');
		background-size:100% 100%;background-repeat:no-repeat;
		padding-left: 0.36rem;
	}
	.hello{
		position: relative;
		float: left;
	}
	.top_img{
		width: 100%;
		height: 5.626666rem;
		position: relative;
		z-index: 1;
		
	}
	
</style>
