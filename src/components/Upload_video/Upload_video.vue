<template>
  <!--上传视频-->
  <div id="hello" style="width:100%;background:#F8515E;padding:0.266666rem 0;">
     <div class="hel_f">
     	  <div class="hel_f_c">
     	  	
     	  	  <div class="hel_f_c_top">
     	  	  	<div @click="hel_tab_sw=0" class="hel_f_c_top_c" :class="{hel_tab:hel_tab_sw==0}">上传视频</div>
     	  	  	<div @click="hel_tab_sw=1" class="hel_f_c_top_c" :class="{hel_tab:hel_tab_sw==1}">已上传视频</div>
     	  	  </div>
     	  	 
     	  	 <!--上传视频组件-->
     	  	  <div>
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
     	  	  	 	   <input type="text" id="inp" placeholder="起个好玩的名字吧～" />
     	  	  	 </div>
     	  	  	 
     	  	  	 <div class="title_val">
     	  	  	 	  <p class="video_p" style="margin: 0;">视频标题</p>
     	  	  	 	  <div class="text_box">
     	  	  	 	  	<textarea v-model="text_val" maxlength="300" class="texta" placeholder="介绍下你的视频吧，可以为你的视频吸引人气哦～"></textarea>
     	  	  	 	  	<p>{{text_val.length}}/300</p>
     	  	  	 	  </div>
     	  	  	 </div>
     	  	  	 
     	  	  	 <div class="dal_btn">
     	  	  	 	   <div class="quxiao">取消上传</div><div class="quxiaos_s">确认上传</div>
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
       
  </div>
</template>

<script>
 
import store from '../../vuex/store.js'
import router from '../../router/index.js'
import { ImagePreview } from 'vant';
export default {
  
  data(){
    return {
    	 text_val:'',
    	
    	
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
  	  
//	  window.setTimeout(()=>{
//	  	document.getElementById('hello').style.height = document.documentElement.clientHeight+'px';
//	  },0)
	    
  }
}
</script>

<style scoped>
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
	  }
	  
</style>
