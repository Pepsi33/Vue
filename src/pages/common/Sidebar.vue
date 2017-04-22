<template>
	<aside>
		<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect" theme="dark" unique-opened router>
			<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
				<el-submenu :index="index+''" v-if="!item.leaf">
					<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
					<el-menu-item v-for="child in item.children" :index="child.path" v-if="!child.hidden">	  			{{child.name}}
					</el-menu-item>
				</el-submenu>
				<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path">
					<i :class="item.iconCls"></i>
					{{item.children[0].name}}
				</el-menu-item>
			</template>
		</el-menu>
	</aside>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			handleopen() {
				//console.log('handleopen');
			},
			handleclose() {
				//console.log('handleclose');
			},
			handleselect: function (a, b) {
			}
		}
	}	
</script>

<style scoped lang="scss">
	aside {
		position: absolute;
		left: 0px;
		top:60px;
		width: 200px;
		height: 100%;
		background:#324157!important;
	}
</style>