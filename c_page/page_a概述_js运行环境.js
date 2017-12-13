var page模板 = {

	// < FUN >
	// 创建BX : function( 'db家长' , '家长id' )
	// db家长 : DB名称 ( DN )
	// 家长id : '主键' 或 '唯一键'
	//
	// 获得环境变量 : 'A' , 'J' 等变量
	创建BX : function(DN, BN) {
		// 
	},

	// 创建VIEW_用户名_输入 : function( 'A' , '用户名' , '提示' ) // 'A' : BX对象
	// 创建VIEW_Email_显示 : function( 'A' , '用户名' , '提示' )
	// . . .
	//

	// < 交互 >
	//
	// A : BX对象 ( 由 <FUN : 创建BX>创建 )
	// Index : DB里面的变量的下标
	选项_选择 : function(A, Index) {
	},

	// 

	ID_选择 : function(A, Index) {
	},

	// 

	条码_扫描 : function(A, Index) {
	},

	// 

	二维码_扫描 : function(A, Index) {
	},

	//

	声音_输入 : function(A, Index) {
	},

	// 

	声音_播放 : function(A, Index) {
	},

	// 

	声音_播放 : function(A, Index) {
	},

	// 

	相片_拍照 : function(A, Index) {
	},

	// --

	// 注册监听 : function( 'page创建' , fun )
	//
	// fun : function (){ . . . };
	// . . . . . .

	
	// <序列化>
	// 
	// A : BX对象 ( 由 <FUN : 创建BX>创建 )
	序列化 : function(A) {
	},
	
	// <加密>
	// 
	加密 : function() {
	},

}
