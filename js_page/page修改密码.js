ROOT.add_PAGE('改密码', {

	DB: [ // ------------------------
		['A', 'db登录', 'L', [ //
			'旧密码', //
			'密码', //
		]], //

		['W', 'db登录', 'U', [ //
			'家长id', //
		]], //

		['B', 'db家长', 'S', [ //
			'家长id', //
		]], //

	],

	VIEW: [ // -----------------------
		['A', '显示', '家长id'], // 
		['A', '输入', '旧密码'], // 
		['A', '输入', '密码', '新密码'], //
		['A', '输入', '密码确认'], //
	],

	// ---------------------------------
	发送: [ // ------------------ <发送>

		['SF_等值', // 
			'M', '密码', //
			'M', '密码确认', // 
			'常串', '密码两次输入不一致', // 异常返回串
		], //

	],
	// ---------------------------------
	权限: [ // ------------------<权限>

		['MF_是自己或管理员', // 
			'B', '家长id'
		], // 

		['#我的家庭', // 
			'B', '家庭id'
		], // 

	],
	// ---------------------------------
	接收: [ // ------------------ <接收>

		['SF_等值', // 
			'A', '旧密码', //
			'W', '密码', // 
			'常串', '旧密码不正确', // 异常返回串
		], //

		['SF_set', // 
			'W', '密码', 'A', '密码', //
		], //

	],

});