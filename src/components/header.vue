<template>
	<div class="g-header">
			<div class="item-wrap" >
 				<div class="back-icon-item" v-if="goBack" @click="$router.go(-1)">
 					<i class="icon back-icon"></i>
 				</div>
 				<h3 class="title-item tc">
					<span class="title">{{headTitle}}</span>
 				</h3>
			</div>
	</div>
</template>

<script>
export default {
	name: 'g-header',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	},
	props: [ 'goBack','headTitle']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../style/components/header";
</style>
