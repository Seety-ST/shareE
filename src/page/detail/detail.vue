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
							<img src="../../images/test/1080x674.jpg">
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
										<dd class="">变温光学测试平台</dd>
									</dl>
									<dl>
										<dt class="color-333">
											资产编号：
										</dt>
										<dd class="">1329887S</dd>
									</dl>
									<dl>
										<dt class="color-333">
											型号：
										</dt>
										<dd class="">自建规格</dd>
									</dl>
									<dl>
										<dt class="color-333">
											产地：
										</dt>
										<dd class="">中国厂家Wavetest所属品牌</dd>
									</dl>
									<dl>
										<dt class="color-333">
											出产日期：
										</dt>
										<dd class=""></dd>
									</dl>
									<dl>
										<dt class="color-333">
											购买日期：
										</dt>
										<dd class=""></dd>
									</dl>
									<dl>
										<dt class="color-333">
											所属单位：
										</dt>
										<dd class="">光电材料分析与表征研究平台</dd>
									</dl>
									<dl>
										<dt class="color-333">
											地点:
										</dt>
										<dd class="">变温光学测试平台</dd>
									</dl>
									<dl>
										<dt class="color-333">
											所属分类:
										</dt>
										<dd class="">东校区纳米楼6楼617室</dd>
									</dl>
									<dl>
										<dt class="color-333">
											联系人:
										</dt>
										<dd class="">桂许春</dd>
									</dl>
								</li>		
							</ul>
						</div>
					</div>
					<div class="p3th">
						<button class="ui-button ui-button-block ui-button-100per ui-button-bg-73a ui-button-size-h130"><span class="ui-button-content">预约</span></button>
					</div>		
			</div>
		</div>	
		<!-- 主体内容end -->
		
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
  @import "../../style/page/detail/detail";
</style>