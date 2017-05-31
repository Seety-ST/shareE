<template>
	<div class="g-footer ui-border-t">
		<div class="item-wrap">
			<ul class="list">
				<router-link :to="{name:'index'}" tag="li" :class="{cur:index_cur}">
					<i class="icon home-icon"></i>
					<em class="txt">
						首页
					</em>
				</router-link>
				<router-link :to="{name:'booking'}" tag="li" :class="{cur:booking_cur}" class="ui-border-l ">
					<i class="icon booking-icon"></i>
					<em class="txt">
						预约
					</em>
				</router-link>
				<router-link :to="{name:'mine'}" tag="li" :class="{cur:mine_cur}" class="ui-border-l ">
				
					<i class="icon mine-icon "></i>
					<em class="txt">
						个人中心
					</em>
				
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'g-footer',
	data () {
		return {
			index_cur : false,
			booking_cur : false,
			mine_cur : false,
		}
	},
	props: [ 'current'],
	created () {
		var self = this;
		if (self.current=='booking') {
			self.booking_cur = true;
		}
		if (self.current=='mine') {
			self.mine_cur = true;
		}
		if (self.current=='index'){
			self.index_cur = true;
		}
		
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../style/components/footer";
</style>
