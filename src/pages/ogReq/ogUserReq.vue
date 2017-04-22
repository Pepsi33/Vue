<template>
	<section>
		<el-form :model="ruleForm" ref="ruleForm" label-width="110px" class="ruleForm">
			<el-row :gutter="0">
			  	<el-col :span="6">
			  		<el-form-item label="需求编号">
		    			<el-input v-model="ruleForm.reqNo"></el-input>
		  			</el-form-item>
		  		</el-col>
			  	<el-col :span="6">
					<el-form-item label="状态">
		    			<el-select v-model="ruleForm.reqStatus" multiple placeholder="请选择">
						    <el-option
						      	v-for="item in baseData.OG_USER_REQ_STATUS"
						      	:label="item.v"
						      	:value="item.i">
						    </el-option>
						  </el-select>
		  			</el-form-item>
			  	</el-col>
			  	<el-col :span="6">
			  		<el-form-item label="录入人">
		    			<el-input v-model="ruleForm.inputerName"></el-input>
		  			</el-form-item>
			  	</div></el-col>
			  	<el-col :span="6">
					<el-form-item label="责任人">
		    			<el-input v-model="ruleForm.personLiable"></el-input>
		  			</el-form-item>
			  	</el-col>
			</el-row>
		  	<el-row :gutter="0">
			  	<el-col :span="6">
					<el-form-item label="来源系统">
		    			<el-select v-model="ruleForm.inputSysId" multiple placeholder="请选择">
						    <el-option
						      v-for="item in baseData.SRC_SYS"
						      :label="item.v"
						      :value="item.i">
						    </el-option>
						  </el-select>
		  			</el-form-item>
			  	</el-col>
			  	<el-col :span="6">
					<el-form-item label="产品品类">
		    			<el-select v-model="ruleForm.productType" multiple placeholder="请选择">
						    <el-option
						      v-for="item in baseData.USER_PRD_CATG"
						      :label="item.v"
						      :value="item.i">
						    </el-option>
						  </el-select>
		  			</el-form-item>
			  	</el-col>
			  	<el-col :span="12">
					<el-form-item label="我要反馈的问题" :span="4">
					    <el-input type="textarea" v-model="ruleForm.reqDesc" :rows="1" size="large"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-form-item label="活动时间">
				    <el-col :span="6">
				      <el-date-picker type="date" placeholder="选择开始日期" v-model="ruleForm.startCreateTime" style="width: 100%;"></el-date-picker>
				    </el-col>
				    <el-col class="line" :span="1">-</el-col>
				    <el-col :span="6">
				      <el-date-picker type="date" placeholder="选择结束日期" v-model="ruleForm.endCreateTime" style="width: 100%;"></el-date-picker>
				    </el-col>
				</el-form-item>
			</el-row>
		</el-form>
	</section>	
</template>
<script>
	import { getBaseData } from '../../api/api';
	import NProgress from 'nprogress';
	
  	export default {
	    data() {
	      return {
	        ruleForm: {
                inputSysId:"",
                inputerName:"",
                personLiable:"",
                productType:"",
                reqDesc:"",
                reqNo:"",
                reqStatus:"",
                reqType:"1",
                saleTo:"",
                startCreateTime:"",
                endCreateTime:""
	        },
	        baseData:null
	      };
	    },
	    methods: {
	      	submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {
		            alert('submit!');
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
	      	},
	      	resetForm(formName) {
	        	this.$refs[formName].resetFields();
	      	},
	      	getBaseData:function(){
			  	NProgress.start();
				getBaseData().then((res) => {
					console.log(res.data)
					this.baseData = res.data.baseData;
					NProgress.done();
				});
	      	}
	    },
	    mounted(){
	    	this.getBaseData();
	    }
  	}
</script>

<style type="text/css" media="screen">
	.ruleForm{
		margin:20px;
	};
	.line{
		/* margin:0 10px; */
	}
</style>
