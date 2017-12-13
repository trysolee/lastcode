ROOT.add_DB('db家庭', {

	DB : {
		家庭id : {
			类型 : 'ID',
			主键 : true,
			自增加 : true,
		},

		家庭名称 : {
			类型 : '昵称',
		},

	},

	Item : {

		大标题b : '家庭名称',

	},

	BUF : {
		DB : 'ALL',
	},

});