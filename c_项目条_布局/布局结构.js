// 2017-11-30 09:17:28
// 点击 : 
// 可以是 null
// 或者是 一段<js> 



//重要: <输入>和<点击>不能同时true,否则编译时报异常 .
//
//2017-11-30 10:41:48
// 取消<跳转> , 
// 因为 <点击>是一段<js> , 
// 在<js>里面 描述<跳转>这个动作 .
// 
// 2017-11-30 11:08:43
// 取消<监听>
// <点击>设定为一个控制件 , 
// 详细可以查看<点击操作>
// 


SYS.项目条布局.单行 = function(输入, 点击,  // 
	文字, 文字位置, 字体颜色, //
	底色, 高度) {

	// 高度 : 大 , 中 , 小

	// 位置 : 靠前 , 居中 , 靠后

	// TODO
	// 输出的端口 , 从<系统>中找

	// TODO
	// 必须考虑 css的应用
};

// 单行, 分前后
SYS.项目条布局.单行2 = function(输入, 点击, // 
	文字1, 文字1位置, 字体1颜色, //
	文字2, 文字2位置, 字体2颜色, //
	底色) {

	// TODO
	// 输出的端口 , 从<系统>中找

	// TODO
	// 必须考虑 css的应用
};

// 
SYS.项目条布局.双行 = function(输入, 点击,  // 
	文字1, 文字1位置, 字体1颜色, //
	文字2, 文字2位置, 字体2颜色, //
	底色1, 底色2) {

	// TODO
	// 输出的端口 , 从<系统>中找

	// TODO
	// 必须考虑 css的应用
};

// 
SYS.项目条布局.分隔 = function(文字, 文字位置, 字体颜色, //
	底色, 高度) {

	// 文字 : false / null / '' //表示没有标题

	/////////////
	//          //
	// TODO    //
	//         //
	// 调用 <单行> //
	//         //
	/////////////
};