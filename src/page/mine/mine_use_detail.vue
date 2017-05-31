<template>
	<div>
		<!-- 公共头部start -->
		<g-header goBack="true" headTitle="使用记录详情"></g-header>
		<!-- 公共头部end -->

		<!-- 主体内容start -->
		<div class="mine-use-detail-page has_header_pt has_footer_pb">
			<div class="item-wrap">
					<div class="p1th">
						
						<ul class="list">
							<li class="ui-border-b">
								<div class="box-1">设备名称</div>
								<div class="box-2">摊片机12英寸</div>
							</li>
							<li class="ui-border-b">
								<div class="box-1">放置地点   </div>
								<div class="box-2">使用者</div>
							</li>
							<li class="ui-border-b">
								<div class="box-1">使用者</div>
								<div class="box-2">摊片机12英寸</div>
							</li>
							<li class="ui-border-b">
								<div class="box-1">导师</div>
								<div class="box-2">摊片机12英寸</div>
							</li>
							<li class="ui-border-b">
								<div class="box-1">使用时间</div>
								<div class="box-2">摊片机12英寸</div>
							</li>
							<li class="ui-border-b">
								<div class="box-1">时长（分钟）</div>
								<div class="box-2">摊片机12英寸</div>
							</li>
							<li class="ui-border-b">
								<div class="box-1">样品数</div>
								<div class="box-2">摊片机12英寸</div>
							</li>
								<li class="ui-border-b">
								<div class="box-1">登记者  </div>
								<div class="box-2">摊片机12英寸</div>
							</li>
							<li class="ui-border-b">
								<div class="box-1">状态</div>
								<div class="box-2">摊片机12英寸</div>
							</li>
								<li class="ui-border-b">
								<div class="box-1">电话</div>
								<div class="box-2">摊片机12英寸</div>
							</li>
							<li class="ui-border-b">
								<div class="box-1">课题组</div>
								<div class="box-2">摊片机12英寸</div>
							</li>
							<li class="ui-border-b">
								<div class="box-1">项目名称</div>
								<div class="box-2">摊片机12英寸</div>
							</li>
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

			
		}
	},

	created () {
	},
	methods: {
		
	},
	components : {
		'g-header' : header,
		'g-footer' : footer,
	}
}
</script>
<style lang="scss">  
  @import "../../style/page/mine/mine_use_detail";
</style>