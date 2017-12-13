var page模板 = {

	// <解密>
	// 
	解密 : function() {
	},

	// <反序列化>
	// 反序列化全部BX , ( 一个 BX 数组 )
	// 
	反序列化 : function() {
	},

	// A : BX对象
	序列化 : function(A) {
	},

	// <加密> 只加密 部分 BX
	// 
	// A : BX对象
	加密 : function(A) {
	},

	// 编号 : <DB>的编号 ,
	// ID : <主JP> 对应的 <BX>的 ID值
	// 返回 : BX
	获取BX : function(编号, ID) {
	},

	// 编号 : <DB>的编号 ,
	// 唯一键 :
	// ID : <主JP> 对应的 <BX>的 ID值
	// 返回 : BX
	获取BX_唯一键 : function(编号, 唯一键, ID) {
	},

	// 编号 : <DB>的编号 ,
	// ID : <主JP> 对应的 <BX>的 ID值
	// 返回 : JP
	获取JP : function(编号, ID) {
	},
//
// JP.是否空闲() // true : 畅通 // false : 堵塞
// JP.锁定()
// JP.解除锁定()
// JP.主JP_A检查() // 对版本号敏感
// JP.主JP_B检查() // 对版本号不敏感 , 只进行堵塞
// JP.ARR_检查 ( Index ) // 对子JP检查 , 对版本号始终敏感
// JP.主JP_更新();
//
// Index : ARR的下标
// ID : ARR 对应的'主键'
// OPT : 修改 , 新建 , 删除
// JP.ARR_更新( Index , ID ,OPT ) ;

// <DB . SQL>
// 完善<DB>
// 
// BX.select() // 根据 '主键' , '唯一键' 读取数据

// <权限>
// 
// 批处理 ( 编译 )

// <批处理>
//
// 批处理 ( 编译 )

}
