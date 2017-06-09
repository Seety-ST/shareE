<template>
	<div>
		<!-- 公共头部start -->
		<g-header goBack="true" headTitle="预约时间"></g-header>
		<!-- 公共头部end -->

		<!-- 主体内容start -->
		<div class="booking-time-page has_header_pt has_footer_pb">
			<div class="item-wrap">
					<div class="p1th">
						<mt-swipe :auto="0">
						<template v-for="(item,index) in lists">
						  <mt-swipe-item >
							<ul class="list clearfix">
								<li v-for="(items,indexs) in item" @click="choose_day(items,indexs,index)" :class="{cur:items.cur}">
									<div class="txt-1 tc fb">
										{{items.day}}
									</div>
									<div class="txt-2 tc">
										{{items.week}}
									</div>
									
								</li>								
							</ul>
							
						  </mt-swipe-item>
						  </template>
						</mt-swipe>
						
					</div>	
					<div class="p2th">
						<ul class="list">
							<li>
								<span class="time-txt"> {{pre_date}}</span>
							</li>
							<li class="cur">
								<span class="time-txt">{{current_date}} </span>
							</li>
							<li>
								<span class="time-txt">{{next_date}} </span>
							</li>

						</ul>
					</div>
					<div class="p3th">
						<ul class="list">
							<li class="ui-border-t" v-for="(item,index) in booabletimes" @click="choose_time(item,index)" :class="{cur:item.cur}" >
								{{item.start}}:00-{{item.end}}:00
							</li>
							
						</ul>
					</div>		
					<div class="p4th" @click="submit_time()">
						<button class="ui-button ui-button-block ui-button-100per ui-button-bg-73a ui-button-size-h130"><span class="ui-button-content">确定</span></button>
					</div>
			</div>
		</div>	
	
		<!-- 主体内容end -->
		<!-- 预约信息弹层 -->
		<mt-popup v-model="booking_message_pop" position="right" :modal="booking_message_modal">
			<div class="apply_device_pop">
				<div class="p1th">
					<div class="back-icon-item" @click="close_booking_message_pop()">
						<i class="icon back-icon"></i>
					</div>
					<h3 class="title-item tc">
						<span class="title">预约信息</span>
					</h3>
				</div>
				<div class="booking-message-page">
					<div class="item-wrap">
							<div class="p2th">
								<ul class="list">
									<li>
										<div class="box-1">
											<i class="must-write-icon"></i>
											<em class="txt">课题组 </em>
										</div>
										<div class="box-2">
											<select class="class_one select ui-border" v-model="subject">
												<option v-for="(item,index) in data.subject" :value="item">{{item}}</option>
											</select>
										</div>
									</li>
									<li>
										<div class="box-1">
											
											<em class="txt">  项目名称   </em>
										</div>
										<div class="box-2">
											<select class="class_one select ui-border" v-model="project">
												<option  v-for="(item,index) in data.project" :value="item">   {{item}} </option>
											</select>
										</div>
									</li>
									<li>
										<div class="box-1">
											
											<em class="txt">  样品编号   </em>
										</div>
										<div class="box-2">
											<input type="text" name="" class="input-txt" v-model="sampleNo">
										</div>
									</li>
									<li>
										<div class="box-1">
											
											<em class="txt">  样品数  </em>
										</div>
										<div class="box-2">
											<input type="text" name="" class="input-txt" v-model="sampleCount">
										</div>
									</li>
									<li>
										<div class="box-1">
											<i class="must-write-icon"></i>
											<em class="txt">  使用性质   </em>
										</div>
										<div class="box-2">
											<select class="class_one select ui-border" v-model="useNature">
												<option :value ="item" v-for="(item,index) in data.useNature" >    {{item}}</option>
											</select>
										</div>
									</li>
									<li>
										<div class="box-1">
											<i class="must-write-icon"></i>
											<em class="txt">  实验内容  </em>
										</div>
										<div class="box-2">
											<input type="text" name="" class="input-txt" v-model="content">
										</div>
									</li>
								</ul>
							</div>
							<div class="p4th" @click="booking_message()">
								<button class="ui-button ui-button-block ui-button-100per ui-button-bg-73a ui-button-size-h130"><span class="ui-button-content">确定</span></button>
							</div>		
					</div>
				</div>	
			</div>
		</mt-popup>
		<mt-popup v-model="booking_check_pop"  position="right" :modal="booking_message_modal">
			<div class="apply_device_pop">
				<div class="p1th">
					<div class="back-icon-item" @click="close_booking_check_pop()">
						<i class="icon back-icon"></i>
					</div>
					<h3 class="title-item tc">
						<span class="title">预约核对</span>
					</h3>
				</div>
				<div class="booking-check-page">
					<div class="item-wrap">
							<div class="p2th">
								<div class="item-1">
									<ul class="list">
										<li>
											<h3 class="title">
												1.设备概要
											</h3>
											<div class="box-1">
												<dl>
													<dt>
														设备名称 
													</dt>
													<dd>{{check_message.name}}  </dd>
												</dl>
												<dl>
													<dt>
														型号  
													</dt>
													<dd>{{check_message.model}} </dd>
												</dl>
												<dl>
													<dt>
														放置地点  
													</dt>
													<dd> {{check_message.address}}</dd>
												</dl>
											</div>
										</li>
										<li>
											<h3 class="title">
												2.预约信息
											</h3>
											<div class="box-1">
												<dl>
													<dt>
														预约人 
													</dt>
													<dd>12英寸管式炉2   </dd>
												</dl>
												<dl>
													<dt>
														课题组  
													</dt>
													<dd> {{subject}}</dd>
												</dl>
												<dl>
													<dt>
														导师姓名   
													</dt>
													<dd> {{check_message.teacher}}</dd>
												</dl>
												<dl>
													<dt>
														 管理员    
													</dt>
													<dd> </dd>
												</dl>
												<dl>
													<dt>
														 使用性质    
													</dt>
													<dd> {{useNature}}</dd>
												</dl>
												
											</div>
										</li>
										<li>
											<h3 class="title">
												3.预约时间
											</h3>
											<div class="box-1">
												<dl>
													<dt>
														开始时间  
													</dt>
													<dd>  {{current_select_start}} </dd>
												</dl>
												<dl>
													<dt>
														结束时间   
													</dt>
													<dd>{{current_select_end}} </dd>
												</dl>
												<dl>
													<dt>
														时长  
													</dt>
													<dd>{{hour}} </dd>
												</dl>
											</div>
										</li>
									</ul>
									<div class="check-item" @click="change_agree()">
										<label >
											<input type="checkbox" name="" v-model="agree" class="input-check" :class="{has_checked:agree}">
											<span class="txt">是否遵守实验室的预约规则</span>
										</label>
									</div>	
									
								</div>
								
							</div>
							<div class="p3th">
								<button class="ui-button ui-button-block ui-button-100per ui-button-bg-73a ui-button-size-h130"@click="submit_booking()"><span class="ui-button-content">提交预约</span></button>
							</div>		
					</div>
					<mt-popup v-model="booking_success_pop" position="right" :modal="booking_message_modal" class>
						<div class="apply_success_pop">
							<div class="p4th">
								<div class="back-icon-item" @click="close_booking_check_pop()">
									<i class="icon back-icon"></i>
								</div>
								<h3 class="title-item tc">
									<span class="title">预约成功</span>
								</h3>
							</div>
							<div class="p5th">
								<div class="img-item">
									<img src="../../images/booking/booking-success.jpg">
								</div>
							</div>
							
						</div>
					</mt-popup>
				</div>	
			</div>
		</mt-popup>
		<!-- 公共底部start -->
		
		<!-- 公共底部end -->
	</div>
	
