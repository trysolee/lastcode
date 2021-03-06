// -----------------------------------------------------
// ---------------------- 操作规则 ---------------------
// .D , S , U , I , L , N , G
//
// Sn , Un , Dn ( 不敏感的 S , U , D )
// 
// -----------------------------------------------------

// DB 里面没有D , S , U , I , ( Sn , Un , Dn )就没有Server端的代码

// -----------------------------------------------------

// 
// --------- G ------------ get一个没有BUF的数据行
// 不缓存( No BUF ) 默认返回加密
// 
// 
// --------- A ------------ D , S , U , I , L
// 全部情况
// 
//
// --------- S ------------ ( 只能有'键' )
// S : Select
// 必须提示 <主键> 或 <唯一键> , 不需要有其他'项名'

// 对<版本号>敏感 ,

// --------- D ------------ ( 只能有'键' )
// D : Deletc
// 必须提示 <主键> 或 <唯一键> , 不需要有其他'项名'

// 对<版本号>敏感 ,

// --------- U ------------
// U : update
// 必须提示 <主键> 或 <唯一键>
// 不一定有更新的数据 , 可以到了<服务端>再产生数据

// 对<版本号>敏感 ,

// --------- I ------------
// I : Insert
// 可以是空的 , 到了'服务器' 再添加数据
// 不能提示 <主键> , <主键>在<服务端>产生

// 对<版本号>不敏感 ,

// --------- L ------------
// L : 用于上传 , 没有Select 的功能
// 不能提示 <主键> 或 <唯一键>
// 

// --------- N ------------ 
// N : 不上传 , ( 可以看做 '本地的Select' )
// 

// --------- G ------------ 读取不缓存的数据
// G : 获取不在 <JPS>缓存方案里面的DB
// 必须提示 <主键> 或 <唯一键> , 不需要有其他'项名'

