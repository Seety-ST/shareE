<template>
	<div>
		<!-- 公共头部start -->
		<g-header goBack="true" headTitle="申请记录"></g-header>
		<!-- 公共头部end -->

		<!-- 主体内容start -->
		<div class="mine-booking-list-page has_header_pt ">
			<div class="item-wrap">
					<div class="p1th">
						<div class="box-2">
							<input type="text" name="" class="input-txt" placeholder="全部" readonly="" v-model="status_name" @click.stop.prevent="status_filter()">
							<ul class="status-txt-pop " :class="{ fn: status_hide }">
								<li v-for="(item,index) in status_list" @click="choose_status(item,index)" >
									{{item.name}}
								</li>
								
							</ul>
						</div>
					</div>
					<div class="p2th">
						<div class="ui-list-mod-1">
							<ul class="list" v-infinite-scroll="getUserEquipmentList" infinite-scroll-disabled="no_more" infinite-scroll-distance="10" infinite-scroll-immediate-check="scroll_immediate_check">
								<li class="ui-border-t ui-border-tb" v-for="(item,index) in lists">
									<div class="item">
										<dl>
											<dt>名称： </dt>
											<dd>{{item.name}}</dd>
										</dl>
										<dl>
											<dt>时间: </dt>
											<dd>{{item.time}}  </dd>
										</dl>
										<dl>
											<dt>状态： </dt>
											<dd v-if="item.status==0">未审核</dd>
											<dd v-if="item.status==1">审核通过</dd>
											<dd v-if="item.status==2">关注</dd>
										</dl>
									</div>
									<div class="cancle-item" v-if="item.status==0" @click.stop.prevent="cancle_booking(item)">
										<button class="ui-button ui-button-block ui-button-bg-ed5 ui-button-min-border-radius ui-button-size-h70"><i class="icon revoke-icon "></i> <span class="ui-button-content">撤销</span></button>
									</div>
								</li>
								
							</ul>
						</div>
					</div>			
							
			</div>
		</div>	
		<!-- 主体内容end -->
		<!-- 取消申请弹窗 -->
		<mt-popup v-model="cancle_pop" position="right" :modal="cancle_modal">
			<div class="apply_device_pop">
				<div class="p1th">
					<div class="back-icon-item" @click="close_cancle_pop()">
						<i class="icon back-icon"></i>
					</div>
					<h3 class="title-item tc">
						<span class="title">申请取消</span>
					</h3>
				</div>
				<div class="p2th">
					<div class="img-item">
						<img src="../../images/mine/cancle-img-1080x930.jpg">
					</div>
					<div class="txt-item">
						<div class="txt-1 tc">您好！亲~</div>
						<div class="txt-1 tc">确认取消申请该设备吗？</div>
					</div>
				</div>
				<div class="p3th">
					<button class="ui-button ui-button-block ui-button-100per ui-button-bg-e9f ui-button-size-h130" @click="close_cancle_pop()">
						<span class="ui-button-content">取消</span>
					</button>
					<button class="ui-button ui-button-block ui-button-100per ui-button-bg-73a ui-button-size-h130" @click="sure_cancle()">
						<span class="ui-button-content">确定</span>
					</button>

				</div>	
			</div>
		</mt-popup>
		<!-- 公共底部start -->
		<!-- <g-footer current="mine"></g-footer> -->
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
			status_hide : true,
			status_list : "",
			status_name : "",
			cancle_pop : false,
			cancle_modal : false,
			cancle_id : "",
			scroll_immediate_check : true,
			pages :1,
			no_more : false,
			
		}
	},

	created () {
		var self = this;
		self.status_list = [
			{
				name : '全部',
				status : '',
			},
			{
				name : '未处理',
				status : '0',
			},
			{
				name : '已登记',
				status : '2',
			},
			{
				name : '改约',
				status : '3',
			}
		]
		document.addEventListener('click', function(){
		    self.status_hide = true;
		});
	},
	methods: {
		getUserEquipmentList(params){
			var self = this;
			var params = params || {} ;
			self.$http({
			    method: 'POST',
			    url: this.serverUrl + '/getUserEquipmentList',
			    headers: {
			        "X-AUTH-TOKEN": utility.storage.get("token")
			    },
			    emulateJSON: true,
			    params : {
			    	"page": self.pages,
			    	"size": 10,
			    	"status" : self.status
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
		status_filter(){
			var self = this;
			self.status_hide = false;
		},
		choose_status(item,index){
			var self = this;
			self.lists = [];
			self.pages = 1;
			self.status_name=item.name;
			self.status = item.status;
			self.getUserEquipmentList();
		},
		cancle_booking(item){
			var self = this;
			self.cancle_id = item.id;
			self.cancle_pop = true;
			console.log(self.cancle_id);
		},
		close_cancle_pop(){
			var self = this;
			self.cancle_pop = false;
		},
		sure_cancle(){
			var self = this;
			self.$http({
			    method: 'POST',
			    url: this.serverUrl + '/cancelApply',
			    headers: {
			        "X-AUTH-TOKEN": utility.storage.get("token")
			    },
			    emulateJSON: true,
			    params : {
			    	id : self.cancle_id,
			    	
			    }
			}).then(function(data) {
				
				var res = data.data;
				console.log(res);
				if (res.errcode==0) {
					self.cancle_pop = false;
					console.log("取消成功");
				}
			}, function(error) {
			    //error
			})
		}
	},
	components : {
		'g-header' : header,
		'g-footer' : footer,
		'mt-popup' : Popup
	}
}
</script>
<style lang="scss">  
  @import "../../style/page/mine/mine_apply_list";
</style>