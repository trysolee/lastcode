ROOT.PAGE.登录_输入 = {

	注册 : '登录_输入',

	加密 : {

		DB : [// ------------------------
		[ 'M', 'db登录', 'S', [//
		'用户名', //
		] ], //
		],

		密码 : '密码', // DB项 [ 'M', '密码' ],//

	},

	VIEW : [// -----------------------
	[ '_' ],// 
	[ '_', '按键', '注册' ],// page注册 '注册' // db注册邀请.注册
	[ '_' ],// 
	[ '_', '按键', '扫描登录' ],// page注册 '扫描登录'
	[ '_' ],// 
	[ 'M', '输入', '用户名' ],// 
	[ 'M', '输入', '密码' ],// 
	[ '_' ],// 
	],

	LSE : [// --------监听 --------

	// 页面跳转
	[ '$_CallBack_$', '$_Page_$', '剧本执行', ], // TODO

	],

	// --------------------------------------
	// ------------ PHP , JS ----------------
	// --------------------------------------

	SER : [// ---------------------SER
	[ 'M',// select db登录
	'用户名', '#构造登录数据_用户名',//
	],//			

	],// ---------------------------SER end

// --------------------------------------
// ---------------- PHP ----------------
// --------------------------------------

}