<template>
	<div>
		<!-- 公共头部start -->
		<g-header goBack="true" headTitle="用户登录"></g-header>
		<!-- 公共头部end -->

		<!-- 主体内容start -->
		<div class="login-page has_header_pt">
			<div class="item-wrap">
				<div class="p1th">
					<h3 class="title tc">
						当前选择为{{$route.params.name}}shareE系统
					</h3>
					<div class="content">
						<div class="input-item user-name-item">
							<input type="text" name="" class="input-txt" placeholder="请输入ShareE账号" v-model="account">
						</div>
						<div class="input-item password-item">
							<input type="password" name="" class="input-txt" placeholder="请输入登录密码" v-model="password">
						</div>
						<div class="btn-item tc" @click="unitLogin">
							<i class="icon">
							</i>
							<em class="txt">登录</em>
						</div>	
					</div>
				</div>		
			</div>
		</div>	
		<!-- 主体内容end -->
		
		<!-- 公共底部start -->
		<!-- <g-footer current="mine"></g-footer> -->
		<!-- 公共底部end -->
	</div>
	
</template>
<script>


// 引入公共头底部start
import header from '../../components/header.vue';
import footer from '../../components/footer.vue';
// 引入公共头底部end




export default {
	data() {
		return {
			lists:[],
			account : "",
			password : ""
			
		}
	},

	created () {
	},
	methods: {
		unitLogin(){
			var self = this;
			if (!self.account) {
				self.Toast('请输入ShareE账号');
				return;
			}
			if (!self.password) {
				self.Toast('请输入登录密码');
				return;
			}
			self.$http({
			    method: 'POST',
			    url: this.serverUrl + '/unitLogin',
			    headers: {
			        "X-AUTH-TOKEN": utility.storage.get("token")
			    },
			    emulateJSON: true,
			    params : {
			    	unitId : self.$route.params.id,
			    	account : self.account,
			    	password : self.password
			    }
			}).then(function(data) {
				
				var res = data.data;
				console.log(res);
				if (res.errcode==0) {
					self.lists=res.data;
					utility.storage.set("token",res.token);
					self.$router.push({ name: 'mine'});
				}
			}, function(error) {
			    //error
			})
		},
	},
	components : {
		'g-header' : header,
		'g-footer' : footer,
	}
}
</script>
<style lang="scss">  
  @import "../../style/page/mine/login";
</style>