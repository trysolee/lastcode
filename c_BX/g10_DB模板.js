var db模板 = {

	// . . 用于 批量上传文件
	// 
	// . . 有一些<文件> , <数据> 新建后暂时不提交到服务器
	//
	// . . 本地DB , 分为<已经更新> 和 <暂存>两个部分
	//
	// . . <暂存>部分 不能参与 <page>
	//
	禁止自动更新 : true,

	DB : { // 表项class
		孩子id : {
			类型 : 'ID',

			主键 : true,
			自增加 : true,
		},

		家庭id : {
			类型 : 'ID',
			引用 : 'db家庭',

			一般键 : true,
		},

		孩子昵称 : {
			类型 : '昵称',
			数碑 : true,

			唯一键 : true,

		},

		存款时间 : {
			类型 : '数',
		},

		孩子年龄 : {
			类型 : '数',
			最大 : 12,
			最小 : 3,
		},

		权限 : {
			类型 : '选项',

			// byte
			opt : [ //
			'家长', //
			'管理员', //
			],
		},

	},

}
