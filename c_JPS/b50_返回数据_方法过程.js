var ROOT = {

// 注意 :
// 返回时 , 不需要<锁定><JPS>
//

// ------------------
//
// 连接 结束 // 《 服务端 》
//
// . . 标记全部<JPS用户数据>'未比较'
//
// . . 逐个判断 <JPS>
// 
// . . 如果有<JP.用户数据>始终没有被<比较>
// 说明这个<JP>已经不存在 , 发出指令到<客户端>
// 删除相关数据 .
//
// . . 如果有<JP>没有在<JP.用户数据>里面找到
// 说明这个<JP>还没有缓冲 ,
//

//
// 以 'db孩子_JPS' 为例 :
//
// . . 首先获得<JPS地图>的<JPS.孩子>的信息
//
// . . 通过<JPS.孩子>获得<JPS数据光标>
// 
// . . 通过<JPS.孩子>获得<JPS.用户数据>
//
// . . 逐个比较<JPS数据光标> 和 <JPS.用户数据>
// // TODO 暂时考虑
// //<JPS地图>.比较 ( <JPS数据光标>[ i ] ,   <JPS.用户数据> ) ;

}
