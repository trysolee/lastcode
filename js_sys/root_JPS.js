ROOT.add_JPS({

	db家庭 : { // U.S.D

		// db家庭.家庭id == XID.$XD_家庭ID
		初始化 : [ '家庭id', '$XD_家庭ID' ],

		ARR : [ 'db家长', 'db奖品', 'db注册邀请' ], // U.S.I.D
		历史长度 : [ '0', '5', '0' ],
	},

	db孩子 : { // U.S.D

		// db孩子.家庭id == XID.$XD_家庭ID
		初始化 : [ '家庭id', '$XD_家庭ID' ],

		arr : [ 'db执行中', 'db历史' ],// U.S.I.D
		历史长度 : [ '0', '10' ],
	},

	db剧本 : { // U.S.D

		// db剧本.家庭id == XID.$XD_家庭ID
		初始化 : [ '家庭id', '$XD_家庭ID' ],

		arr : [ 'db剧本提示', 'db码串关联' ],// U.S.I.D
		历史长度 : [ '0', '0' ],
	},
});

