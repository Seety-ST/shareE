<template>
	<div>
		<!-- 公共头部start -->
		<g-header goBack="true" headTitle="预约记录详情"></g-header>
		<!-- 公共头部end -->

		<!-- 主体内容start -->
		<div class="mine-booking-detail-page has_header_pt has_footer_pb">
			<div class="item-wrap">
					<div class="p1th">
						<div class="item-1">
							<ul class="list">
								<li>
									<h3 class="title">
										1.设备概要
									</h3>
									<div class="box-1">
										<dl>
											<dt>
												设备名称 
											</dt>
											<dd>12英寸管式炉2   </dd>
										</dl>
										<dl>
											<dt>
												型号  
											</dt>
											<dd> </dd>
										</dl>
										<dl>
											<dt>
												放置地点  
											</dt>
											<dd> 南校区显材楼二楼东超净室</dd>
										</dl>
									</div>
								</li>
								<li>
									<h3 class="title">
										1.设备概要
									</h3>
									<div class="box-1">
										<dl>
											<dt>
												设备名称 
											</dt>
											<dd>12英寸管式炉2   </dd>
										</dl>
										<dl>
											<dt>
												型号  
											</dt>
											<dd> </dd>
										</dl>
										<dl>
											<dt>
												放置地点  
											</dt>
											<dd> 南校区显材楼二楼东超净室</dd>
										</dl>
									</div>
								</li>
								<li>
									<h3 class="title">
										1.设备概要
									</h3>
									<div class="box-1">
										<dl>
											<dt>
												设备名称 
											</dt>
											<dd>12英寸管式炉2   </dd>
										</dl>
										<dl>
											<dt>
												型号  
											</dt>
											<dd> </dd>
										</dl>
										<dl>
											<dt>
												放置地点  
											</dt>
											<dd> 南校区显材楼二楼东超净室</dd>
										</dl>
									</div>
								</li>
							</ul>
							
							
						</div>
						
					</div>
					<div class="p2th">
						<button class="ui-button ui-button-block ui-button-100per ui-button-bg-73a ui-button-size-h130"><span class="ui-button-content">提交预约</span></button>
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
			booking_success_pop : false,
			booking_success_modal : false,

			
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
  @import "../../style/page/mine/mine_booking_detail";
</style>