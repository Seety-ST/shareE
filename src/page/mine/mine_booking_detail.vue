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
								
								<li >
									<h3 class="title">
										1.设备概要
									</h3>
									<div class="box-1">
										<dl>
											<dt>
												设备名称 
											</dt>
											<dd>{{lists.name}}  </dd>
										</dl>
										<dl>
											<dt>
												固定资产编号  
											</dt>
											<dd>{{lists.label}} </dd>
										</dl>
										<dl>
											<dt>
												型号  
											</dt>
											<dd> {{lists.model}}</dd>
										</dl>
										<dl>
											<dt>
												放置地点  
											</dt>
											<dd> {{lists.address}}</dd>
										</dl>
										<dl>
											<dt>
												收费方式  
											</dt>
											<dd> {{lists.charges}}</dd>
										</dl>
										<dl>
											<dt>
												价格  
											</dt>
											<dd> {{lists.price}}</dd>
										</dl>
									</div>
								</li>
								<li >
									<h3 class="title">
										2.预约时间
									</h3>
									<div class="box-1">
										<dl>
											<dt>
												开始时间  
											</dt>
											<dd>{{lists.start}}   </dd>
										</dl>
										<dl>
											<dt>
												结束时间   
											</dt>
											<dd> {{lists.end}}</dd>
										</dl>
										<dl>
											<dt>
												时长  
											</dt>
											<dd> {{lists.hours}}</dd>
										</dl>
										
									</div>
								</li>
								<li >
									<h3 class="title">
										3.预约信息
									</h3>
									<div class="box-1">
										<dl>
											<dt>
												申请日期
											</dt>
											<dd>{{lists.applyTime}}   </dd>
										</dl>
										<dl>
											<dt>
												付费方式  
											</dt>
											<dd> {{lists.paymentWay}}</dd>
										</dl>
										<dl>
											<dt>
												课题组名称   
											</dt>
											<dd> {{lists.subject}}</dd>
										</dl>
										<dl>
											<dt>
												导师姓名  
											</dt>
											<dd> {{lists.teacher}}</dd>
										</dl>
										<dl>
											<dt>
												使用性质
											</dt>
											<dd> {{lists.useNature}}</dd>
										</dl>
										<dl>
											<dt>
												联系电话 
											</dt>
											<dd> {{lists.mobile}}</dd>
										</dl>
										<dl>
											<dt>
												样品编号 
											</dt>
											<dd> {{lists.sampleNo}}</dd>
										</dl>
										<dl>
											<dt>
												样品数 
											</dt>
											<dd> {{lists.sampleCount}}</dd>
										</dl>
										<dl>
											<dt>
												项目名称 
											</dt>
											<dd> {{lists.project}}</dd>
										</dl>
										<dl>
											<dt>
												不可使用原因 
											</dt>
											<dd> {{lists.notAvaliable}}</dd>
										</dl>
									</div>
								</li>
							</ul>
							
							
						</div>
						
					</div>
					<div class="p2th" @click="submit_booking()">
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
		var self = this;
		self.getBookingInfo();
	},
	methods: {
		getBookingInfo(params){
			var self = this;
			var params = params || {} ;
			self.$http({
			    method: 'POST',
			    url: this.serverUrl + '/getBookingInfo',
			    headers: {
			        "X-AUTH-TOKEN": utility.storage.get("token")
			    },
			    emulateJSON: true,
			    params : {
			    	id : self.$route.params.id
			    }
			}).then(function(data) {
				
				var res = data.data;
				console.log(data);
				if (res.errcode==0) {
					self.lists=res.data;

				}
			}, function(error) {
			    //error
			})
		},
		submit_booking(){
			var self = this;
			var useNatureNo = "";
			if (self.useNature=="科研") {
				useNatureNo = 0;
			}
			else{
				useNatureNo = 1;
			}
			var params = {
			    "equipmentId": self.lists.id,
			    "subject": self.lists.subject,
			    "project": self.lists.project,
			    "sampleNo": self.lists.sampleNo,
			    "sampleCount": self.lists.sampleCount,
			    "useNature": useNatureNo,
			    "content": self.lists.content,
			    "times": [
			        {
			            "start": self.lists.start,
			            "end": self.lists.end
			        }
			    ]
			}
			self.$http({
			    method: 'POST',
			    url: this.serverUrl + '/booking',
			    headers: {
			        "X-AUTH-TOKEN": utility.storage.get("token")
			    },
			    emulateJSON: true,
			    params : params
			}).then(function(data) {
				
				var res = data.data;
				console.log(data);
				if (res.errcode==0) {
					

				}
			}, function(error) {
			    //error
			})
		}
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