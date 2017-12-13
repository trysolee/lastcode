SYS.页堆.page = function(obj) {

	this.pageS = obj;



	this.重置BX = function(DB代号) {

		// 2017-11-30 16:02:25
		// 
		// DB代号 : null
		// 表示<BX>
		// 

	}

	this.addBX = function(DB代号, BX) {

		// todo

		// 加一个<BX> , 立即<重置>它
		// this.重置BX(BX); // <取消>
		// 
		// 不一定每次 <addBX>都需要<重置> 2017-11-30 09:06:23
		// 例如 : 创建<list>时 , 需要<遍历><DB>
		// 但是设置<BX>的数值 都不是<重置>出来的
		// 而是通过<BX.setDAT>设置

	}



	this.getBX = function(DB代号) {

		// TODO 2017-11-30 10:19:11
		// 
		// DB代号 : null
		// 返回<BX>
		// 

		// 通过 <BX> , <A> , <B> 等 
		// 返回 DB
	}



	this.触发监听 = function(监听代号) {

		// todo
		// 
		// 可能触发多个<监听>
		// 

	};

	this.加载DB = function(arr) {

		var bx = new SYS.BX.new(arr[1], arr[3]);

		SYS.页堆.addBX(arr[0], bx);

		switch (arr[2]) {

			case 'S':
			case 'U':
			case 'D':
				SYS.页堆.重置BX(bx);
				break;
		}
	};

	this.创建 = function() {

		// 解析<page.DB>
		var a = this.pageS.DB;
		for (var i = 0; i < a.length; i++) {
			this.加载DB(a[i]);
		};

		// 解析<page.加密>
		if (this.pageS.加密) {
			a = this.pageS.加密.DB;
			for (var i = 0; i < a.length; i++) {
				this.加载DB(a[i]);
			};
		};

		//  解析<page.VIEW>
		if (this.pageS.VIEW) {
			a = this.pageS.VIEW;
			for (var i = 0; i < a.length; i++) {
				SYS.VIEW.show_page(a[i]);
			};
		};
	};

}