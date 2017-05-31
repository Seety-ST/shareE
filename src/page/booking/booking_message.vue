<template>
	<div>
		<!-- 公共头部start -->
		<g-header goBack="true" headTitle="预约信息"></g-header>
		<!-- 公共头部end -->

		<!-- 主体内容start -->
		<div class="booking-message-page has_header_pt has_footer_pb">
			<div class="item-wrap">
					<div class="p1th">
						<ul class="list">
							<li>
								<div class="box-1">
									<i class="must-write-icon"></i>
									<em class="txt">课题组 </em>
								</div>
								<div class="box-2">
									<select class="class_one select ui-border">
										<option value ="volvo">课题一 </option>
									</select>
								</div>
							</li>
							<li>
								<div class="box-1">
									<i class="must-write-icon"></i>
									<em class="txt">  项目名称   </em>
								</div>
								<div class="box-2">
									<select class="class_one select ui-border">
										<option value ="volvo">    项目一 </option>
									</select>
								</div>
							</li>
							<li>
								<div class="box-1">
									<i class="must-write-icon"></i>
									<em class="txt">  样品编号   </em>
								</div>
								<div class="box-2">
									<input type="text" name="" class="input-txt">
								</div>
							</li>
							<li>
								<div class="box-1">
									<i class="must-write-icon"></i>
									<em class="txt">  样品数  </em>
								</div>
								<div class="box-2">
									<input type="text" name="" class="input-txt">
								</div>
							</li>
							<li>
								<div class="box-1">
									<i class="must-write-icon"></i>
									<em class="txt">  使用性质   </em>
								</div>
								<div class="box-2">
									<select class="class_one select ui-border">
										<option value ="volvo">    项目一 </option>
									</select>
								</div>
							</li>
							<li>
								<div class="box-1">
									<i class="must-write-icon"></i>
									<em class="txt">  实验内容  </em>
								</div>
								<div class="box-2">
									<input type="text" name="" class="input-txt">
								</div>
							</li>
						</ul>
					</div>
					<div class="p2th">
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
  @import "../../style/page/booking/booking_message";
</style>