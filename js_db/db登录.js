
ROOT.add_DB('db登录', {

	DB : {

		家长id : {
			类型 : 'ID',
			主键 : true,
		},

		用户名 : {
			类型 : '用户名',
			唯一键 : true,
		},

		密码 : {
			类型 : '密码',
		},

	},

	BC : {

		密码确认 : {
			类型 : '密码',
		},

		旧密码 : {
			类型 : '密码',
		},

		// 用于 扫描登录
		码串 : {
			类型 : '二维码',

		},

	},

});