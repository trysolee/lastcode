// ################################################
// ################################################

SYS.SYS.add_组件('客端工具', '客户端', 'js', {



	参数: {


		条码: {
			类型: '条码',

			set中继: function(dat, val, callback) {
				// TODO
				// 等候完成 , 回调callback.go()

			},

			set: function(dat, val) {
				// TODO

			},

			get中继: function(dat, val, callback) {
				// TODO
				// 等候完成 , 回调callback.go()

			},

			get: function(dat, val) {
				// TODO

				// 需要回调function

				return val;
			},

		},

		二维码: {
			类型: '二维码',
			set中继: function(dat, val, callback) {
				// TODO
				// 等候完成 , 回调callback.go()

			},

			set: function(dat, val) {
				// TODO

			},

			get中继: function(dat, val, callback) {
				// TODO
				// 等候完成 , 回调callback.go()

			},

			get: function(dat, val) {
				// TODO

				// 需要回调function

				return val;
			},


		},

		随机数_最大: {
			类型: '数',
			初值: 99999999,
		},

		随机数_最小: {
			类型: '数',
			初值: 9,
		},

		随机数: {
			类型: '串',

			get: function(dat, val) {
				var max = dat[随机数_最大].get();
				var min = dat[随机数_最小].get() - 1;

				var v = min + Math.ceil(Math.random() * (max - min));
				val.set(v);

				return val;
			},
		},

		新用户名: {
			类型: '串',

			set: function(dat, val) {
				// TODO
				// 设置 旧用户名 
			},

			get: function(dat, val) {
				// TODO
				// 返回 不重复的<新用户名>
				return val;
			},
		},

	}
});


// ################################################
// ################################################
// 用户数据 , 登陆数据
SYS.SYS.add_组件('UD', '客户端', 'js', {

	初始化: function(dat) {

		/// TODO
		// 从文件读出
	},



	参数: {

		有登陆数据: {
			类型: '布尔',
			初值: false,
		},

		已经登陆: {
			类型: '布尔',
			初值: false,
		},

		用户名: {
			类型: '串',
			初值: null,
		},

		密码: {
			类型: '串',
			初值: null,
		},
	},

});



// ################################################
// ################################################
// 
SYS.SYS.add_组件('文本文件读写', '客户端', 'js', {

	初始化: function(dat) {

		/// TODO
		// 从文件读出
	},



	参数: {

		文件: {
			类型: '文件',

			set中继: function(dat, val, callback) {
				// TODO
				// 等候完成 , 回调callback.go()

			},

			set: function(dat, val) {
				// TODO

			},

			get中继: function(dat, val, callback) {
				// TODO
				// 等候完成 , 回调callback.go()

			},

			get: function(dat, val) {
				// TODO

				// 需要回调function

				return val;
			},

		},

		get串: {
			类型: '串',
			set中继: function(dat, val, callback) {
				// TODO
				// 等候完成 , 回调callback.go()

			},

			set: function(dat, val) {
				// TODO

			},

			get中继: function(dat, val, callback) {
				// TODO
				// 等候完成 , 回调callback.go()

			},

			get: function(dat, val) {
				// TODO

				// 需要回调function

				return val;
			},
		},

		set串: {
			类型: '串',
			set中继: function(dat, val, callback) {
				// TODO
				// 等候完成 , 回调callback.go()

			},

			set: function(dat, val) {
				// TODO

			},

			get中继: function(dat, val, callback) {
				// TODO
				// 等候完成 , 回调callback.go()

			},

			get: function(dat, val) {
				// TODO

				// 需要回调function

				return val;
			},
		},
	},

});

// ################################################
// ################################################
// 
// XID
// 
SYS.SYS.add_组件('XD', '客户端', 'js', {

	参数: {

		家庭ID: {
			类型: 'ID',
			初值: '-1',
		},

		家庭名称: {
			类型: '串',
			初值: '',
		},

		我的ID: {
			类型: 'ID',
			初值: '-1',
		},

		我的昵称: {
			类型: '串',
			初值: '',
		},

		用户名: {
			类型: '串',
			初值: '',
		},

		我是管理员: {
			类型: '布尔',
			初值: false,
		},

		// 10000 : 没有上传进度
		// -1 ~ -9999 : 上传文件的编号
		上传进度: {
			类型: '数',
			初值: 10000,
		},
	},

});

// ################################################
// ################################################
// 
