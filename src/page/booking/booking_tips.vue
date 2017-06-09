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
							{{lists.equipmentName}}
						</h3>
						<ul class="list">
							<li class="h-title">
								<div class="box-1">
									<div class="txt-1"> 检查项目  </div>
									<div class="txt-2"> 项目值 </div>
									<div class="txt-3">结果</div>
										
								</div>			
							</li>
							
							<li v-for="(item,index) in lists.checkResult">
								<div class="box-1">
									<div class="txt-1"> {{index}} {{item.item}}   </div>
									<div class="txt-2"> {{item.value}} </div>
									<div class="txt-3">
										<i class="icon pass-icon" v-if="item.check"></i>
										<i class="icon unpass-icon" v-else></i>
						 
									</div>
										
								</div>
								<div class="box-2" v-if="!item.check">
									<dl v-for="(items,indexs) in item.sub">
										<dt>{{indexs}} {{items.item}}</dt>
										<dd>{{items.value}}</dd>
									</dl>
									
								</div>					
							</li>
						</ul>
					</div>	
					<!-- <div class="p2th">
						<button class="ui-button ui-button-block ui-button-100per ui-button-bg-63c ui-button-size-h130"><span class="ui-button-content" @click="start_booking()">开始预约</span></button>
					</div> -->
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
		var self = this;
		self.booking_tips();
	},
	methods: {
		booking_tips(key){
			var self = this;
			self.$http({
			    method: 'POST',
			    url: this.serverUrl + '/bookingCheck',
			    headers: {
			        "X-AUTH-TOKEN": utility.storage.get("token")
			    },
			    emulateJSON: true,
			    params: {
			        equipmentId: self.$route.params.id
			    }
			}).then(function(data) {
				
				var res = data.data;
				console.log(res);
				if (res.errcode==0) {
					self.lists=res.data;

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
  @import "../../style/page/booking/booking_tips";
</style>