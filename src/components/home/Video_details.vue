<template>
  <!--视频详情-->
  <div id="hello" style="width:100%;background:#F8515E;padding-bottom:0.4rem;" :class="{hellos:hellos_show}">
  	  
  	   <img class="imgs_1" src="../../../static/img/fengye.png"/>
  	   <img class="imgs_2" src="../../../static/img/fengye_b.png" alt="" />
  	   <img class="imgs_3" src="../../../static/img/fengye_a.png" alt="" />
  	   <!--<img class="imgs_4" src="../../../static/img/fengye_b.png" alt="" />-->
  	   
      <video  autoplay="autoplay" id="demo_video" onended="" controls="controls" webkit-playsinline='true' playsinline='true' class="video-js vjs-big-play-centered"></video> 
      
      <div class="video_1_box">
      	  <div class="video_1_box_c1">
      	  	  <div class="video_1_box_c1_p"><p>刘望天 </p><div class="video_1_box_c1_div">23441号</div></div>
      	  	  <p class="psa">票数 2345票</p>
      	  	  <div class="video_1_box_c1_img"><img src="../../../static/img/upimg/xuexiao.png"/>
      	  	      <p>外国语言赛区-剑桥郡外国语言学校</p>
      	  	  </div>
      	  	  <!--头像-->
      	  	  <div class="img_tou"><img src="../../../static/img/upimg/touxiang.png"/></div>
      	  </div>
      	  <div class="video_1_box_c2">
      	  	 <div class="video_1_box_c2_cq">视频介绍</div>
      	  	 <div class="video_1_box_c2_cq2">
      	  	 	这个视频是我们班同学3年来辛苦排练出来的，这个视频是我们班同学3年来辛苦排练出来的，
      	  	 	这个视频是我们班同学3年来辛苦排练出来的，这个视频是我们班同学3年来辛苦排练出来的，
      	  	 </div>
      	  	 <div class="btn_box">
      	  	  <div @click="zhi_click(1)" style="background:#FF6F7A;float: left;">为他/她投一票(+1)</div>
      	  	  <div @click="zhi_click(10)" style="background:#4DB1E5;float: right;">大力支持他/她(+10)</div>
      	     </div>
      	  </div>
      </div>
      
      <!--绑定手机号  首次支持需要邦定手机号-->
        <mu-fade-transition>
          <div @touchmove.prevent class="iphone_s" v-show="show4">
          	<mu-scale-transition>
          	  <div class="iphone_s_box">
          	 	   <p class="iphone_s_box_p">支持一下你心中的Superstar吧!</p><img class="iphone_s_box_img" src="../../../static/img/xin/qiqiu.png" alt="" />
          	 	   <input v-model="names" @blur="to_top" class="iphone_s_box_inp" type="text" placeholder="请填写您的姓名" />
          	 	   <input v-model="iphones" style="margin-top:0.266666rem;" @blur="to_top" class="iphone_s_box_inp" type="number" pattern="\d*" name="number" placeholder="请输入手机号" />
          	     <div class="iphone_s_box_p_box"><img src="../../../static/img/upimg/tishi.png"/><p>首次支持需完善个人信息</p></div>
          	     <div class="btn_boxs">
          	     	   <div @click="show4=false" style="background:rgba(255,223,99,1);float:left;color:#666666;" class="btn_boxsbtn">考虑一下</div>
          	     	   <div @click="iphone_bao_cun" style="background:#4DB1E5;float: right;" class="btn_boxsbtn">保存</div>
          	     </div>
          	  </div>
          	</mu-scale-transition> 
          </div>
     </mu-fade-transition>
    <!--支持成功/失败--->  
     <mu-fade-transition>
          <div @touchmove.prevent class="iphone_ss" v-show="show5">
          	   <mu-scale-transition>
                  <div class="ok_box" v-show="show5">
                  	<!--已经支持过了-->
                  	 <div v-if="show5_s==false">
                  	   <img class="ok_box_img1" src="../../../static/img/xin/guanwang.png" alt="" />
                  	   <div class="ppp">您今天已对当前视频投过票了，请明天再来~</div>
                  	   <div @click="git_home" class="ok_box_btn">看看其他</div>
                  	 </div> 
                  	 <!--支持成功-->
                  	 <div v-else>
                  	   <div class="er">二维码</div>
                  	   <div class="ppp">支持成功,关注官方公众号惊喜不断哦~</div>
                  	 </div> 
                  	 <img @click="show5=false" class="ok_box_img2" src="../../../static/img/upimg/guanbi (1).png"/>
                  </div>
              </mu-scale-transition>
          </div>
    </mu-fade-transition> 
      
  </div>
</template>

