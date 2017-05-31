<template>
	<div>
		<!-- 公共头部start -->
		<g-header goBack="true" headTitle="预约记录"></g-header>
		<!-- 公共头部end -->

		<!-- 主体内容start -->
		<div class="mine-booking-list-page has_header_pt ">
			<div class="item-wrap">
					<div class="p1th">
						<div class="box-1">
							<input type="text" name="" class="input-txt" placeholder="2017-05-05     星期一" readonly="">
						</div>
						<div class="box-2">
							<input type="text" name="" class="input-txt" placeholder="全部" readonly="">
						</div>
					</div>
					<div class="p2th">
						<div class="ui-list-mod-1">
							<ul class="list">
								<router-link :to="{name:'mine_booking_detail'}" tag="li" class="ui-border-t ui-border-tb">
									<div class="item">
										<dl>
											<dt>名称： </dt>
											<dd>12英寸管式炉</dd>
										</dl>
										<dl>
											<dt>时间: </dt>
											<dd>2017-05-05  </dd>
										</dl>
										<dl>
											<dt>状态： </dt>
											<dd>待处理</dd>
										</dl>
									</div>
									<div class="cancle-item">
										<button class="ui-button ui-button-block ui-button-bg-ed5 ui-button-min-border-radius ui-button-size-h70">
											<i class="icon cancle-icon "></i>
											<span class="ui-button-content">取消</span>
										</button>
									</div>
								</router-link>
								<router-link :to="{name:'mine_booking_detail'}" tag="li" class="ui-border-t ui-border-tb">
									<div class="item">
										<dl>
											<dt>名称： </dt>
											<dd>12英寸管式炉</dd>
										</dl>
										<dl>
											<dt>时间: </dt>
											<dd>2017-05-05  </dd>
										</dl>
										<dl>
											<dt>状态： </dt>
											<dd>待处理</dd>
										</dl>
									</div>
									<div class="cancle-item">
										<button class="ui-button ui-button-block ui-button-bg-ed5 ui-button-min-border-radius ui-button-size-h70">
											<i class="icon cancle-icon "></i>
											<span class="ui-button-content">取消</span>
										</button>
									</div>
								</router-link>
								
							</ul>
						</div>
					</div>			
							
			</div>
		</div>	
		<!-- 主体内容end -->
		
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




export default {
	data() {
		return {
			lists:[],
			
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
  @import "../../style/page/mine/mine_booking_list";
</style>