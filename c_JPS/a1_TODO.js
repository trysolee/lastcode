// TODO
// 考虑设立 JPS外的 DB
// 这种 'DB' 不涉及到权限
// 它可以同时被多个线程操作
// 这些线程各自获得了权限 , 操作自己的那一部分.
// 由于有权限的分隔 , 他们同时操作,也不会交叉在一起.
//
// 但是 , 这种'DB' 的BUF缓冲的筛选就会变得头痛
// 靠 DB . LIST 的<筛选>来确定 ??? TODO
//
// 像'db登录' 这样的 <DB> , 可以不用考虑BUF
//
// 如果需要 <批量缓存>的 , 就需要另外建立<JPS>
//

// TODO 设立 <JPS.筛选条件>
// . . 不是判断<筛选>什么内容 .
// 而是 , 判断谁可以<筛选><缓存>
//

// 关于 <JPS>锁定的设想

// TODO // 下一个版本再考虑
// . . <JPS.db家庭_JPS> 和 <JPS.db孩子_JPS> 是独立的通道
// <JPS.db家庭_JPS>被堵塞了 , <JPS.db孩子_JPS>仍然畅通
// 
// 目前的设想是 :
// 整个系统<JPS>只有一个通道
// 有一个线程操作<JPS> , 整个<JPS>堵塞
// <JPS锁>设置好 , 交还控制权

// TODO // 下一个版本再考虑
// 每个<JP> 分开<写锁> 和 <读锁> 
var JP = //
[ // 第一个 JP //
ID, //
//
写锁, // true/false
//
读锁, // int // 可以多个<读> // <读锁> +1 // <解锁> -1
//
X, // '整个JP的版本号',
//
];

//