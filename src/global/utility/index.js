/**
 * 工具集
 * hst 2017/6/5
 */
var storage = window.localStorage;
var utility =
{
	/**
	 * 本地存储器
	 */
	storage :
	{
		/**
		 * 前缀
		 */
		prefix: 'shareE-app-',
		/**
		 * 设置
		 * @param key
		 * @param val
		 * @returns {*}
		 */
		set: function(key, val)
		{
			try
			{
				if(!storage || typeof storage == 'undefined')
				{
					return false;
				}

				if (typeof val == 'undefined')
				{
					return utility.storage.remove(key);
				}

				storage.setItem(utility.storage.prefix + key, JSON.stringify(val));

				return val;
			}
			catch(err)
			{
				console.warn(err);

				return false;
			}

			
		},
		/**
		 * 获取
		 * @param key
		 * @returns {*}
		 */
		get: function(key)
		{
			try
			{
				var item = storage.getItem(window.utility.storage.prefix + key);

				if(!item)
				{
					return item;
				}
				else
				{
					return JSON.parse(item);
				}
			}
			catch(err)
			{
				console.warn(err);

				return false;
			}	

		},
		/**
		 * 删除
		 * @param key
		 * @returns {*}
		 */
		remove: function(key)
		{
			return storage.removeItem(utility.storage.prefix + key);
		}
	},
	Weixin : {
		isweixin : function(){
			var ua = window.navigator.userAgent.toLowerCase();
			if (ua.match(/MicroMessenger/i) == "micromessenger") {
			    return true;
			} else {
			    return false;
			}
		},
		toweixin : function(url){
			var wxurl = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + this.appId + "&response_type=code&scope=snsapi_userinfo&connect_redirect=1&redirect_uri=";
			var backurl = encodeURIComponent(this.serverUrl + 'callback?client_name=wechat&wechat_back_url=/' + url);
			window.location.href = wxurl + backurl + '#wechat_redirect';
		}
	},
	has_next_page : function(curPage,cur_pageSize,totalCount){
		if (curPage*cur_pageSize<totalCount) {
			return true;
		}
		else{
			return false;
		}
	}                  
};
window.utility = utility;