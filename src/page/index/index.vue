<template>
	<div>
		<!-- 公共头部start -->
		<g-header goBack="true" headTitle="关于"></g-header>
		<!-- 公共头部end -->

		<!-- 主体内容start -->
		<div class="index-page has_header_pt">
			<div class="item-wrap">
				<div class="p1th">
					<div class="img-item">
						<img src="../../images/index/banner-img-1080x619.jpg">

					</div>

				</div>	
				<div class="p2th">
					<div class="txt-item">
						<h3 class="title tc fb">关于ShareE预约助手</h3>
						<div class="txt-1">
							     Share E预约助手是实验室仪器共享系统，帮助高校、学院和实验室快速构建实验者使用共享仪器平台，实现仪器使用信息化和智能化，提交仪器使用效益，让实验室管理更简单！
						</div>
					</div>

				</div>	
				<div class="p3th">
					<p class="txt-1 tc">ShareE预约助手版本号1V1.0.0</p>
					<p class="txt-2 tc">版权所有&copy;广州佰能信息科技有限公司</p>
				</div>			
			</div>
		</div>	
		<!-- 主体内容end -->
		
		<!-- 公共底部start -->
		<g-footer current="index"></g-footer>
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
  @import "../../style/page/index/index";
</style>