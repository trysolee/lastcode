SYS.变量.new = function(类型, 前缀, 值) {

	// TODO
	// 新建一个 <变量> , 但并不负责<注册>
	// 

};

SYS.变量.get = function(前缀, 名称) {



};


SYS.变量.int = {

	设为: function(b) { // 获取另一个<变量>的值 , 
		this.set(b.get());

	},

	等于: function(b) {

		switch (b.基本型) {

			case 'str':
				return (this.get() + '') == b.get();

			default:
				return this.get() == b.get();
		}
	},

	get: function() {
		return this.数值;
	},


	set: function(v) {
		this.数值 = v;
	},

};

SYS.变量.str = {

	设为: SYS.变量.int.设为,

	等于: function(b) {

		switch (b.基本型) {

			case 'long':
			case 'int':
				return (b.get() + '') == this.get();

			default:
				return this.get() == b.get();
		}
	},

	get: SYS.变量.int.get,

	set: SYS.变量.int.set,

};

SYS.变量.bl = {

	设为: SYS.变量.int.设为,

	等于: function(b) {
		return this.get() == b.get();
	},

	get: SYS.变量.int.get,

	set: SYS.变量.int.set,
};

SYS.变量.bv = { // <BX> <A> <B>

	get: function() {
		return this.BX.get(this.BN);
	},

	set: function(v) {
		this.BX.put(this.BN, v);
	},
};


SYS.变量.基类设置 = function(a) {

	switch (a.基本型) {

		case 'int':
			a.设为 = SYS.变量.int.设为;
			a.等于 = SYS.变量.int.等于;
			a.get = SYS.变量.int.get;
			a.set = SYS.变量.int.set;
			break;
		case 'str':
			a.设为 = SYS.变量.str.设为;
			a.等于 = SYS.变量.str.等于;
			a.get = SYS.变量.str.get;
			a.set = SYS.变量.str.set;
			break;
		case 'bl':
			a.设为 = SYS.变量.bl.设为;
			a.等于 = SYS.变量.bl.等于;
			a.get = SYS.变量.bl.get;
			a.set = SYS.变量.bl.set;
			break;
	}

	switch (a.页种) {

		case 'DB':
		case 'page':
			this.get = SYS.变量.bv.get;
			this.set = SYS.变量.bv.set;
	}
};

SYS.变量.二元变量_执行 = function(前缀, 变量) {



	this.参数的类型 = null; // 当前参数的类型对象
	this.基本型; // 变量的基本型;

	this.前缀 = 前缀;
	this.变量名称 = 变量; // 如果是<多元参数> , <变量名称>是一个数组

	// 把值设为另一个变量
	this.设为 = function(b) {

		// TODO // 可能 b 不是同一个类型,需要转换

	};


	// 判断与另一个变量是否相等
	// 可以是不同类型
	// 如 : '123' == 123
	this.等于 = function(b) {

		return false; // false : 不相等
	};


	this.get = function() {

	};


	this.set = function(v) {

	};
};

SYS.变量.变量_布尔 = function(前缀, 数值) {


	this.参数的类型 = '布尔'; // 
	this.基本型 = 'bl'; //

	this.前缀 = 前缀;
	this.数值 = 数值; //

	SYS.变量.基类设置(this);
};

SYS.变量.变量_数 = function(前缀, 数值) {
	this.参数的类型 = '数'; // 
	this.基本型 = 'int'; // 

	this.前缀 = 前缀;
	this.数值 = 数值; //

	SYS.变量.基类设置(this);
};


SYS.变量.变量_串 = function(前缀, 数值) {

	this.参数的类型 = '串'; // 
	this.基本型 = 'str'; // 

	this.前缀 = 前缀;
	this.数值 = 数值; //

	SYS.变量.基类设置(this);
};

SYS.变量.变量_用户名 = function(前缀, 数值) {

	this.参数的类型 = '用户名'; // 
	this.基本型 = 'str'; // 

	this.前缀 = 前缀;
	this.数值 = 数值; //

	SYS.变量.基类设置(this);
};


SYS.变量.变量_昵称 = function(前缀, 数值) {

	this.参数的类型 = '昵称'; // 
	this.基本型 = 'str'; // 

	this.前缀 = 前缀;
	this.数值 = 数值; //

	SYS.变量.基类设置(this);
};

SYS.变量.变量_Email = function(前缀, 数值) {

	this.参数的类型 = 'Email'; // 
	this.基本型 = 'str'; // 

	this.前缀 = 前缀;
	this.数值 = 数值; //

	SYS.变量.基类设置(this);
};


SYS.变量.变量_手机号 = function(前缀, 数值) {

	this.参数的类型 = '手机号'; // 
	this.基本型 = 'str'; // 

	this.前缀 = 前缀;
	this.数值 = 数值; //

	SYS.变量.基类设置(this);
};

SYS.变量.BV = function(前缀, 数值, 页种) {


	this.前缀 = 前缀;
	this.数值 = 数值; //

	this.页种 = 页种; // 'DB' or 'page'

	this.BX = SYS.页堆.getBX(前缀);
	this.BN = 数值;

	//
	this.参数的类型 = this.BX.get类型(this.BN); // 
	this.基本型 = this.BX.get基类(this.BN); // 

	SYS.变量.基类设置(this);

};