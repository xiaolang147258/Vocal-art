<template>
  <!--规则-->
  <div id="hello" style="width:100%;background:blue;height:6.666666rem;">
       
         
       

  </div>
</template>

<script>

import store from '../../vuex/store.js'
import router from '../../router/index.js'
export default {
  
  data () {
    return {
    	
    }
  },
  methods:{
  	
  },
  mounted(){
  	  store.state.btn_show = true;
  	  store.state.bottom_1 = false;store.state.bottom_2 = true;store.state.bottom_3 = false;
//	  document.getElementById('hello').style.height = document.documentElement.clientHeight+'px';
  }
}
</script>

<style scoped>
	
</style>
