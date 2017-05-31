<template>
	<div>
		<!-- 公共头部start -->
		<!-- <g-header goBack="true" headTitle="设备详情"></g-header> -->
		<!-- 公共头部end -->

		<!-- 主体内容start -->
		<div class="mine-index-page has_footer_pb">
			<div class="item-wrap">
					<div class="p1th">
						<h3 class="title tc">个人信息</h3>
						<div class="avator-item tc">
							<router-link :to="{name:'mine_message'}">
								<i class="avator-icon">

								</i>
							</router-link>
						</div>
						<div class="message-txt tc">
							<p class="txt">中山医科大学</p>
							<p class="txt">liuxiaowu@zhongshan.com</p>
						</div>	
					</div>	
					<div class="p2th">
						<h3 class="title ui-border-b">当前第三方账号信息</h3>
						<div class="user-info-item color-333 ui-border-b">
							<div class="box-1">微信号</div>
							<div class="box-2">xiaowu-liu</div>
						</div>
					</div>	
					<div class="p3th">
						<ul class="list">
							<router-link :to="{name:'mine_booking_list'}" tag="li" class="ui-border-t">
							
								<i class="icon booking-icon"></i>
								<div class="box-1"><div class="txt">预约记录</div></div>
								<i class="arrow-icon"></i>
							</router-link>
							<router-link :to="{name:'mine_use_list'}" tag="li" class="ui-border-t">
								<i class="icon use-icon"></i>
								<div class="box-1"><div class="txt">使用记录</div></div>
								<i class="arrow-icon"></i>
							</router-link>
							<router-link :to="{name:'mine_apply_list'}" tag="li" class="ui-border-t">
								<i class="icon apply-icon"></i>
								<div class="box-1"><div class="txt">申请记录</div></div>
								<i class="arrow-icon"></i>
							</router-link>
							<router-link :to="{name:'change_school'}" tag="li" class="ui-border-t">
								<i class="icon change-icon"></i>
								<div class="box-1"><div class="txt">切换学校</div></div>
								<i class="arrow-icon"></i>
							</router-link>
						</ul>
					</div>
					<div class="p4th">
						<button class="ui-button ui-button-block ui-button-100per ui-button-bg-ed5 ui-button-size-h130"><span class="ui-button-content">退出</span></button>

					</div>			
			</div>
		</div>	
		<!-- 主体内容end -->
		
		<!-- 公共底部start -->
		<g-footer current="mine"></g-footer>
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
  @import "../../style/page/mine/index";
</style>