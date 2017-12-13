// a : 变量数组 ( 包含<函数名> )
// 
// 这个用于<检查>

SYS.扩展.参数读取_检查 = function(a) {

	this.arr = a;
	this.index = 1; // 第二个开始是变量

	// 即第一个参数
	// 方便出现<异常>时 描述
	this.函数的名称 = '';

	this.一共读取几个参数 = 0;

	this.下一个参数 = function() {

		//
		return 变量; // TODO
	};

	this.没有参数了 = function() {

		//
	};



};