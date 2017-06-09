
import index from '../page/index/index.vue'
import booking from '../page/booking/index.vue'
import booking_tips from '../page/booking/booking_tips.vue'
import select_booking_time from '../page/booking/select_booking_time.vue'

import detail from '../page/detail/detail.vue'
import mine from '../page/mine/index.vue'
import mine_message from '../page/mine/mine_message.vue'
import mine_booking_list from '../page/mine/mine_booking_list.vue'
import mine_booking_detail from '../page/mine/mine_booking_detail.vue'
import mine_use_list from '../page/mine/mine_use_list.vue'
import mine_apply_list from '../page/mine/mine_apply_list.vue'
import mine_use_detail from '../page/mine/mine_use_detail.vue'
import change_school from '../page/mine/change_school.vue'
import login from '../page/mine/login.vue'
import ui from '../page/ui/index.vue'



// 配置路由
export default [
	{
		path: '/',
		name:'index',
		component: index,				
	},
	{
		path: '/booking_tips/:id',
		name:'booking_tips',
		component: booking_tips,
	},
	{
		path: '/booking',
		name:'booking',
		component: booking,
	},
	{
		path: '/select_booking_time/:id',
		name:'select_booking_time',
		component: select_booking_time,
	},
	{
		path: '/mine',
		name:'mine',
		component: mine,
	},
	{
		path: '/mine_message',
		name:'mine_message',
		component: mine_message,
	},
	{
		path: '/mine_booking_list',
		name:'mine_booking_list',
		component: mine_booking_list,
	},
	{
		path: '/mine_booking_detail/:id',
		name:'mine_booking_detail',
		component: mine_booking_detail,
	},
	{
		path: '/mine_use_list',
		name:'mine_use_list',
		component: mine_use_list,
	},
	{
		path: '/mine_apply_list',
		name:'mine_apply_list',
		component: mine_apply_list,
	},
	{
		path: '/mine_use_detail/:id',
		name:'mine_use_detail',
		component: mine_use_detail,
	},
	{
		path: '/change_school',
		name:'change_school',
		component: change_school,
	},
	{
		path: '/detail/:id',
		name:'detail',
		component: detail,
	},
	{
		path: '/login/:id/:name',
		name:'login',
		component: login,
	},
	{
		path: '/ui',
		name:'ui',
		component: ui, 
	},
]