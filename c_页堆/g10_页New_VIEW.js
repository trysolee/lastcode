SYS.页堆.NEW = function(obj) {

	this.pageS = obj;



	this.创建 = function() {

		var bx = new SYS.BX.new(this.pageS.DB, null);
		bx.新建初始化();

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
		// 创建<取消键>
		// 

	};


	this.getVIEW = function() {

		// TODO
		// 
		// 返回 <EDIT> , <NEW> , <VIEW>
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



	};

	//////////////////////
	//                  //
	//                  //
	// 上面是<pageS> 标准函数  //
	//                  //
	//                  //
	//////////////////////



	this.取消 = function() {



	};
}