<script>
import store from '../../vuex/store.js'
import router from '../../router/index.js'
export default {
  data () {
    return {
    	show5_s:false,
    	
    	show5:false,
    	
    	hellos_show:false,
    	show4:false,
    	
    	names:'',
    	iphones:'',
    	
    }
  },
  methods:{
  	git_home(){
  		
  		 router.push({
  	   	 path:'./home',
  	   });
  	},
  	
  	zhi_click(i){//用户点击支持按钮
  		if(i==1){
  			this.show4 = true;//弹出绑定手机-输入框
  		}else if(i==10){
  			this.show5 = true;//弹出-支持结果-提示框
  			this.show5_s = false;//支持成功=true/支持失败=false
  			
  		}
  	},
  	
  	iphone_bao_cun(){//保存手机号，点击保存
  		 if(this.names!=''&&this.iphones!=''&&this.iphones.length==11){
  		 	   this.show4 = false  
  		 }else{
  		 	  this.$toast({
        	      message:'信息有误',
        	      duration:1000
        	  });
  		 }
  	},
  	to_top(){//返回顶部
      window.scrollTo(0,0);  
  	},
  	
  	
  },
  mounted(){
  	  this.$store.state.btn_show = false;
//	  document.getElementById('hello').style.height = document.documentElement.clientHeight+'px';
     window.setTimeout(()=>{//加载视频
        store.state.video_b_url = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=604482600,1393215599&fm=27&gp=0.jpg';
        store.state.dat.Initializationone('http://demo-videos.qnsdk.com/movies/qiniu.mp4','1');
      },100)
     
      window.scrollTo(0,0);  
      
      let win_height = document.documentElement.clientHeight;
      let hel_height = document.getElementById('hello').clientHeight;
      this.hellos_show = hel_height<win_height?true:false;
      
     }
}
</script>

