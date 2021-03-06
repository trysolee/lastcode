//
// <BX>由<DB>产生 , 
// . . 每个<BX>里面都保存了<DB>

var BX = {

	// <BX> 的 服务端 ( php )

	// 反序列化 出来的<BX>通常是不完整的 <BX>
	// . . 自带有几个关键数据 ( 由客户端上传来的 )/.
	//

	// 自带 <BUF> 列表

	// 上传来的数据保存在一个<对象>里面
	// 如 :
	DAT: {
		n: '小猪', // 孩子昵称
		t: '12', // 孩子年龄
	},
	// 

	// <BX>.重载( ) //
	// . . 根据DAT里面的 '主键' 或 '唯一键' , 获取 <数据库.对象>
	//

	// <BX>.get( <BN> )
	// . . 通过<BN> 获取 <BV>
	// . . 先通过 'DAT' 查找 , 没发现 再从<数据库.对象>里面找
	//

	// <BX>.set ( <BN> )
	// . . 通过 <BN> 设置 <BV>
	// . . 在 'DAT' 里面有的数据 , 保存在 'DAT' 里面
	// 在 'DAT' 里面没有的数据 , 保存在 <数据库.对象> 里面 /.
	// . . 在<BX>创建时 , 把 <BC>的变量都预设到 'DAT' 里面
	// 避免<BC>的数据 掉到<数据库.对象>里面 /.

	// <BX>.设置为修改 ( ARR ) // ARR : 需要更新的<BN>的数组
	//

	// <BX>.设置为新建 ( ARR ) // ARR : 数据输入的<BN>的数组
	// . . <新建>的<BX>除了输入的数据以外 , 还有 系统默认的设置值
	//

	// <BX>.设置为删除( ) // 'D'
	//

	// <BX>.设置为选择( ) // 'S'
	//

	// <BX>.设置DB( <DB>名 ) // 一个数组
	// . . <page>上传的数据没有包含 <DB>名
	// 编译的时候设定 /.
	//

	// <BX>.更新 ( ) //
	// . . 把 'DAT' 更新到 <数据库.对象>
	// 把 <数据库.对象> 更新到数据库
	//

	// <BX>.有修改 ( ) //
	// . . 判断是否需要更新 /.
}