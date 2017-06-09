<template>
	<div>
		<!-- 公共头部start -->
		<g-header goBack="true" headTitle="切换学校"></g-header>
		<!-- 公共头部end -->

		<!-- 主体内容start -->
		<div class="change-school-page has_header_pt has_footer_pb">
			<div class="item-wrap">
					<div class="p1th">
						
						<ul class="list" v-infinite-scroll="getShareEList" infinite-scroll-disabled="no_more" infinite-scroll-distance="10" infinite-scroll-immediate-check="scroll_immediate_check">
							<template v-for="(item,index) in lists" >
							<router-link :to="{ name: 'login', params: { id: item.id,name:item.name }}" class="ui-border-b" tag="li">
								
								<div class="img-item">
									<img :src="item.img" alt="">
								</div>
								<div class="txt-item">{{item.name}}</div>
							</router-link>
							</template>
						</ul>
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
			scroll_immediate_check : true,
			pages :1,
			no_more : false,

			
		}
	},

	created () {
		
	},
	methods: {
		getShareEList(){
			var self = this;
			self.$http({
			    method: 'POST',
			    url: this.serverUrl + '/getShareEList',
			    headers: {
			        "X-AUTH-TOKEN": utility.storage.get("token")
			    },
			    emulateJSON: true,
			    params : {
			    	pages : self.pages,
			    	size : 10
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
	}
}
</script>
<style lang="scss">  
  @import "../../style/page/mine/change_school";
</style>