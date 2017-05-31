<template>
	<div>
		<!-- 公共头部start -->
		<g-header goBack="true" headTitle="预约设备"></g-header>
		<!-- 公共头部end -->

		<!-- 主体内容start -->
		<div class="booking-page has_header_pt has_footer_pb">
			<div class="item-wrap">
				<div class="p1th">
					<div class="item">
						<i class="search-icon"></i>
						<form method="GET" action="" class="search-form">
							<input type="search" class="input-txt" header-s-data="key" name="kw" value="" placeholder="请输入关键字搜索 如 名称 地址 管理员"/>
						</form>
					</div>

				</div>	
				<div class="p2th">
					<div class="ui-list-mod-2">
						<ul class="list">
							<router-link :to="{ name: 'detail'}">
								<li class="ui-border-t ui-border-tb" >
									<div class="item-wrap">
										<div class="img-item">
											<i class="img" style="background-image: url(http://image19.yueus.com/yueyue/20170407/20170407144522_412152_100002_10648_640.jpg?344x344_120);"></i>
										</div>
										<div class="txt-item">
											<div class="box-1">
												<span class="txt-1 ">12英寸管式炉2</span>        
												<span class="txt-2">45689556512333</span>
											</div>	
											<div class="box-2">
												<span class="txt-1">管理人:张宇</span>        
											</div>
											<div class="box-2">
												<span class="txt-1">手机:<em class="phone-txt">13825467845</em></span>
												<i class="phone-icon"></i>        
											</div>
											<div class="box-2">
												<span class="txt-1">所在地点:光电材料合成与制备研究所</span>        
											</div>
											<div class="box-2">
												<span class="txt-1">使用方式：送样预约</span>        
											</div>	
										</div>		
									</div>
									<div class="booking-btn-item" @click.prevent="booking_btn()">
										<button class="ui-button ui-button-block ui-button-bg-3b9 ui-button-min-border-radius ui-button-size-h70">
											<i class="icon booking-icon "></i>
											<span class="ui-button-content" >预约</span>
										</button>
									</div>
								</li>
							</router-link>
									
						</ul>
					</div>

				</div>		
			</div>
		</div>	
		<router-view></router-view>
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
		<g-footer current="booking"></g-footer>
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
			apply_device_pop : false,
			apply_device_modal : false,
			apply_success_pop : false,
			
		}
	},

	created () {
		
	},
	methods: {
		booking_btn(){
			var self = this;
			self.apply_device_pop=true;
		},
		close_apply_device_pop(){
			var self = this;
			self.apply_device_pop=false;
		},
		sure_apply(){
			var self = this;
			
			self.apply_success_pop = true;
		},
		close_apply_success_pop(){
			var self = this;
			self.apply_device_pop=false;
			self.apply_success_pop=false;
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
  @import "../../style/page/booking/index";
</style>