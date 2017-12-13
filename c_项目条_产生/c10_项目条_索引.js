// 
// 

// 2017-11-30 11:11:19
// 
// <点击>设定为一个控制件 , 
// 详细可以查看<点击操作>
// 

SYS.数据类型显示.格式字串 = function(BX, BN, // 
	输入, 点击, 提示) {

	var c = SYS.色彩控制;
	var txt1, txt2, 监听 = BN;

	txt2 = BX.get(BN);

	if (提示) {
		txt1 = 提示;
	} else {
		var sb = BX.sb(BN);
		txt1 = sb.别名 ? sb.别名 : BN;
	}

	//  todo 2017-11-30 09:24:08
	//  需要重新处理 <点击>
	//  
	SYS.项目条布局.双行(输入, 点击, 监听, //
		txt1, '靠前', c.文字1(), //
		txt2, '居中', c.文字2(), //
		c.底色1(), c.底色2());

};

SYS.数据类型显示.手机号 = function(BX, BN, // 
	输入, 点击, 提示) {

	var c = SYS.色彩控制;
	var txt1, txt2, 监听 = BN;

	txt2 = BX.get(BN);

	if (提示) {
		txt1 = 提示;
	} else {
		var sb = BX.sb(BN);
		txt1 = sb.别名 ? sb.别名 : BN;
	}

	//  todo 2017-11-30 09:24:08
	//  需要重新处理 <点击>
	//  

	SYS.项目条布局.双行(输入, 点击, 监听, //
		txt1, '靠前', c.文字1(), //
		txt2, '靠后', c.文字2(), //
		c.底色1(), c.底色2());

};

SYS.数据类型显示.条码 = function(BX, BN, // 
	输入, 点击, 提示) {

	var c = SYS.色彩控制;
	var txt1, txt2, 监听 = BN;

	txt2 = BX.get(BN);

	if (txt2.length < 8) {

		txt2 = '********';
	} else {
		var l = txt2.length;
		txt2 = txt2.substring(0, 2) + //
			'*******' + txt2.substring(l - 3, l);
	}

	if (提示) {
		txt1 = 提示;
	} else {
		var sb = BX.sb(BN);
		txt1 = sb.别名 ? sb.别名 : BN;
	}

	//  todo 2017-11-30 09:24:08
	//  需要重新处理 <点击>
	//  

	SYS.项目条布局.双行(false, true, 监听, //
		txt1, '靠前', c.文字1(), //
		txt2, '靠后', c.文字2(), //
		c.底色1(), c.底色2());


	SYS.页面监听.add(BN, function() {
		//

	})
};