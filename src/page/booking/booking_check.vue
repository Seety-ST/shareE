<template>
	<div>
		<!-- 公共头部start -->
		<g-header goBack="true" headTitle="预约信息"></g-header>
		<!-- 公共头部end -->

		<!-- 主体内容start -->
		<div class="booking-check-page has_header_pt has_footer_pb">
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
							<div class="check-item">
								<label>
									<input type="checkbox" name="" value="" class="input-check has_checked">
									<span class="txt">是否遵守实验室的预约规则</span>
								</label>
							</div>	
							
						</div>
						
					</div>
					<div class="p2th">
						<button class="ui-button ui-button-block ui-button-100per ui-button-bg-73a ui-button-size-h130"@click="open_booking_check_pop()"><span class="ui-button-content">确定</span></button>
					</div>		
			</div>
			<mt-popup v-model="booking_success_pop" position="right" :modal="booking_success_modal" class>
				<div class="apply_success_pop">
					<div class="p1th">
						<div class="back-icon-item" @click="close_booking_check_pop()">
							<i class="icon back-icon"></i>
						</div>
						<h3 class="title-item tc">
							<span class="title">预约成功</span>
						</h3>
					</div>
					<div class="p2th">
						<div class="img-item">
							<img src="../../images/booking/booking-success.jpg">
						</div>
					</div>
					
				</div>
			</mt-popup>
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
import { Popup } from 'mint-ui';




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
		close_booking_check_pop(){
			var self = this;
			self.booking_success_pop = false;
		},
		open_booking_check_pop(){
			var self = this;
			self.booking_success_pop = true;
		}
	},
	components : {
		'g-header' : header,
		'g-footer' : footer,
		'mt-popup' : Popup,
	}
}
</script>
<style lang="scss">  
  @import "../../style/page/booking/booking_check";
</style>