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
						当前选择为中山大学shareE系统
					</h3>
					<div class="content">
						<div class="input-item user-name-item">
							<input type="text" name="" class="input-txt" placeholder="请输入ShareE账号">
						</div>
						<div class="input-item password-item">
							<input type="text" name="" class="input-txt" placeholder="请输入登录密码">
						</div>
						<div class="btn-item tc">
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
			
		}
	},

	created () {
		
	},
	methods: {
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