// * * *
// EDIT_VIEW

//

// 不能有 <按键> , <跳转>
//

// 可以有<显示> 和 <输入>
//

// 如果 没有<VIEW> , 又有<EDIT> ,直接进入<EDIT>
// . . 当然这些操作都是建立在<权限>的基础上
//

var DB = {

	VIEW: [ // =========
		['显示', '家庭id'], //
		['输入', '孩子昵称'], //
		['显示', '存款时间'], //
		['输入', '孩子年龄'], //
		['_'], // 
	],
	// ---------------------------------
	监听: [ // ------------------<监听>

		['孩子昵称', // 不可能同时是<输入>和<按键>

			['SF_字串连加', // 

				'常串', '< ', // 
				'BX', '孩子昵称', // 
				'常串', ' >', // 
			], //
			// . .
		],

	],
	// ---------------------------------

}