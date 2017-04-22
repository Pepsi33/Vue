<template>
	<el-row class="container">
		<v-header :user="user"></v-header>
		<v-sidebar></v-sidebar>
		<v-content></v-content>
	</el-row>
</template>

<script>
	import vHeader from './Header.vue';
	import vSidebar from './Sidebar.vue';
	import vContent from './Content.vue';
	export default {
		data(){
			return {
				user:{
					sysUserName: '',
					sysUserAvatar: ''
				}
			}
		},
		components:{
            vHeader,
            vSidebar,
            vContent
        },
        mounted() {
			var user = sessionStorage.getItem('user');
			if (user) {
				user = JSON.parse(user);
				this.user.sysUserName = user.name || '';
				this.user.sysUserAvatar = user.avatar || '';
			}
		}
	}
</script>


<style scoped lang="scss">
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.main {
			background: #fff;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
		}
	}
</style>