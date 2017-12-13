// a : 变量数组 ( 包含<函数名> )
// 
// 这个用于<执行>

SYS.扩展.参数读取_执行 = function(a , i) {

	this.arr = a;
	this.index = i; // 第二个开始是变量

	this.下一个参数 = function() {
		var s = this.arr[this.index++];
		//
		switch (s) {
			case 布尔:

				break;
			case 常数:

				break;
			case 常串:

				break;
			case FLY:

				break;
			case UD:

				break;
			case XD:

				break;
			case BX:

				break;
			default:
				if (前缀 >= 'A' && 前缀 <= 'Z') {


				}

		}
	};

	this.没有参数了 = function() {

		//
	};

};