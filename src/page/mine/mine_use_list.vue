<template>
	<div>
		<!-- 公共头部start -->
		<g-header goBack="true" headTitle="使用记录"></g-header>
		<!-- 公共头部end -->

		<!-- 主体内容start -->
		<div class="mine-use-list-page has_header_pt ">
			<div class="item-wrap">
					<div class="p1th">
						<div class="box-1" @click="openPicker()">
							<input type="text" name="" class="input-txt" placeholder="2017-05-05     星期一" readonly="" v-model="select_date">
						</div>
					</div>
					<div class="p2th">
						<div class="ui-list-mod-1">
							<ul class="list" v-infinite-scroll="getUsedConfirmList" infinite-scroll-disabled="no_more" infinite-scroll-distance="10" infinite-scroll-immediate-check="scroll_immediate_check">
							<template v-for="(item,index) in lists">
								<router-link :to="{name:'mine_use_detail',params:{id:item.id}}" tag="li" class="ui-border-t ui-border-tb">
									<div class="item">
										<dl>
											<dt>名称： </dt>
											<dd>{{item.name}}</dd>
										</dl>
										<dl>
											<dt>地址: </dt>
											<dd>{{item.address}}  </dd>
										</dl>
										<dl>
											<dt>时间: </dt>
											<dd>{{item.time}}  </dd>
										</dl>
										<dl>
											<dt>状态： </dt>
											<dd v-if="item.status==0">未完成</dd>
											<dd v-else="item.status==1">已完成</dd>
											<dd v-else="item.status==2">已扣费</dd>
											<dd v-else="item.status==3">已结算</dd>
										</dl>
									</div>
								</router-link>
							</template>	
							</ul>
						</div>
					</div>			
							
			</div>
		</div>	
		<!-- 主体内容end -->
		<mt-datetime-picker  type="date" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" ref="picker"  :startDate="current_date" @confirm="filter_list">
		</mt-datetime-picker>
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

import { DatetimePicker } from 'mint-ui';
console.log(DatetimePicker);

export default {
	data() {
		return {
			lists:[],
			pickerVisible : true,
			current_date : new Date(),
			select_date : "",
			scroll_immediate_check : true,
			pages :1,
			no_more : false,
			select_date_no_day : ""
		}
	},

	created () {
		// 
	},
	methods: {
		getUsedConfirmList(params){
			var self = this;
			self.$http({
			    method: 'POST',
			    url: this.serverUrl + '/getUsedConfirmList',
			    headers: {
			        "X-AUTH-TOKEN": utility.storage.get("token")
			    },
			    emulateJSON: true,
			    params : {
			    	"page": self.pages,
			    	"size": 10,
			    	"date": self.select_date_no_day
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
		openPicker() {
		    this.$refs.picker.open();
		},
		filter_list(val){
			

			var self = this;
			self.pages = 1;
			self.lists = [];
			var time = val.getFullYear()+"-"+(val.getMonth()+1)+"-"+val.getDate();
			var day = "";
			switch(val.getDay())
			{
				case 0:day = '星期日';break;
				case 1:day = '星期一';break;
				case 2:day = '星期二';break;
				case 3:day = '星期三';break;
				case 4:day = '星期四';break;
				case 5:day = '星期五';break;
				case 6:day = '星期六';break;
			}
			console.log(day);
			self.select_date = time+"     "+day;
			self.select_date_no_day = time;
			self.getUsedConfirmList();
		}
	},
	components : {
		'g-header' : header,
		'g-footer' : footer,
		'mt-datetime-picker' : DatetimePicker 
	}
}
</script>
<style lang="scss">  
  @import "../../style/page/mine/mine_use_list";
</style>