<template>
	<div>
		<!-- 公共头部start -->
		<g-header goBack="true" headTitle="预约提示"></g-header>
		<!-- 公共头部end -->

		<!-- 主体内容start -->
		<div class="booking-tips-page has_header_pt has_footer_pb">
			<div class="item-wrap">
					<div class="p1th">
						<h3 class="title">
							【佰能陈鑫】预约石蜡切片机+摊片机
						</h3>
						<ul class="list">
							<li class="h-title">
								<div class="box-1">
									<div class="txt-1"> 检查项目  </div>
									<div class="txt-2"> 项目值 </div>
									<div class="txt-3">结果</div>
										
								</div>			
							</li>
							<li class="ui-border-b">
								<div class="box-1">
									<div class="txt-1"> 1，用户状态   </div>
									<div class="txt-2"> 审核通过 </div>
									<div class="txt-3">
										<i class="icon pass-icon"></i>
						 
									</div>
										
								</div>			
							</li>
							<li class="ui-border-b">
								<div class="box-1">
									<div class="txt-1"> 2，用户状态   </div>
									<div class="txt-2"> 审核通过 </div>
									<div class="txt-3">
										<i class="icon pass-icon"></i>
						 
									</div>
										
								</div>			
							</li>
							<li>
								<div class="box-1">
									<div class="txt-1"> 3，公告信息   </div>
									<div class="txt-2"> 1|2（未阅读） </div>
									<div class="txt-3">
										<i class="icon unpass-icon"></i>
						 
									</div>
										
								</div>
								<div class="box-2">
									<dl>
										<dt>1，AAA bbb</dt>
										<dd>未读</dd>
									</dl>
									<dl>
										<dt>1，AAA bbb</dt>
										<dd>未读</dd>
									</dl>
									<dl>
										<dt>1，AAA bbb</dt>
										<dd>未读</dd>
									</dl>
								</div>					
							</li>
						</ul>
					</div>	
					<div class="p2th">
						<button class="ui-button ui-button-block ui-button-100per ui-button-bg-63c ui-button-size-h130"><span class="ui-button-content" @click="start_booking()">开始预约</span></button>
					</div>
			</div>
		</div>	
		
		<!-- 主体内容end -->
	
		<!-- 公共底部start -->
		
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
			apply_device_pop : false,
			apply_device_modal : false,
			apply_success_pop : false,
			
		}
	},

	created () {
		
	},
	methods: {
		start_booking(){
			
		}
	},
	components : {
		'g-header' : header,
		'g-footer' : footer,
	}
}
</script>
<style lang="scss">  
  @import "../../style/page/booking/booking_tips";
</style>