ROOT.add_PAGE('登录_自动', {
	// 首个页面

	加密: {

		DB: [ // ------------------------
			['M', 'db登录', 'S', [ //
				'家长id', //
			]], //
		],

		密码: '密码', // DB项 [ 'M', '密码' ],//

	},
	// ---------------------------------
	监听: [ // ------------------<监听>

		['page创建', // 

			// . .
			['SF_if_MF_fun', // 
				['MF_有登录数据'], // -- ( if )
				['SF_set', // -------------有 ( true )
					/*  */
					'M', '家长id', '本地', '$我的ID', //
					/*  */
					'M', '密码', '本地', '$密码', //
				], //
				['SF_set', // -------------没有 ( false )
					/*  */
					'FLY', 'goPage', 'PageS', '登录_输入', //
					/*  */
					'FLY', '清理页堆', '布尔', 'true', //
				], //
			], //
			// . .
		],

		['更新OK', // 
			['SF_set', // 
				'FLY', 'goPage', 'PageS', '首页', //
				'FLY', '清理页堆', '布尔', 'true', //
			], //
		],

		['更新EXP', // 
			['SF_set', //
				'FLY', 'goPage', 'PageS', '登录_输入', //
				'FLY', '清理页堆', '布尔', 'true', //
			], //
		],

	],
	// ---------------------------------
	接收: [ // ------------------ <接收>

		['MF_构造XID', // 构造<XID>
			'M', '家长id', //
		], //

	],

});