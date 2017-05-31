<template>
	<div>
		<!-- 公共头部start -->
		<g-header goBack="true" headTitle="预约时间"></g-header>
		<!-- 公共头部end -->

		<!-- 主体内容start -->
		<div class="booking-time-page has_header_pt has_footer_pb">
			<div class="item-wrap">
					<div class="p1th">
						<mt-swipe :auto="0">
						  <mt-swipe-item>
							<ul class="list clearfix">
								<li>
									<div class="txt-1 tc fb">
										21
									</div>
									<div class="txt-2 tc">
										星期一
									</div>
									
								</li>
								<li class="">
									<div class="txt-1 tc fb">
										21
									</div>
									<div class="txt-2 tc">
										星期一
									</div>
									
								</li>
								<li class="cur">
									<div class="txt-1 tc fb">
										21
									</div>
									<div class="txt-2 tc">
										星期一
									</div>
									
								</li>

								
								
							</ul>
							
						  </mt-swipe-item>
						  <mt-swipe-item>2</mt-swipe-item>
						  <mt-swipe-item>3</mt-swipe-item>
						</mt-swipe>
						
					</div>	
					<div class="p2th">
						<ul class="list">
							<li>
								<span class="time-txt">5月23日星期三 </span>
							</li>
							<li class="cur">
								<span class="time-txt">5月25日星期五 </span>
							</li>
							<li>
								<span class="time-txt">5月25日星期五 </span>
							</li>
						</ul>
					</div>
					<div class="p3th">
						<ul class="list">
							<li class="ui-border-t">
								8:00-8:30
							</li>
							<li class="ui-border-t">
								8:00-8:30
							</li>
							<li class="ui-border-t">
								8:00-8:30
							</li>

							<li class="ui-border-t cur">
								8:00-8:30
							</li>
							<li class="ui-border-t">
								8:00-8:30
							</li>
							<li class="ui-border-t">
								8:00-8:30
							</li>
							<li class="ui-border-t">
								8:00-8:30
							</li>
							<li class="ui-border-t">
								8:00-8:30
							</li>
							<li class="ui-border-t">
								8:00-8:30
							</li>
							<li class="ui-border-t">
								8:00-8:30
							</li>
						</ul>
					</div>		
					<div class="p4th">
						<button class="ui-button ui-button-block ui-button-100per ui-button-bg-73a ui-button-size-h130"><span class="ui-button-content">确定</span></button>
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

// 引入轮播组件
import { Swipe, SwipeItem } from 'mint-ui';





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
		'mt-swipe' : Swipe,
		'mt-swipe-item' : SwipeItem,
	}
}
</script>
<style lang="scss">  
  @import "../../style/page/booking/select_booking_time";
</style>