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
							<input type="search" class="input-txt"   v-model="search_keys" placeholder="请输入关键字搜索 如 名称 地址 管理员"/>
						</form>
					</div>

				</div>	
				<div class="p2th">
					<div class="ui-list-mod-2">
						<ul class="list" v-infinite-scroll="getEquipmentList" infinite-scroll-disabled="no_more" infinite-scroll-distance="10" infinite-scroll-immediate-check="scroll_immediate_check">
							
								<li class="ui-border-t ui-border-tb" v-for="(item, index) in lists">
									<router-link :to="{ name: 'detail', params: { id: item.id }}"  >
									<div class="item-wrap">
										<div class="img-item">
											<i class="img" :style="{backgroundImage: 'url(' + item.img + ')'}"></i>
										</div>
										<div class="txt-item">
											<div class="box-1">
												<span class="txt-1 ">{{item.name}}</span>        
												<span class="txt-2">{{item.label}}</span>
											</div>	
											<div class="box-2">
												<span class="txt-1">管理人:{{item.admin}}</span>        
											</div>
											<div class="box-2">
												<span class="txt-1">手机:<em class="phone-txt">{{item.mobile}}</em></span>
												<i class="phone-icon"></i>        
											</div>
											<div class="box-2">
												<span class="txt-1">所在地点:{{item.address}}</span>        
											</div>
											<div class="box-2">
												<span class="txt-1">使用方式：{{item.userType}}</span>        
											</div>	
										</div>		
									</div>
									<div class="booking-btn-item" @click.prevent="booking_btn(item.id)">
										<button class="ui-button ui-button-block ui-button-bg-3b9 ui-button-min-border-radius ui-button-size-h70">
											<i class="icon booking-icon "></i>
											<span class="ui-button-content" >预约</span>
										</button>
									</div>
									</router-link>
								</li>
							
									
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
			search_keys : "",
			apply_device_pop : false,
			apply_device_modal : false,
			apply_success_pop : false,
			equipmentId : "",
			scroll_immediate_check : true,
			pages :1,
			no_more : false,
			
		}
	},

	created () {
		var self = this;

		document.onkeydown = function(e){
		    var e = e || window.event;  
		    var currKey=e.keyCode||e.which||e.charCode;
		    if(currKey==13)
		    {
		    	self.lists = [];
		    	self.pages = 1;
		        self.getEquipmentList();
		    } 
		}
	},
	methods: {
		booking_btn(id){
			var self = this;
			
			console.log(id);
			self.equipmentId = id;
			self.$http({
			    method: 'POST',
			    url: this.serverUrl + '/bookingCheck',
			    headers: {
			        "X-AUTH-TOKEN": utility.storage.get("token")
			    },
			    emulateJSON: true,
			    params: {
			        equipmentId: id
			    },
			}).then(function(data) {
				
				var res = data.data;
				console.log(res);
				if (res.errcode==0) {
					if (res.data.op==0) {
						self.apply_device_pop=true;
					}
					if (res.data.op==1) {
						self.$router.push({ name: 'select_booking_time', params: { id: self.equipmentId }})
					}
					if (res.data.op==2) {
						self.$router.push({name: 'booking_tips', params: {id: self.equipmentId}});
					}
				}
			}, function(error) {
			    //error
			})
		},
		close_apply_device_pop(){
			var self = this;
			self.apply_device_pop=false;
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
			        equipmentId: self.equipmentId
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
		getEquipmentList(){
			var self = this;

			self.$http({
			    method: 'POST',
			    url: this.serverUrl + '/getEquipmentList',
			    headers: {
			        "X-AUTH-TOKEN": utility.storage.get("token")
			    },
			    emulateJSON: true,
			    params: {
			    	"page": 1,
			    	"size": 10,
			        "key": self.search_keys
			    }
			}).then(function(data) {
				
				var res = data.data;
				console.log(res);
				if (res.errcode==0) {
					// 判断是否有下一页数据start
					var currentPage = res.data.page.currentPage;
					var pageSize = res.data.page.pageSize;
					var totalCount = res.data.page.totalCount;
					var has_next_page = utility.has_next_page(currentPage,pageSize,totalCount);
					// 判断是否有下一页数据end
					// 
					self.lists=(self.lists).concat(res.data.list);
					self.pages++;
					console.log(has_next_page);
					if (has_next_page) {
						self.no_more = false;
						
					}else{
						self.no_more = true;
					}
				}
			}, function(error) {
			    //error
			})
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