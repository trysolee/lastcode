var ROOT = {

	SYS: {

		// 这是个add_LIST用于（初始化）
		add_LIST: function(注册名, 相关DB, OBJ数据) {
			// TODO
		},

		add_DB: function(注册名, OBJ数据) {
			// TODO
		},

		add_PAGE: function(注册名, OBJ数据) {
			// TODO
		},

		add_JPS: function(OBJ数据) {
			// TODO
		},

		add_组件: function(注册名 , OBJ数据) {
			// TODO
		},

	},

	// . . <BUF监听> 可以被BUF更新时<触动>
	// 但是他不会马上执行 ,
	//
	// . . 等全部<BUF>完成后
	// 再按顺序<执行>
	//
	// . . <执行顺序> 根据 <BUF监听>里面的编辑顺序
	//
	BUF监听: [

		[ // 不接受 <BX>
			'计算家庭有多少个孩子', //

			// TODO

		],

	],


	入口: [
		[
			'手机入口', //索引

			[ //

				['SF_set', //
					'后台控制', 'goPage', 'PageS', '登录_自动', //
				], //
			],
		],


		[
			'PC入口', //索引

			[ //

				['SF_set', //
					'后台控制', 'goPage', 'PageS', '登录_自动', //
				], //
			],
		],

		[
			'平板入口', //索引

			[ //

				['SF_set', // 
					'后台控制', 'goPage', 'PageS', '登录_自动', //
				], //
			],
		],

	],



	// 家
	web: 'http://localhost:8080/timebank1/tb1',

	// 公司
	// web : 'http://localhost:8080/tb/tb1',




};
