ROOT.add_DB('db执行中', {

	DB : {

		孩子id : {
			类型 : 'ID',
			引用 : 'db孩子',

			主键 : true,
		},

		剧本id : {
			类型 : 'ID',
			引用 : 'db剧本',

		},

		家庭id : {
			类型 : 'ID',
			引用 : 'db家庭',

		},

		开始时间 : {
			类型 : '日期时间',
		},

	},

	BUF : {
		DB : 'ALL',
	},

});