// 变量前缀

var 前缀 = {

// '布尔' : true , false (常量)

// '常数' : 数字 ( 常量 )

// '常串' : 字串 ( 常量 )

// 'BX' : 在 'NEW' , 'EDIT' , 'DEL' , 'Item' 里面会用到
// <BUF>.<新建><更新><删除> 也会用到

// 'BS' : DB里面定义一个变量的参数集 ( 常量 )
// 例如 : 'BX' , '孩子年龄' , '最大'
// 例如 : 'A' , '存款时间' , '初值'
// 

// '对象' : 对用 对象本身
// 例如 : '对象' , 'BX'
// 例如 : '对象' , 'XD'

// 注析 :
// '数据库' (DB) 由多条 '数据行' (BX) 叠加组成 , ( ..横向.. )
// '数据行' (BX) 包含多个 '数据名'(BN) 和 '数据值'(BZ)
// '数据名'(BN) 和 '数据值'(BZ) 一一对应
// 数据库名(DN) , 每个DB 有唯一一个DN

// 'FLY' : 穿梭器 ( 客户端 , 服务端 不通用 )

// 'UD' : 用户登录数据 // 只适用于<服务端>

// 'XD' : XID // ( 服务器镜像到本地的数据 )

// '本地' : 本地数据

// 'PageS' : 页面 ( page , DB )

// 后台控制 :

// '页堆数据' : page数据链

// 'SYS' : 系统 // 只能读
// 
// 随机数
// 现在时间
// 现在日期
// 随机数4 // 4 + 4 = 8
// 随机数16// 16 + 16 = 32
// 随机数64 // 64 + 64 = 128
// 

}
