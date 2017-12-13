

SYS.页堆.EDIT = function(obj) {

	this.pageS = obj;



	this.创建 = function() {

		var bx = new SYS.BX.new(this.pageS.DB, null);
		this.addBX(null, bx);

		//  解析<VIEW>
		//  
		var a = this.getVIEW();
		if (a.VIEW) {
			a = a.VIEW;
			for (var i = 0; i < a.length; i++) {
				SYS.VIEW.show_DB(a[i], 0);
			};
		};

		// 创建<返回键>
		// 
		// 如果已经有修改 , 
		// 创建<撤销修改>
		// 
		// 

	};

	this.getVIEW = function() {

		// TODO
		// 
		// 返回 <EDIT> 
		// 的 view
		// 
	}

	this.触发监听 = function(监听代号) {

		// todo
		// 
		// 可能触发多个<监听>
		// 

	};

	this.重置BX = function(DB代号) {

		// 2017-11-30 16:02:25
		// 
		// DB代号 : null
		// 表示<BX>
		// 

		// 2017-12-05 16:52:07
		// 
		// 这里的重置 , 是从<页堆>里面找出<关键字>的值
		// 然后,重置 
		// 不会考虑 原来<BX>里面的数据
		// 
	};

	this.addBX = function(DB代号, BX) {

		// todo

		// 加一个<BX> , 立即<重置>它
		// this.重置BX(BX); // <取消>
		// 
		// 不一定每次 <addBX>都需要<重置> 2017-11-30 09:06:23
		// 例如 : 创建<list>时 , 需要<遍历><DB>
		// 但是设置<BX>的数值 都不是<重置>出来的
		// 而是通过<BX.setDAT>设置

	};

	this.getBX = function(DB代号) {

		// TODO 2017-11-30 10:19:11
		// 
		// DB代号 : null
		// 返回<BX>
		// 

		// 通过 <BX> , <A> , <B> 等 
		// 返回 DB
	};

	this.返回 = function() {

		// TODO 
		// 2017-12-05 17:00:31
		// 
		// 判断有没有修改 , 
		// 如果有 , 记录修改
		this.getBX().缓存TMP();



	};


	//////////////////////
	//                  //
	//                  //
	// 上面是<pageS> 标准函数  //
	//                  //
	//                  //
	//////////////////////

}