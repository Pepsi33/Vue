<template>
  <div>
    <h1>vuex 测试</h1>
    <p>author:{{ author }}</p>
    <el-input
	  placeholder="输入author名"
	  icon="search"
	  v-model="text"
	  :on-icon-click="handleIconClick">
	</el-input>
	<p>{{ text }}</p>
  </div>
</template>

<script>
  	
	export default {
		data(){
			return {
				text:""
			}
		},
		computed: {
	      author () {
	        return this.$store.state.author
	      }
	    },
	    methods:{
	    	handleIconClick(){
	    		//this.$store.state.author = this.text
	    		//this.$store.commit("NEWAUTHOR",this.text);
	    		this.$store.dispatch("setAuthor",this.text);
	    	}
	    }
	}

</script>