ROOT.add_DB('db注册邀请', {

	DB : {
		邀请id : {
			类型 : 'ID',
			主键 : true,
			自增加 : true,
		},

		密码 : {
			类型 : '密码',

		},

	},

	BUF : {
		长度 : 1,

		DB : 'ALL',

		加密 : true,
	},

});