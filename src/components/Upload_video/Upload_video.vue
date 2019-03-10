<template>
  <!--规则-->
  <div id="hello" style="width:100%;background:yellowgreen;height:6.666666rem;">
       
         
       

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
  	  store.state.bottom_1 = false;store.state.bottom_2 = false;store.state.bottom_3 = true;
	  
  }
}
</script>

<style scoped>
	
</style>
