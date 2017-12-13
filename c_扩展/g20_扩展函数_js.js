

SYS.扩展函数.SF_set = {

	参数清单: [ // 
		{ // 0
			可以写: true;
		}, //
		{ // 1
			重复: 0, // 重复从 0 再读入变量
			操作: function(arr, index, fly) {
				arr[index - 1].set(arr[index].get());
			},
		},
	],

};

// -----------------------------------------
SYS.扩展函数.SF_字串连加 = {

	参数清单: [ // 
		{ // 0

		}, //
		{ // 1
			重复: 1, // 返回到 1 重新输入
			操作: function(arr, index, fly) {
				arr[0].set(arr[0].get() + arr[index]);
			},
		},
	],

};