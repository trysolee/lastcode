ROOT.add_JPS({

	// 每个用户设立一个<JPS>的<心跳>
	// <JPS>不发送到 客户端 , 只发送 <心跳>
	// 只要<心跳> 匹配 , 就认为客户端的 缓存数据正常

	// 每一次 <JPS> 增加了 , 或者 减少了一项 ,
	// . . 不需要给特殊操作 ,
	// . . 因为 , 每次连接结束以后 , 都需要把整个<JPS>比较一次
	// . . 此时 , 需要把全部<JPS>都select 出来

	db家庭: { // U.S.D



		// 暂时用 这个
		初始化: ['家庭id', '$XD_家庭ID'], 
		

		ARR: ['db家长', 'db奖品', 'db注册邀请'], // U.S.I.D
		历史长度: ['0', '5', '0'],
		// 注 : 如果 '历史长度'<=1 ,
		// 说明有更新就全部更新全部数据

	},

	// 步骤 :
	// 1 . 判断 总和是否一致
	// 2 . 如果不一致 ,
	// 3 . 先判断'主JP'版本号
	// 4 . 再判断'每一个ARR'
	// 5 . 如果其中一个ARR 异常
	// 6 . 选择, 筛选 它的XXXARR (历史)
	// 7 . 判断本地要'更新' 和 '删除' 的数据
	// 

	db孩子: { // U.S.D
		// db孩子.家庭id == XID.$XD_家庭ID
		初始化: ['家庭id', '$XD_家庭ID'],

		arr: ['db执行中', 'db历史'], // U.S.I.D
		历史长度: ['0', '10'],

	},

	db剧本: { // U.S.D

		// db剧本.家庭id == XID.$XD_家庭ID
		初始化: ['家庭id', '$XD_家庭ID'],

		arr: ['db剧本提示', 'db码串关联'], // U.S.I.D
		历史长度: ['0', '0'],
	},

	// 注 :
	// 如果 : 'db家长' 里面包含'管理员'权限的数据 和
	// '一般'数据 , 那么应该把'db家长'分成两个'db'

	// 如果 : 'db串码关联'有两个JP需要用到 ,
	// 那么应该把'db串码关联' 分成两个'db'

	// 如果 : 'db串码关联'同时涉及到'奖品' 和 ' 剧本'
	// 那么 , 'db串码关联' 也不能同时出现在 两个JP里面
	// 需要独立存在于另一个JP
});