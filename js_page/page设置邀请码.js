ROOT.add_PAGE('设置邀请码', {

	DB : [// ------------------ <DB>
	[ 'A', 'db注册邀请', 'I', [//
	'密码数', //
	] ], //

	], // ------------------------------
	发送 : [// ------------------ <发送>

	[ 'SF_随机数', // 
	'A', '密码', //
	'常数', '64',// 随机数位数
	], //

	], // ------------------------------
	监听 : [// ------------------ <监听>

	[ '更新OK', //
	[ 'SF_显示对象二维码', // 
	'A' ], //
	], //

	],
});