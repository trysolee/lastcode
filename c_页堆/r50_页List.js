SYS.页堆.list = function(obj) {

	this.pageS = obj;


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


	this.创建 = function() {

		var bx = new SYS.BX.new(this.pageS.DB, null);

		this.addBX(null, bx);

		// 解析<LIST.DB备用>
		if (this.pageS.DB备用) {
			a = this.pageS.DB备用;
			for (var i = 0; i < a.length; i++) {
				this.加载DB(a[i]);
			};
		};

		// 获取 全部数据
		var arr = bx.getDB全数据();
		arr = this.筛选(arr);

		if (arr.length > 0) {

			// TODO
			// 
			// 显示 <this.pageS.按键>
			// <this.pageS.跳转>
			// 默认有<NEW>
			// 

			arr = this.排序(arr);

			this.显示(arr);

			// TODO
			// 
			// 构建 <响应>
			// 
			// 默认 有'EDIT' ( 如果有'EDIT' )
			// 默认 有 'DEL' ( 如果有'DEL')
			// 

		} else {

			// TODO
			// 
			// 执行<代码块> , <空集合>
			// 


		}

	};

	//////////////////////
	//                  //
	//                  //
	// 上面是<pageS> 标准函数  //
	//                  //
	//                  //
	//////////////////////

	this.加载DB = function(arr) {
		var bx = new SYS.BX.new(arr[1], null);

		SYS.页堆.addBX(arr[0], bx);
	};

	this.解析Item = function(it) {

		var 两行文字 = false;

		var txt1, txt2;

		var bx = SYS.页堆.getBX();

		var id = bx.get(bx.关键字());
		var 点击 = new SYS.点击操作('list', id);
		var c = SYS.色彩控制;


		if (it.大标题) { //
			// TODO 
		} else if (it.大标题b) { //

		} else if (it.大标题f) { // 

		};

		if (it.小标题) { //

		} else if (it.小标题b) { //

		} else if (it.小标题f) { // 

		};

		// 2017-11-30 10:24:47
		// 略图暂时不处理
		// 留到下一个版本
		// 

		if (两行文字) {
			SYS.项目条布局.双行(null, null, 点击, //
				txt1, '居中', c.文字1(), //
				txt2, '靠前', c.文字2(), //
				c.底色1(), c.底色2() //
			);
		} else {
			SYS.项目条布局.单行(null, null, 点击, //
				txt1, '靠前', c.文字1(), //
				c.底色1(), '高' //
			);

		};

	};

	this.筛选 = function(arr) {

		var arr1 = [];
		for (var i = 0; i < arr.length; i++) {

			bx.setDAT(arr[i]);

			if (this.pageS.筛选byJP) { // 

				// TODO
				// 
				// 判断是否属于符合JPS要求
				// 否则  continue;
			};

			if (this.pageS.筛选) { // 

				// TODO
				// 
				// 执行<代码块> , this.pageS.筛选
				// 判断是否出现异常 , 
				// 有异常  continue;
			};

			arr1.push(arr[i]);
		};

		return arr1;
	};

	this.排序 = function(arr) {
		if (this.pageS.顺序) {
			// TODO
			// 
			// 排序
			// 
		} else if (this.pageS.倒序) {
			// TODO
			// 
			// 排序
			// 
		}
	};

	// 显示 , 遍历
	this.显示 = function(arr) {

		var it = this.pageS.Item;
		if (!it) {
			it = bx.getItem();
		};


		for (var i = 0; i < arr.length; i++) {

			bx.setDAT(arr[i]);

			if (this.pageS.筛选byJP) { // 

				// TODO
				// 
				// 判断是否属于符合JPS要求
				// 否则  continue;
			};

			if (this.pageS.筛选) { // 

				// TODO
				// 
				// 执行<代码块> , this.pageS.筛选
				// 判断是否出现异常 , 
				// 有异常  continue;
			};

			if (i == 0) {
				// TODO
				// 
				// 执行<代码块> , this.pageS.接收第一个
			}
			// TODO
			// 
			//  执行<代码块> , this.pageS.接收每一个
			// 
		};

		// TODO
		// 
		//  执行<代码块> , this.pageS.接收结束
	};

	// --------



};