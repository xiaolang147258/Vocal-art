<template>
  <!--上传视频-->
  <div id="hello" style="width:100%;background:#F8515E;padding:0.266666rem 0;" :class="{hellos:class_show}">
     
     <img class="left_inf" src="../../../static/img/fengye.png" alt="" />
      <img class="left_inf2" src="../../../static/img/fengye_a.png" alt="" />
     <img class="left_inf3" src="../../../static/img/fengye_b.png" alt="" />
     
     <div class="hel_f">
     	  <div class="hel_f_c">
     	  	
     	  	  <div class="hel_f_c_top">
     	  	  	<div @click="hel_click(0)" class="hel_f_c_top_c" :class="{hel_tab:hel_tab_sw==0}">上传视频</div>
     	  	  	<div @click="hel_click(1)" class="hel_f_c_top_c" :class="{hel_tab:hel_tab_sw==1}">已上传视频</div>
     	  	  </div>
     	  	 
     	  	 <!--上传视频组件-->
     	  	  <div v-if="hel_tab_sw==0">
     	  	  	 <div class="git_video_box">
     	  	  	 	   <p class="video_p">上传视频</p>
     	  	  	 	   <div class="video_img">
     	  	  	 	   	 <div @click="video_show=true" v-show="bofang_sw" class="bofang"><img style="width:50%;height:50%;" src="../../../static/img/upimg/bofang.png"/></div>
     	  	  	 	   	 <img :src="video_img_url" alt="" />
     	  	  	 	     <input class="inp_video" type="file" accept="video/avi,video/mp4,video/flv,video/3gp,video/swf"  @change="onFileChange" style="">
     	  	  	 	   </div>
     	  	  	 	   <div v-show="bofang_sw" @click="del_video" class="video_san">删除视频</div>
     	  	  	 	<!--播放视频组件------------------------------------------------> 
     	  	  	 	 <mu-fade-transition>
     	  	  	 	  <div @click="video_show=false" v-show="video_show" style="width:100%;height:100%;position:fixed;background:rgba(0,0,0,.5);z-index:300;top: 0;left: 0;">
     	  	  	 	  	 <mu-slide-top-transition>
                         <video @click.stop class="video" v-show="video_show" ref="video" controls="controls" webkit-playsinline='true' playsinline='true'></video>
                    </mu-slide-top-transition>   
     	  	  	 	  </div>
                  </mu-fade-transition>  
                <!--------------------------------------------------------->  
     	  	  	 </div>
     	  	  	 
     	  	  	 <div class="xiao_qu_box">
     	  	  	 	    <p class="video_p" style="margin: 0;">选择赛区</p>
     	  	  	 	    <div class="xiao_qu_box_box">
     	  	  	 	    	   <div @click="show1=true" class="xiao_qu_box_box_c"><p>{{saiqu}}</p><img src="../../../static/img/upimg/saiqu.png"/></div>
     	  	  	 	    	   <div @click="show2=true" class="xiao_qu_box_box_c"><p>{{xiaoqu}}</p><img src="../../../static/img/upimg/saiqu.png"/></div>
     	  	  	 	    </div>
     	  	  	 </div>
     	  	  	 
     	  	  	<!--上传封面图--> 
     	  	  	<div class="git_video_box" style="margin-top:0.42rem;"> 
     	  	  	   <p class="video_p">封面图</p> 
     	  	  	   <div style="margin-left:0.403333rem;" class="video_img">
     	  	  	 	   	<img @click="img_box" :src="img_file" alt="" />
     	  	  	 	   	<van-uploader v-show='inp_show' class="inp_video" :after-read="onRead"></van-uploader>
     	  	  	 	   	<img @click="del_img" id="x_s" v-show="inp_show==false" src="../../../static/img/upimg/x.png" alt="" />
     	  	  	 	 </div>
     	  	  	 </div> 
     	  	  	 
     	  	  	 <!--标题-->
     	  	  	 <div class="title">
     	  	  	 	   <p class="video_p" style="margin: 0;">视频标题</p>  
     	  	  	 	   <input @blur="to_top" v-model="inp_val" type="text" id="inp" placeholder="起个好玩的名字吧～" />
     	  	  	 </div>
     	  	  	 
     	  	  	 <div class="title_val">
     	  	  	 	  <p class="video_p" style="margin: 0;">视频标题</p>
     	  	  	 	  <div class="text_box">
     	  	  	 	  	<textarea @blur="to_top" v-model="text_val" maxlength="300" class="texta" placeholder="介绍下你的视频吧，可以为你的视频吸引人气哦～"></textarea>
     	  	  	 	  	<p>{{text_val.length}}/300</p>
     	  	  	 	  </div>
     	  	  	 </div>
     	  	  	 
     	  	  	 <div class="dal_btn">
     	  	  	 	   <div @click="git_home" class="quxiao">取消上传</div><div @click="que_click" class="quxiaos_s">确认上传</div>
     	  	  	 </div>
     	  	  	 
     	  	  </div> 
     	  	  
     	  	  <div v-else>
     	  	  	
     	  	  	 <div class="video_tab_box" v-for="i in 5">
     	  	  	 	  <p class="video_ps">上传日期：2019-03-08  22:21:32</p>
     	  	  	 	  <div class="video_box">
     	  	  	 	  	  <div @click="go_vdieo" class="video_img_box">
     	  	  	 	  	  	<img id="video_img_box_img2" src="../../../static/img/upimg/bofanganniu.png" alt="" />
     	  	  	 	  	  	<img id="video_img_box_img1" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1800442878,3200333987&fm=27&gp=0.jpg" alt="" />
     	  	  	 	  	  </div>
     	  	  	 	  	  <div class="video_p_box">
     	  	  	 	  	  	  <p class="name_p">王小五</p><div class="name_hao">23441号</div>
     	  	  	 	  	  	  <p class="text_p">剑桥郡外国语言学校</p>
     	  	  	 	  	  	  <div class="piao_shu"><img src="../../../static/img/upimg/piaoshu.png"/>
     	  	  	 	  	  	     <p>83485票</p>
     	  	  	 	  	  	  </div>
     	  	  	 	  	  </div>
     	  	  	 	  	  <div class="video_btn_box">
     	  	  	 	  	  	  <div style="background:#FF6F7A;margin-bottom: 0.426666rem;">投票(+1)</div>
     	  	  	 	  	  	  <div style="background:#4DB1E5;">大力支持(+10)</div>
     	  	  	 	  	  </div> 
     	  	  	 	  </div>
     	  	  	 </div>
     	  	  </div>
     	  </div>
     </div>
        
    <van-popup v-model="show1" position="bottom" :overlay="true">
        <van-picker
            show-toolbar
            title="请选择赛区"
            :columns="columns"
            @cancel="show1=false"
            @confirm="onConfirm"
          />
    </van-popup>
       
    <van-popup v-model="show2" position="bottom" :overlay="true">
        <van-picker
            show-toolbar
            title="请选择校区"
            :columns="columns_s"
            @cancel="show2=false"
            @confirm="onConfirm_s"
          />
    </van-popup>   
    
