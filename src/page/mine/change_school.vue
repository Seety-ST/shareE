<template>
	<div>
		<!-- 公共头部start -->
		<g-header goBack="true" headTitle="切换学校"></g-header>
		<!-- 公共头部end -->

		<!-- 主体内容start -->
		<div class="change-school-page has_header_pt has_footer_pb">
			<div class="item-wrap">
					<div class="p1th">
						
						<ul class="list">
							<li class="ui-border-b">
								<div class="img-item">
									<img src="../../images/test/196x200.png" alt="">
								</div>
								<div class="txt-item">摊片机12英寸</div>
							</li>
							<li class="ui-border-b">
								<div class="img-item">
									<img src="../../images/test/196x200.png" alt="">
								</div>
								<div class="txt-item">摊片机12英寸</div>
							</li>
							<li class="ui-border-b">
								<div class="img-item">
									<img src="../../images/test/196x200.png" alt="">
								</div>
								<div class="txt-item">摊片机12英寸</div>
							</li>
							<li class="ui-border-b">
								<div class="img-item">
									<img src="../../images/test/196x200.png" alt="">
								</div>
								<div class="txt-item">摊片机12英寸</div>
							</li>
							<li class="ui-border-b">
								<div class="img-item">
									<img src="../../images/test/196x200.png" alt="">
								</div>
								<div class="txt-item">摊片机12英寸</div>
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
  @import "../../style/page/mine/change_school";
</style>