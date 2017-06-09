import Vue from 'vue'
// 引用路由
import VueRouter from 'vue-router'
// 入口文件为 src/App.vue 文件 所以要引用
// 引入公共js文件
import './global/utility/index'
import App from './App.vue'
// 引用路由配置文件
import routes from './config/routes'

// 引入请求并处理响应
import VueResource from 'vue-resource'

import { Lazyload } from 'mint-ui'; /*lazyload使用*/
import { InfiniteScroll } from 'mint-ui';/*上拉加载更多*/
import { Toast } from 'mint-ui';

Vue.use(InfiniteScroll);

Vue.use(Lazyload);


/*全局变量设置start*/
Vue.prototype.isOK = "0";
Vue.prototype.serverUrl = "/api";
Vue.prototype.appId = "adewddddddddddddddd";
Vue.prototype.Toast = Toast;
/*全局变量设置end*/




// 使用vue-resource
Vue.use(VueResource)
// 使用路由
Vue.use(VueRouter)
// 使用配置文件规则
const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
	/*判断浏览器token是否存在*/
	// if (window.location.search.token)
	// {  
	// 	utility.storage.set("token","xxxxxxxxxxxxxxx");
	//     next();
	// }
	// else {
	//     next({
	//             path: '/login',
	//             query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
	//     })
	// }
	var token = utility.storage.get("token");
	if (!token) {
		utility.storage.set("token","xxxxxxxxxxxxxxx");
	}
	next();
});

// 安装vue事件
new Vue({
	router,
	el: '#app',
	render: (h) => h(App)
})