<!--绑定手机号弹框----------------------------------------------------------------------------------------------------------------->   
     <mu-fade-transition>
          <div @touchmove.prevent class="iphone_s" v-show="show4">
          	 <div class="iphone_s_box">
          	 	   <p class="iphone_s_box_p">释放孩子们独特的魅力吧～</p><img class="iphone_s_box_img" src="../../../static/img/upimg/haizi.png" alt="" />
          	 	   <input v-model="names" @blur="to_top" class="iphone_s_box_inp" type="text" placeholder="请填写您的姓名" />
          	 	   <input v-model="iphones" style="margin-top:0.266666rem;" @blur="to_top" class="iphone_s_box_inp" type="number" pattern="\d*" name="number" placeholder="请输入手机号" />
          	     <div class="iphone_s_box_p_box"><img src="../../../static/img/upimg/tishi.png"/><p>首次上传视频需完善个人信息</p></div>
          	     <div class="btn_boxs">
          	     	   <div @click="show4=false" style="background:rgba(255,223,99,1);float:left;color:#666666;" class="btn_boxsbtn">考虑一下</div>
          	     	   <div @click="iphone_bao_cun" style="background:#4DB1E5;float: right;" class="btn_boxsbtn">保存</div>
          	     </div>
          	 </div>
          </div>
    </mu-fade-transition>
    
    <mu-fade-transition>
          <div @touchmove.prevent class="iphone_ss" v-show="show5">
          	   <mu-scale-transition>
                  <div class="ok_box" v-show="show5">
                  	 <img class="ok_box_img1" src="../../../static/img/upimg/erweima.png" alt="" />
                  	 <div class="ppp">恭喜您参赛成功，您的参赛编号是<a>231</a>号</div>
                  	 <div @click="git_home" class="ok_box_btn">我知道了</div>
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
import { ImagePreview } from 'vant';
export default {
  
  data(){
    return {
    	show5:false,
    	
    	names:'',
    	iphones:'',
    	show4:true,//绑定手机号弹框状态
    	
    	 class_show:true,
    	
    	 text_val:'',
    	 inp_val:'',
    	
    	 inp_show:true,
    	 img_file:'static/img/upimg/tupian.png',
    	 video_img_file:'',
    	  
    	 xiaoqu:'请选择校区',
    	 columns_s: ['雅居乐', '剑桥郡', '金山谷'],
    	 show2:false,
    	
    	 saiqu:'请选择赛区',
    	 columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    	 show1:false,
    	
    	
    	 hel_tab_sw:0,
    	 video_img_url:'static/img/upimg/shangchaunship.png',
    	 video_show:false,
    	 bofang_sw:false,
    	 video_file:'',//上视频之后视频文件存储
    	 
    	 
    }
  },
  methods:{
  	go_vdieo(){
  		 router.push({
  	   	  path:'./Video_details',
  	   });
  	   window.location.reload()
  	},
  	
  	git_home(){
  		
  		 router.push({
  	   	 path:'./home',
  	   });
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
  	que_click(){//确认上传
  		
  		this.show5 = true
//		 if(this.video_file!=''&&this.saiqu!='请选择赛区'&&this.xiaoqu!='请选择校区'&&this.video_img_file!=''&&this.inp_val!=''&&this.text_val!=''){
//		 	   
//		 	   
//		 }else{
//		 	  this.$toast({
//      	      message:'请先完善信息',
//      	      duration:1000
//      	  });
//		 }
  		 
  		 
  	},
  	
  	
  	hel_click(i){
  		this.hel_tab_sw=i;
  		
  		this.class_show = i==1?false:true;
  		
  		
  	},
  	img_box(){//放大查看图片
  		 var a = [];
  		 a.push(this.video_img_file.content);
  		 ImagePreview(a);
  	},
  	
  	del_img(){//删除图片
  		 this.video_img_file = '';
  		 this.img_file = 'static/img/upimg/tupian.png';
  		 this.inp_show = true;
  	},
  	
  	onRead(file){//确定选择图片
  		 console.log(file);
  		 this.video_img_file = file;
  		 this.img_file = file.content;
  		 this.inp_show = false;
  	},
  	
  	onConfirm_s(value, index) {
      this.xiaoqu = value;
      this.show2 = false
    },
  	
  	onConfirm(value, index) {
      this.saiqu = value;
      this.show1 = false
    },
  	
  	
  	del_video(){//删除视频
  		 this.video_file = '';
  		 this.bofang_sw = false;
  		 this.$toast.success({message:'删除视频',time:'400'});
  		 this.$refs.video.src = '';
  	},
  	onFileChange(e){//穿入视频
  		 var files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        //视频上传
        console.log(files)
        let _this = this;
        //视频预览
        var reader = new FileReader();

        this.file = files[0];
        this.video_file = files[0];
        reader.onload = function(){
            _this.$refs.video.src = this.result;
        };

        reader.readAsDataURL(this.file);

        this.bofang_sw = true;
        
        this.$toast.success({message:'上传视频成功',time:'700'})
  		   	
  	},
  	
  	
  },
  mounted(){
  	  store.state.btn_show = true;
  	  store.state.bottom_1 = false;store.state.bottom_2 = false;store.state.bottom_3 = true;
  	  window.scrollTo(0,0);  
//	  window.setTimeout(()=>{
//	  	document.getElementById('hello').style.minHeight = document.documentElement.clientHeight+'px';
//	  },0)
	    
  }
}
</script>

<style scoped>
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
	.ok_box_img1{
		 width: 2.613333rem;
		 height: 2.613333rem;
		 margin:0 3.04rem;
	}
	.ppp{
		 width: 4.106666rem;
		 height: 1.333333rem;
		 font-size: 0.426666rem;
		 color: #666666;
		 margin: auto;
		 text-align: center;
		 margin-top: 0.4rem;
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
		 width: 2.506666rem;
		 height: 2.96rem;
		 position: absolute;
		 top: -0.68rem;
		 right: 0.586666rem;
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
	.iphone_ss{
		 width: 100%;
		 height: 100%;
		 position: fixed;
		 top: 0;
		 left: 0;
		 z-index: 500;
		 background: rgba(0,0,0,.5);
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
	.left_inf3{
		 width:3.88rem;
		 height:4.133333rem;
		 position: absolute;
		 bottom:0;
		 right: 0;
		 z-index: 0;
	}
	.left_inf2{
		 width:1.773333rem;
		 height:3.613333rem;
		 position: absolute;
		 top:7.506666rem;
		 left: 0;
		 z-index: 0;
	}
	.left_inf{
		 width: 1.76rem;
		 height: 3.053333rem;
		 position: absolute;
		 top: 3.52rem;
		 right: 0;
		 z-index: 0;
	}
	.video_btn_box div{
		 width: 100%;
		 height: 0.853333rem;
		 line-height: 0.853333rem;
		 color: white;
		 text-align: center;
		 font-size: 0.373333rem;
		 border-radius:0.133333rem;
		 
	}
	.video_btn_box{
		 width: 2.426666rem;
		 height: 100%;
		 float: right;
		 
	}
	
	.piao_shu p{
		 font-size: 0.293333rem;
		 color: #FF6F7A;
		 float: left;
		 margin-left: 0.16rem;
		 line-height: 0.373333rem;
	}
	.piao_shu img{
		width: 0.373333rem;
		height: 0.373333rem;
		float: left;
	}
	.piao_shu{
		 width: 100%;
		 height: 0.373333rem;
		 margin-top: 0.4rem;
		 float: left;
	}
	.text_p{
		 font-size: 0.293333rem;
		 color: #999999;
		 width: 100%;
		 float: left;
		 margin-top: 0.133333rem;
		 overflow: hidden;
      text-overflow:ellipsis;
       white-space: nowrap;
	}
	.name_hao{
		 width:1.386666rem;
height:0.48rem;
background:rgba(255,111,122,1);
opacity:1;
border-radius:0.32rem;
float: left;
margin-left: 0.266666rem;
font-size: 0.293333rem;
color: white;
text-align: center;
margin-top: 0.066666rem;
line-height: 0.48rem;
	}
	.name_p{
		font-size: 0.426666rem;
		float: left;
	}
	.video_p_box{
		width: 3.746666rem;
		height: 100%;
		float: left;
		margin-left: 0.4rem;
	}
	#video_img_box_img2{
		 width: 0.6rem;
		 height: 0.6rem;
		 position: absolute;
		 top: 0.76rem;
		 left: 0.76rem;
	}
	#video_img_box_img1{
		 width: 100%;
		 height: 100%;
	}
	.video_img_box{
		 width: 2.133333rem;
		 height: 100%;
		 position: relative;
		 float:left;
		 
	}
	.video_box{
		 width: 100%;
		 height: 2.133333rem;
		 margin-top: 0.266666rem;
		 /*background: #42B983;*/
	}
	
	.video_ps{
		 font-size: 0.293333rem;
		 color: #BABABA;
	}
	
	.video_tab_box{
		 width: 8.706666rem;
		 height: 3.24rem;
		 margin: 0.4rem auto;
		 border-bottom:0.053333rem solid #D6F1FF;
	}
	.hellos{
		 position: absolute;
		 top: 0;
		 left: 0;
		 height: 100%;
	}
	
	
	.quxiaos_s{
		 width: 2.506666rem;
		 height: 0.96rem;
		 float: right;
		 background: #4DB1E5;
		 color: white;
		 font-size: 0.426666rem;
		 line-height: 0.96rem;
		 text-align: center;
		 border-radius:0.133333rem;
	}
	.quxiao{
		 width: 2.506666rem;
		 height: 0.96rem;
		 float: left;
		 background: #BABABA;
		 color: white;
		 font-size: 0.426666rem;
		 line-height: 0.96rem;
		 text-align: center;
		 border-radius:0.133333rem;
	}
	
	.dal_btn{
		 width: 5.826666rem;
		 height: 0.96rem;
		 margin: 0 auto;
		 margin-top:0.4rem;
	}
	
	.text_box p{
		font-size: 0.293333rem;
		color: #BABABA;
		position: absolute;
		right: 0.1506666rem;
		bottom: 0.03333rem;
	}
	.texta{
		 width: 5.12rem;
		 height:1.6rem;
		  border: none;
		  background:#F0F0F0;
	}
	
	.text_box{
		 width: 5.453333rem;
		 height: 100%;
		 float: right;
		 border-radius:0.133333rem;
		 font-size:0.373333rem;
		 /*padding-left:0.266666rem;*/
		 background:#F0F0F0;
		 position: relative;
		 padding: 0.15rem 0.1rem 0 0.15rem;
		
	}
	.title_val{
		width: 7.333333rem;
		height: 2.093333rem;
		margin: 0.32rem auto;
		
	}
	#inp{
		 height: 100%;
		 width: 5.453333rem;
		 float: right;border: none;
		 background:#F0F0F0;
		 border-radius:0.133333rem;
		 font-size:0.373333rem;
		 padding-left:0.266666rem;
		 line-height:1.013333rem;
	}
	.title{
		 width: 7.333333rem;
		 height: 1.013333rem;
		 margin: 0 auto;
	}
	#x_s{
		 width:0.4rem;
		 height:0.4rem;
		 position: absolute;
		 top: -0.2rem;
		 right: -0.2rem;
	}
	.xiao_qu_box_box_c p{
		 width: 4.2rem;
		 float: left;
		 margin-left: 0.266666rem;
		 /*background: red;*/
		 line-height: 0.853333rem;
		 font-size: 0.333333rem;
		 color: #BABABA;
	}
	.xiao_qu_box_box_c img{
		width: 0.306666rem;
		height: 0.173333rem;
		float: right;
		margin-top: 0.36666rem;
		margin-right: 0.346666rem;
	}
	.xiao_qu_box_box_c{
		  width: 100%;
		  height:0.853333rem;
		  background: #EAEAEA;
		  border-radius:0.133333rem;
      margin-bottom: 0.306666rem;
	}
	.xiao_qu_box_box{
		 width: 5.453333rem;
		 height: 100%;
		 float: right;
	}
	.xiao_qu_box{
		width: 7.333333rem;
		height: 2.013333rem;
		margin: 0 auto;
	}
	.video_san{
		   padding: 0.133333rem 0.366666rem;
		   float: left;
		   font-size: 0.373333rem;
		   color:#BABABA;
		   background:greenyellow;
		   border-radius:0.133333rem;
		   margin-left: 0.4rem;
		   margin-top: 0.766666rem;
	}
	.video{
		width:100%;
		height: 6.333333rem;
		margin: 4.666666rem auto;
		background: black;
	}
	.bofang img{
		margin-top:0.433333rem;
	}
	.bofang{
		width: 100%;
		height: 100%;
		background:rgba(0,0,0,.5);
		position: absolute;
		top: 0;
		left: 0;
		z-index:200;
		text-align: center;
		line-height: 1.6rem;
	}
	.inp_video{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		BACKGROUND-COLOR:transparent;
		border: none;
		opacity:0
	}
	.video_img{
		 width: 1.6rem;
		 height: 1.6rem;
		 float:left;
		 position: relative;
	}
	.git_video_box img{
		 width: 1.6rem;
		 height: 1.6rem;
	}
	.video_p{
		 font-size: 0.373333rem;
		 color: #FF6F7A;
		 float: left;
		 margin-right: 0.4rem;
	}
	.git_video_box{
		width: 7.333333rem;
		height: 1.6rem;
		margin: 0.4rem auto 0.32rem auto;
		
	}
	.hel_tab{
		border-bottom:0.053333rem solid #4DB1E5;
		color: #4DB1E5;
	}
	
	.hel_f_c_top_c{
		
		 font-size: 0.426666rem;
		 text-align: center;
		 height: 100%;
		 line-height: 1.2rem;
		 width: 50%;
		 float: left;
		 
	}
	.hel_f_c_top{
		width: 7.333333rem;
		height: 1.2rem;
		margin: 0 auto;
		/*background:#D6F1FF;*/
		color: #BABABA;
	}
	.hel_f_c{
		  width: 9.36rem;
		  /*height: 8rem;*/
		  background: white;
		  border-radius:0.266666rem;
		  margin-left: -0.4rem;
		  padding-bottom: 0.4rem;
	}
	  .hel_f{
	  	width: 8.56rem;
	  	margin: 0 auto;
	  	padding: 0.213333rem 0;
	  	background: #FFADB4;
	  	border-radius:0.266666rem;
	  	position: relative;
	  	z-index:1;
	  }
	  
</style>
