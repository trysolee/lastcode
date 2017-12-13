// UP : 需要上传的BN集合
// 如果 UP : null , 就根据<BUF>设置 UP
// 
SYS.BX.new = function(DB名, UP) {



};

// 

var BX = {

	DB: DB数据, // <DB>的静态数据 // 包含<BUF>等信息

	DAT: {
		n: '小猪', // 孩子昵称
		t: '12', // 孩子年龄
	},



	get类型: function(BN) {
		// 返回变量的类型
		// 

	},

	get基类: function(BN) {
		// 返回变量的类型
		// 

	},

	关键字: function() {

		// 返回关键字的<BN>
		// 
	},

	有修改: function() { // true : 有修改

		return false;
	},


	get: function(BN) {
		// 返回变量的数值
		// 

	},

	put: function(BN, v) {
		// 设置变量的数值
		// 
		// 并标志<已修改>
		// 
	},

	// 把默认的值都补上
	// 
	// 不要执行 : 从<页堆>搜索变量值 
	// 如果需要从<页堆>里搜索数据 , 在<监听>里面设置
	// 
	新建初始化: function() { // true : 有修改


	},



	setDAT: function(d) {
		// 
		// 重新设置 <BX>的 <数据组>
		// 
		// 例如 : <list> 遍历<DB>时 , 就需要
		// 不断更新<BX>的<数据组>
		// 
	},

	缓存TMP: function() {

		// 判断有没有修改 , 
		// 如果有 , 缓存<TMP>
		// 

	},

	// TODO 2017-12-05 09:03:49
	// 计划取消
	// 
	getDB全数据: function() {

		//2017-11-30 09:11:42 
		//
		//返回整个<DB>表的全部数据 , ( 已经BUF 的数据 )
		//

		// 返回一个arr
		// 
	},


	// 2017-12-05 09:04:01
	// 
	// 遍历 整个DB 的三个工具
	BX开始: function() {



	};


	BX下一个: function() {



	};

	BX结束: function() {



	};



	getItem: function() {
		// 返回 DB.Item ; 
	},



}