</template>
<script>


// 引入公共头底部start
import header from '../../components/header.vue';
import footer from '../../components/footer.vue';
// 引入公共头底部end

// 引入轮播组件
import { Swipe, SwipeItem } from 'mint-ui';
import { Popup } from 'mint-ui';




export default {
	data() {
		return {
			data : "",
			lists:[],
			apply_device_pop : false,
			apply_device_modal : false,
			apply_success_pop : false,
			booabletimes : [],
			current_date : "",
			pre_date : "",
			next_date : "",
			bookabledates : [],
			current_select_date : "",
			current_select_start : "",
			current_select_end : "",
			booking_message_modal : false,
			booking_message_pop : false,
			subject : "",
			project : "",
			useNature : "",
			sampleNo : "",
			sampleCount : "",
			content : "",
			booking_check_pop : false,
			booking_success_pop:false,
			check_message: "",
			agree : false,
			hour : ""



			
		}
	},

	created () {
		var self = this;
		self.getBookingTimes();
		
	},
	mounted (){
		var self = this;
	},
	methods: {
		start_booking(){
			
		},
		getBookingTimes(){
			var self = this;
			console.log(self.$route.params.id);
			self.$http({
			    method: 'POST',
			    url: this.serverUrl + '/getBookingTimes',
			    headers: {
			        "X-AUTH-TOKEN": utility.storage.get("token")
			    },
			    emulateJSON: true,
			    params: {
			        id: self.$route.params.id
			    }
			}).then(function(data) {
				
				var res = data.data;
				self.data = res.data;
				console.log(self.data);
				var bookabledates = [];
				if (res.errcode==0) {

					self.bookabledates = res.data.bookabledates;
					for (var i=0,len=res.data.bookabledates.length;i<len;i++) {
						var date_str = res.data.bookabledates[i].date.replace(/-/g,'/');
						var date = new Date(date_str);

						res.data.bookabledates[i]['day'] = date.getDate();
					}
					for (var i=0,len=res.data.bookabledates.length;i<len;i+=8) {
						bookabledates.push(res.data.bookabledates.slice(i,i+8));
					}
				}
				self.lists = bookabledates;
				var length = self.lists[0].length;
				console.log(self.lists);
				self.booabletimes = self.lists[0][0].booabletimes;
				self.current_date = self.change_time_format(self.lists[0][0].date)+self.lists[0][0].week;
				self.current_select_date = self.lists[0][0].date;
				self.pre_date = self.getPreDay(self.lists[0][0].date);
				self.next_date = self.getNextDay(self.lists[0][0].date);
				self.lists[0][0]['cur'] = true;
				for (var i = 0; i < self.booabletimes.length; i++) {
					self.$set(self.booabletimes[i], 'cur', false);
				}
				self.lists = bookabledates;
			
			}, function(error) {
			    //error
			})
		},
		choose_day(item,index,parent_index){
			var self = this;
			self.current_select_end = "";
			self.current_select_start = "";
			self.booabletimes = item.booabletimes;
			self.current_date = self.change_time_format(item.date)+item.week;
			for (var i = 0,lens=self.lists.length;i<lens;i++) {
				
				for (var j = 0,len=self.lists[i].length;j<len;j++) {
					self.lists[i][j]['cur'] = false;
					self.lists[parent_index][index]['cur'] = true;
				}
			}
			self.current_select_date = item.date;

			self.pre_date = self.getPreDay(self.lists[parent_index][index].date);
			self.next_date = self.getNextDay(self.lists[parent_index][index].date);
			for (var i = 0; i < self.booabletimes.length; i++) {
				self.$set(self.booabletimes[i], 'cur', false);
			}

		},
		getPreDay(date){
			var self = this;
			if (date) {

				var date_str = date.replace(/-/g,'/');
				var date = new Date(date_str);
				var month = date.getMonth()+1;
				var day = date.getDate()-1;
				var week = date.getDay()-1;
				var day_week = "";
				if (week<=0) {
					week = 0;
				}
				
				switch(week)
				{
					case 0:day_week = '星期日';break;
					case 1:day_week = '星期一';break;
					case 2:day_week = '星期二';break;
					case 3:day_week = '星期三';break;
					case 4:day_week = '星期四';break;
					case 5:day_week = '星期五';break;
					case 6:day_week = '星期六';break;
				}
				if (day<=1) {
					day = 1;
				}
				return month+"月"+day+"日"+day_week;
			}
		},
		getNextDay(date){
			var self = this;
			if (date) {

				var date_str = date.replace(/-/g,'/');
				var date = new Date(date_str);
				var month = date.getMonth()+1;
				var day = date.getDate()+1;
				var week = date.getDay()+1;
				var day_week = "";
				if (week>=6) {
					week = 0;
				}
				console.log(week);
				switch(week)
				{
					case 0:day_week = '星期日';break;
					case 1:day_week = '星期一';break;
					case 2:day_week = '星期二';break;
					case 3:day_week = '星期三';break;
					case 4:day_week = '星期四';break;
					case 5:day_week = '星期五';break;
					case 6:day_week = '星期六';break;
				}
				if (day>=30) {
					day = date.getDate();
				}
				return month+"月"+day+"日"+day_week;
			}
		},
		change_time_format(date){
			if (date){
				var date_str = date.replace(/-/g,'/');
				var date = new Date(date_str);
				var month = date.getMonth()+1;
				var day = date.getDate();
				return month+"月"+day+"日"
			}
		},
		choose_time(item,index){
			var self = this;
			self.current_select_end = item.end;
			self.current_select_start = item.start;
			self.hour = self.current_select_end - self.current_select_start;
			for (var i = 0; i < self.booabletimes.length; i++) {
				self.booabletimes[i].cur = false;
			}
			self.booabletimes[index].cur = true;

		},
		submit_time(){
			var self = this;
			if (!self.current_select_start||!self.current_select_end) {
				self.Toast("请选择预约时间");
				return;
			}
			self.booking_message_pop = true;
		},
		close_booking_message_pop(){
			var self = this;
			self.booking_message_pop = false;
		},
		booking_message(){
			var self = this;
			if (!self.subject) {
				self.Toast("请选择课题组");
				return;
			}
			if (!self.useNature) {
				self.Toast("请选择使用性质");
				return;
			}
			if (!self.content) {
				self.Toast("请填写实验内容");
				return;
			}
			self.$http({
			    method: 'POST',
			    url: this.serverUrl + '/getBookingInfo',
			    headers: {
			        "X-AUTH-TOKEN": utility.storage.get("token")
			    },
			    emulateJSON: true,
			    params: {
			        id: self.$route.params.id
			    }
			}).then(function(data) {
				var res = data.data;
				if (res.errcode==0) {
					self.check_message = res.data;
				}
				console.log(res);
				
				self.booking_check_pop = true;

			}, function(error) {
			    //error
			})
			

		},
		close_booking_check_pop(){
			var self = this;
			self.booking_check_pop = false;
		},
		submit_booking(){
			var self = this;
			console.log(self.current_select_date);
			console.log(self.current_select_start);
			var useNature = "";
			if (self.useNature=="科研") {
				useNature = 0
			}
			else{
				useNature = 1
			}
			var params = 
			{
			    "equipmentId": self.$route.params.id,
			    "subject": self.subject,
			    "project": self.project,
			    "sampleNo": self.sampleNo,
			    "sampleCount": self.sampleCount,
			    "useNature": useNature,
			    "content": self.content,
			    "times": [
			    	{
			    	    "start": self.current_select_date+" "+self.current_select_start,
			    	    "end": self.current_select_date+" "+self.current_select_end
			    	}
			    ]
			}
			console.log(self.agree);
			if (self.agree) {
				self.$http({
				    method: 'POST',
				    url: this.serverUrl + '/booking',
				    headers: {
				        "X-AUTH-TOKEN": utility.storage.get("token")
				    },
				    emulateJSON: true,
				    params: params
				}).then(function(data) {
					var res = data.data;
					if (res.errcode==0) {
						console.log(res);
					}
				}, function(error) {
				    //error
				});
			}
			else{
				self.Toast('请选择是否遵循实验室预约规则');
				
			}
			

		},
		change_agree(){
			var self = this;
			self.agree=!self.agree;
		}
	},
	components : {
		'g-header' : header,
		'g-footer' : footer,
		'mt-swipe' : Swipe,
		'mt-swipe-item' : SwipeItem,
		'mt-popup' : Popup
	}
}
</script>
<style lang="scss">  
  @import "../../style/page/booking/select_booking_time";
</style>