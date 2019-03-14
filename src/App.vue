<template>
  <div id="app"  >
  	
  
     <router-view class="transitionBody"></router-view>
  
   
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
  		 
  	}
  },
  
  
  
 methods:{
 	  btn_c1(){
 	  	 router.push({
  	   	 path:'./home',
  	   });
  	   
 	  },
 	  
 },
 mounted(){
 	 
 }
}
</script>

<style scoped="scoped">
	.hello{
		  /*padding-bottom:1.306666rem;*/
		  
	}
	
	.font_color{
		 color: #FF002D;
	}
	.font_color_s{
		 color: #BABABA;
	}
	.btn_box{
		 width: 0.64rem;
		 height: 100%;
		 float: left;
		 text-align: center;
	}
	.btn_box img{
		 width: 0.64rem;
		 height: 0.64rem;
		 margin-top:0.1rem;
	}
	.btn_box p{
		 font-size:0.266666rem;
		 /*color: #BABABA;*/
	}
	
	#app {
		 /*padding-bottom:1.306666rem;*/
		 
	}
	
	.btn{
		 width: 100%;
		 height: 1.306666rem;
		 background: white;
		 position: fixed;
		 bottom: 0;
		 left: 0;
		 z-index: 200;
		 padding: 0 1.346666rem;
	}
	
 


</style>
