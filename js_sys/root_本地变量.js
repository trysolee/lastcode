ROOT.本地变量 = [ // 
{

	//

	VN : '发生修改',
	类型 : '布尔',

	// 触发 // 监听
	创建时 : 'false', // 首次运行 // ( 举例 )
	启动时 : 'false', // 

	发送时 : 'false', //
	返回时 : 'false', // // ( 举例 )

	输入_变化 : 'true',

},

// JPS心跳
//
// . . <服务器>通过<XD>返回到<客户端>
//
// . . 数据接收结束后 , 把新的<JPS心跳>记录到
// <本地变量>
//
// . . 下次连接时发送 , 检查<服务器>与<客户端>的
// <JPS心跳>是否一致
{

	VN : 'JPS心跳',
	类型 : '数',

	创建时 : '-1000', // 首次运行 // ( 举例 )

},

{

	VN : '$已经登录',
	类型 : '布尔',
	启动时 : 'false', //

},

{

	VN : '$有登录数据',
	类型 : '布尔',

	创建时 : 'false', // 首次运行

},

{

	VN : '$我的ID',
	类型 : 'ID',

},

{

	VN : '$密码',
	类型 : '密码',

},

{

	VN : '上传数据',
	类型 : '串',

},

{

	VN : '临时文件号',
	类型 : '数', // -1 ~ -9999

	创建时 : '-1', //

}, ];