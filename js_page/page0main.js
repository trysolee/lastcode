ROOT.add_PAGE('首页', {


	VIEW: [ // -----------------------
		['_'], // 
		['_', '跳转', '孩子'], // 跳转到<LIST>
		['_'], // 
		['_', '跳转', '剧本'], // 跳转到<LIST>
		['_'], // 
		['_', '跳转', '家长'], // 跳转到<LIST>
		['_'], // 
	],

	// -------------------------------
	监听: [ // ------------------<监听>

		['page创建', // 
			// . .

			// 把'首页' 设置好后 ,
			// 立即跳到 '扫描剧本' // 如果没有孩子在忙
			// 立即跳到 'db孩子' 如果有孩子在忙
			// 
			['SF_if_MF_fun', // 
				['MF_家里有孩子正忙'], // -- ( if )
				['SF_set', // ------------- 有孩子忙 ( true )
					/*  */
					'后台控制', 'goPage', 'PageS', '孩子忙碌', // 
				], //
				['SF_set', // -------------孩子都空闲 ( false )
					/*  */
					'后台控制', 'goPage', 'PageS', '扫描剧本', //
				], //
			], //
			// . .
		],

	],
	// ---------------------------------
});