//
// FUN : <返回数据.主版本号> ( <JPS.JPID> , <DB> , //
// . . <返回对象> )
//
// . . <BX> = <DB>.BX ( <JPS.JPID> )
// 通过 <JPID>获取 <BX>
//
// . . <返回对象>.BX ( <BX> )
// 加入<BX>的返回数据
//


//
// FUN : <返回数据.ARR1> ( <JPS.JPID> , <ARR.DB> , //
// . . <返回对象> , <ARR.用户.版本号> )
//
// . . <SQL串> = sprintf ( '%s = %u and BB > %u' , //
// ---- // <ARR.DB>.主键名 , <JPS.JPID> , <ARR.用户.版本号>)
//
// . . <list> = <ARR.DB>.设置where ( <SQL串> )
//
// TODO <SYS>.逐个BX ( ... )
// . . 逐个<ARR.OP> 作出判断
// 
// > '修改' , 返回<ARR.ID>对应的数据
// 
// > 'Insert' , 返回<ARR.ID>对应的数据
//
// > '删除' , 返回<ARR.ID> 和 删除标记
//

//
// FUN : <比较JPS.通过DB光标> ( <JPS.单个对象> , //
// . . <返回对象> )
//
// . . 根据<JPS.单个对象> 获取 <JPS.DB光标>
// 
// TODO 具体<JPS.DB光标>是怎么选出来的 , 暂时还未完善 ,
// 在<JPS_DB地图.js> 和 <JPS.js> 写了一半 ,不是很满意 ,
// 等以后有灵感继续完善 .
//
// . . 根据<JPS.单个对象> 获取 <JPS.用户>
// TODO 详细在<JPS_DB地图>里面 , 还没完善 .
//
// . . 逐个读取光标 ( 逐个<JPS.用户> )
//
// . . 获取<JPS.用户>的相应<JP>
// 
// > 没有找到相应的<JP>
// . 说明这个是新数据
// . 返回整个<JP>的数据到<客户端>
// . 在<JPS.用户>里面加入这个<JP>
//
// . . 比较 <总版本号>
//
// > <总版本号>相同
// . 继续下一个
//
// . . 解析<JPS . 主JP . 各个ARR>
//
// . . 判断 <主JP>版本号
//
// > 不相同
// . <返回数据.主版本号> ( <JPS.JPID> , <DB> , //
// <返回对象> )
//
// . . 逐个判断 <ARR>
//
// . 根据<JPS.结构> 获取每一个<ARR.DB.名称>
// 
// > 不相同
// . <返回数据.ARR1> ( <JPS.JPID> , <ARR.DB> , //
// <返回对象> , <ARR.用户.版本号> )
//