<style scoped>
	.er{
		width: 2.613333rem;
		height: 2.613333rem;
		margin: 0.5rem auto 0.7rem auto;
		background: #000000;
		color: white;
	}
	.ok_box_img2{
		width: 1.013333rem;
		height: 1.013333rem;
		position: absolute;
		left: 3.813333rem;
		bottom:-1.426666rem;
	}
	.ok_box_btn{
		 width:3.346666rem;
height:1.173333rem;
background:rgba(77,177,229,1);
opacity:1;
border-radius:0.586666rem;
font-size: 0.426666rem;
color: white;
text-align: center;
line-height: 1.173333rem;
margin: 0.4rem auto;
	}
	.ppp{
		 width: 5.973333rem;
		 height: 1.333333rem;
		 font-size:0.426666rem;
		 color:#BABABA;
		 margin: auto;
		 text-align: center;
		 margin-top: 0.4rem;
	}
	.ok_box_img1{
		 width:3.386666rem;
		 height:2.386666rem;
		 margin:0 2.653333rem;
	}
	
	.ok_box{
		 width:8.72rem;
		 height: 7.426666rem;
		 margin: 2.746666rem auto;
		 background: white;
		 border-radius:0.266666rem;
		 position: relative;
		 text-align: center;
		 padding-top: 0.8rem;
	}
	.iphone_ss{
		 width: 100%;
		 height: 100%;
		 position: fixed;
		 top: 0;
		 left: 0;
		 z-index: 500;
		 background: rgba(0,0,0,.5);
	}
	
	
	.btn_boxsbtn{
		 width: 3.346666rem;
		 height: 100%;
opacity:1;
border-radius:0.586666rem;
text-align: center;
color: white;
	}
	.btn_boxs{
		 width: 7.44rem;
		 height: 1.173333rem;
		 line-height: 1.173333rem;
		 font-size: 0.426666rem;
		 margin-top: 0.533333rem;
	}
	.iphone_s_box_p_box p{
		 float: left;
		 line-height: 0.36rem;
	}
	.iphone_s_box_p_box img{
		width: 0.36rem;
		height: 0.36rem;
		float: left;
		margin-right: 0.2rem;
		
	}
	.iphone_s_box_p_box{
		 width: 5.333333rem;
		 height: 0.36rem;
		 font-size: 0.346666rem;
		 color: #FF002D;
		 margin-top: 0.4rem;
	}
	.iphone_s_box_inp{
		width: 7.44rem;
		height: 1.013333rem;
		border: none;background: #F0F0F0;
		margin-top: 0.533333rem;
		padding-left: 0.266666rem;
		font-size: 0.333333rem;
		/*color: #BABABA;*/
	}
	
	.iphone_s_box_img{
		 width:2.08rem;
		 height:2.08rem;
		 position: absolute;
		 top: -0.386666rem;
		 right: 0;
	}
	.iphone_s_box_p{
		font-size: 0.426666rem;
		color: #4DB1E5;
	}
	.iphone_s_box{
		 width: 8.72rem;
		 height: 7.626666rem;
		 margin: 3.373333rem auto;
		 background: white;
		 border-radius:0.266666rem;
		 position: relative;
		 padding: 0.8rem 0.64rem;
	}
	.iphone_s{
		 width: 100%;
		 height: 100%;
		 position: fixed;
		 top: 0;
		 left: 0;
		 z-index: 500;
		 background: rgba(0,0,0,.5);
	}
	
	
	
	.imgs_4{
		width:3.88rem;
		height:4.133333rem;
		position: absolute;
		right: 0;
		bottom:0;
		z-index: 0;
	}
	.imgs_3{
		width:1.773333rem;
		height:3.613333rem;
		position: absolute;
		left: 0;
		top:7.986666rem;
		z-index: 0;
	}
	.imgs_2{
		width:3.88rem;
		height:4.133333rem;
		position: absolute;
		right: 0;
		top:10.6rem;
		z-index: 0;
	}
	.imgs_1{
		width: 1.76rem;
		height: 3.053333rem;
		position: absolute;
		right: 0;
		top: 3.52rem;
		z-index: 0;
	}
	
	.hellos{
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
	}
	
	.btn_box div{
		width: 4.133333rem;
		height: 100%;
		border-radius:0.133333rem;
		text-align: center;
		line-height: 0.96rem;
		font-size: 0.426666rem;
		color: white;
	}
	.btn_box{
		 width: 8.72rem;
		 height: 0.96rem;
		 margin:0 auto;
		 margin-top: 0.8rem;
	}
	.video_1_box_c2_cq2{
		width:100%;
		margin:0.333333rem 0;
		border-bottom:0.053333rem solid #D6F1FF;
		font-size:0.346666rem;
		color: #666666;
		line-height: 0.66rem;
		text-align:justify;
		padding-bottom:0.4rem;
	}
	.video_1_box_c2_cq{
		width: 100%;
		height: 0.88rem;
		border-bottom: 0.053333rem solid #D6F1FF;
		font-size: 0.426666rem;
		font-weight: 600;
	}
	.video_1_box_c2{
		width: 9.36rem;
		background:white;
		border-radius:0.266666rem;
		margin-left: -0.4rem;
		margin-top: 0.266666rem;
		padding: 0.4rem 0.32rem 0.8rem 0.32rem;
	}
	
	.img_tou img{
		/*min-width: 100%;
		min-height: 100%;
		max-width: 120%;
		max-height: 120%;*/
		/*position: absolute;
		top: 0;
		left: 0;*/
		width: 100%;
		height: 100%;
	}
	.img_tou{
		width: 1.76rem;
		height: 1.76rem;
		position: absolute;
		top: 0.44rem;
		right: 0.32rem;
		border-radius: 50%;
		overflow: hidden;
		/*position: relative;*/
	}
	.video_1_box_c1_img p{
		width: 7.833333rem;
		font-size: 0.32rem;
		color: #666666;
		float: left;
		line-height: 0.553333rem;
		margin-left: 0.106666rem;
		overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
	}
	.video_1_box_c1_img img{
		width: 0.453333rem;
		height: 0.453333rem;
		float: left;
	}
	.video_1_box_c1_img{
		height: 0.453333rem;
		width: 100%;
		margin-top: 0.4rem;
		overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
	}
	.psa{
		font-size: 0.373333rem;
		color: #4DB1E5;
		margin-top: 0.266666rem;
		
	}
	.video_1_box_c1_div{
		width: 1.386666rem;
		height: 0.48rem;
		border-radius:0.32rem;
		float: left;
		background: #FF6F7A;
		font-size: 0.293333rem;
		color: white;
		text-align: center;
		line-height: 0.48rem;
		margin-left: 0.413333rem;
		margin-top: 0.093333rem;
	}
	.video_1_box_c1_p p{
		font-size: 0.48rem;
		float: left;
		line-height: 0.666666rem;
	}
	.video_1_box_c1_p{
		width: 50%;
		height: 0.666666rem;
		
		
	}
	.video_1_box_c1{
		 width: 9.36rem;
		 height: 3.306666rem;
		 border-radius:0.266666rem;
		 background: white;
		 margin-left: -0.4rem;
		 position: relative;
		 padding: 0 0.32rem;
		 padding-top: 0.586666rem;
	}
	.video_1_box{
		width: 8.56rem;
		background: #FFADB4;
		border-radius:0.266666rem;
		margin: 0.266666rem auto;
		padding: 0.213333rem 0;
		position: relative;
		z-index: 1;
	}
	#demo_video{
		width:100%;
		height: 4.933333rem;
		position: relative;
		z-index: 1;
	}
</style>
