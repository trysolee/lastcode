//

SYS.后台控制 = {

	// TODO 描述结构参考<本地数据>

	// ---------------------------------------------------
	// 运行控制
	停止 : true, // 终止运行 , 返回

	//

	// ---------------------------------------------------
	// 显示 , 控制 ( 运行结束后执行 )
	ERR : false, // 发生异常
	ErrMsg : 'xx', // 异常信息

	goPage : '剧本', // page 和 list
	标记Page : '首页', // page 的标记 // 为<backTo>准备
	清理页堆 : true, // 清空页堆 , 只剩下当前页

	goBack : true, // 返回前一页

	backTo : '标记', // 

	删除之前 : '标记', // 删除页面到指定标记 ( 这个标记以后的page都删除 )

	删除之后 : '标记',

	显示二维码 : BX, // 结束后 ,显示二维码

	//

	// ----------------------------------
	// 连接 情况
	返回正常 : true, // false : 异常
	返回状态码 : 0,
	返回状态信息 : '',


	// ----------------------------------
	当前系统 : 'win',
	当前运行语言 : 'js',
		
}
