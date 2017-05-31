<template>
	<div>
		<!-- 公共头部start -->
		<g-header goBack="true" headTitle="设备详情"></g-header>
		<!-- 公共头部end -->

		<!-- 主体内容start -->
		<div class="mine-message-page has_header_pt has_footer_pb">
			<div class="item-wrap">
					<div class="p1th">
						<div class="avator-item">
							<i class="avator-icon">

							</i>
						</div>
						<div class="txt-item">
							<div class="box-1">
								<span class="txt-1">小五   </span>
								<span class="txt-2">女</span>
							</div>
							<div class="box-2">
								<span class="txt-1">邮箱：1524598@qq.com</span>
							</div>
							<div class="box-2">
								<span class="txt-1">手机,：1384578458745</span>
							</div>
						</div>
					</div>	
					<div class="p2th ui-border">

						<ul class="list">
							<li class="ui-border-b">
								<div class="item">
									<div class="box-1">联系地址</div>
									<div class="box-2">广州市番禺区兴南大道436号</div>
								</div>
							</li>
							<li class="ui-border-b">
								<div class="item">
									<div class="box-1">证件类型</div>
									<div class="box-2">身份证</div>
								</div>
							</li>
							<li class="ui-border-b">
								<div class="item">
									<div class="box-1">证件号码</div>
									<div class="box-2">441478523698745632</div>
								</div>
							</li>
							<li class="ui-border-b">
								<div class="item">
									<div class="box-1">单位机构</div>
									<div class="box-2">佰能信息科技有限公司</div>
								</div>
							</li>
							<li class="ui-border-b">
								<div class="item">
									<div class="box-1">年级</div>
									<div class="box-2">广州市番禺区兴南大道436号</div>
								</div>
							</li>
							<li class="ui-border-b">
								<div class="item">
									<div class="box-1">导师</div>
									<div class="box-2"></div>
								</div>
							</li>
							<li class="ui-border-b">
								<div class="item">
									<div class="box-1">专业  </div>
									<div class="box-2"></div>
								</div>
							</li>
							<li class="ui-border-b">
								<div class="item">
									<div class="box-1">研究方向</div>
									<div class="box-2"></div>
								</div>
							</li>
							<li class="ui-border-b">
								<div class="item">
									<div class="box-1">卡号   </div>
									<div class="box-2">426656666666</div>
								</div>
							</li>
						</ul>
					</div>		
			</div>
		</div>	
		<!-- 主体内容end -->
		
		<!-- 公共底部start -->
		<g-footer current="mine"></g-footer>
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
  @import "../../style/page/mine/mine_message";
</style>