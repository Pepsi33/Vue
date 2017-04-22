<template>
	<header id="header">
		<div class="logo">后台管理系统</div>
		<div class="userinfo">
			<el-dropdown trigger="click">
				<span class="el-dropdown-link userinfo-inner">
					<img :src="user.sysUserAvatar" />
					{{user.sysUserName}} 
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>我的消息</el-dropdown-item>
					<el-dropdown-item>设置</el-dropdown-item>
					<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</header><!-- /header -->
</template>

<script>
	export default {
		// data() {
		// 	return {
		// 		sysUserName: '',
		// 		sysUserAvatar: ''
		// 	}
		// },
		props:['user'],
		methods: {
			//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					_this.$router.push('/login');
				}).catch(() => {

				});
			}
		}/*,
		mounted() {
			var user = sessionStorage.getItem('user');
			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				this.sysUserAvatar = user.avatar || '';
			}
		}*/
	}
</script>

<style scoped lang="scss">
	#header {
		position:relative;
		height: 60px;
		line-height: 60px;
		box-sizing: border-box;
		background: #1F2D3D;
		color: #c0ccda;
		width:100%;
		.logo {
			float: left;
	        width:250px;
	        text-align: center;
	        font-size: 24px;
	        color: #fff;
		}
		.userinfo {
			float: right;
	        padding-right: 50px;
	        font-size: 16px;
	        color: #fff;
			.userinfo-inner {
				position: relative;
		        display: inline-block;
		        padding-left: 50px;
		        color: #fff;
		        cursor: pointer;
		        vertical-align: middle;
				img {
					width: 40px;
					height: 40px;
					border-radius: 20px;
					position:absolute;
					left: 0px;top: 10px;
				}
			}
		}
		
	}
</style>