<template>
	<div>
		<!-- 公共头部start -->
		<g-header goBack="true" headTitle="设备详情"></g-header>
		<!-- 公共头部end -->

		<!-- 主体内容start -->
		<div class="booking-detail-page has_header_pt has_footer_pb">
			<div class="item-wrap">
					<div class="p1th">
						<div class="img-item">
							<img :src="lists.img">
						</div>
					</div>
					<div class="p2th">
						<div class="txt-item">
							<ul class="list">
								<li>
									<h3 class="title">
										基本信息
									</h3>
									<dl>
										<dt class="color-333">
											名称：
										</dt>
										<dd class="">{{lists.name}}</dd>
									</dl>
									<dl>
										<dt class="color-333">
											资产编号：
										</dt>
										<dd class="">{{lists.label}}</dd>
									</dl>
									<dl>
										<dt class="color-333">
											型号：
										</dt>
										<dd class="">{{lists.model}}</dd>
									</dl>
									<dl>
										<dt class="color-333">
											产地：
										</dt>
										<dd class="">{{lists.productionArea}}</dd>
									</dl>
									<dl>
										<dt class="color-333">
											出产日期：
										</dt>
										<dd class="">{{lists.productionDate}}</dd>
									</dl>
									<dl>
										<dt class="color-333">
											购买日期：
										</dt>
										<dd class="">{{lists.buyDate}}</dd>
									</dl>
									<dl>
										<dt class="color-333">
											所属单位：
										</dt>
										<dd class="">{{lists.unit}}</dd>
									</dl>
									<dl>
										<dt class="color-333">
											地点:
										</dt>
										<dd class="">{{lists.address}}</dd>
									</dl>
									<dl>
										<dt class="color-333">
											所属分类:
										</dt>
										<dd class="">{{lists.class}}</dd>
									</dl>
									<dl>
										<dt class="color-333">
											联系人:
										</dt>
										<dd class="">{{lists.admin}}</dd>
									</dl>
								</li>		
							</ul>
						</div>
					</div>
					<div class="p3th" @click="booking_btn">
						<button class="ui-button ui-button-block ui-button-100per ui-button-bg-73a ui-button-size-h130"><span class="ui-button-content">预约</span></button>
					</div>		
			</div>
		</div>	
		<!-- 主体内容end -->
		<mt-popup v-model="apply_device_pop" position="right" :modal="apply_device_modal">
			<div class="apply_device_pop">
				<div class="p1th">
					<div class="back-icon-item" @click="close_apply_device_pop()">
						<i class="icon back-icon"></i>
					</div>
					<h3 class="title-item tc">
						<span class="title">权限申请</span>
					</h3>
				</div>
				<div class="p2th">
					<div class="img-item">
						<img src="../../images/booking/apply-img-1080x919.jpg">
					</div>
					<div class="txt-item">
						<div class="txt-1 tc">您好！亲~</div>
						<div class="txt-1 tc">确认需要申请该设备吗？</div>
					</div>
				</div>
				<div class="p3th">
					<button class="ui-button ui-button-block ui-button-100per ui-button-bg-e9f ui-button-size-h130" @click="close_apply_device_pop()">
						<span class="ui-button-content">取消</span>
					</button>
					<button class="ui-button ui-button-block ui-button-100per ui-button-bg-73a ui-button-size-h130" @click="sure_apply()">
						<span class="ui-button-content">确定</span>
					</button>

				</div>	
			</div>
		</mt-popup>
		<mt-popup v-model="apply_success_pop" position="right" :modal="apply_device_modal">
			<div class="apply_success_pop">
				<div class="p1th">
					<div class="back-icon-item" @click="close_apply_success_pop()">
						<i class="icon back-icon"></i>
					</div>
					<h3 class="title-item tc">
						<span class="title">申请成功</span>
					</h3>
				</div>
				<div class="p2th">
					<div class="img-item">
						<img src="../../images/booking/apply-img-1080x919.jpg">
					</div>
					<div class="txt-item">
						<div class="txt-1 tc">恭喜！亲~</div>
						<div class="txt-1 tc">申请已提交，请耐心等待管理员审核</div>
					</div>
				</div>
				
			</div>
		</mt-popup>
		<!-- 公共底部start -->
		<!-- <g-footer current="booking"></g-footer> -->
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
			lists:"",
			apply_device_pop : false,
			apply_device_modal : false,
			apply_success_pop : false,
			
		}
	},

	created () {
		var self = this;
		self.getEquipmentInfo();
	},
	methods: {
		getEquipmentInfo(){
			var self = this;
			self.$http({
			    method: 'POST',
			    url: this.serverUrl + '/getEquipmentInfo',
			    headers: {
			        "X-AUTH-TOKEN": utility.storage.get("token")
			    },
			    emulateJSON: true,
			    params: {
			        id: self.$route.params.id
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
		booking_btn(){
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
			    },
			}).then(function(data) {
				
				var res = data.data;
				console.log(res);
				if (res.errcode==0) {
					if (res.data.op==0) {
						self.apply_device_pop=true;
					}
					if (res.data.op==1) {
						self.$router.push({ name: 'select_booking_time', params: { id: self.$route.params.id }})
					}
					if (res.data.op==2) {
						self.$router.push({name: 'booking_tips', params: {id: self.$route.params.id}});
					}
				}
			}, function(error) {
			    //error
			})
		},
		sure_apply(){
			var self = this;
			self.$http({
			    method: 'POST',
			    url: this.serverUrl + '/apply',
			    headers: {
			        "X-AUTH-TOKEN": utility.storage.get("token")
			    },
			    emulateJSON: true,
			    params: {
			        equipmentId: self.$route.params.id
			    },
			}).then(function(data) {
				
				var res = data.data;
				console.log(res);
				if (res.errcode==0) {
					self.apply_success_pop = true;
				}
			}, function(error) {
			    //error
			})
			
		},
		close_apply_success_pop(){
			var self = this;
			self.apply_device_pop=false;
			self.apply_success_pop=false;
		},
		close_apply_device_pop(){
			var self = this;
			self.apply_device_pop=false;
		},
	},
	components : {
		'g-header' : header,
		'g-footer' : footer,
		'mt-popup' : Popup
	}
}
</script>
<style lang="scss">  
  @import "../../style/page/detail/detail";
</style>