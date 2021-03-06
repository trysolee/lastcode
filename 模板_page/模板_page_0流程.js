var page模板 = {

/** ****** 权限预览 ******* */
//
// 执行 <权限>
// . . 创建 部分 <DB>
//
/** ****** 本地创建 ******* */
//
// 创建 <DB> 
//
// 创建 <加密>
//
// 创建 <VIEW>
//
// <监听> 'page创建'
//
//
/** ****** 本地操作 ******* */
//
// <监听> 'page跳出'
// . . <page跳出.预设>
// <页堆>.<新建页> // 记录 <PageS>的标记
// 把 <DB>里面的 '主键' , '唯一键' put到<页堆>
//
// <监听> 'page跳回'
// . . <page跳回.预设>
// <页堆>.<删除尾页>
//
// <监听> 'page清除'
//
// <监听> '输入'
// 
/** ****** 发送 <page> ******* */
// 判断是否需要<发送> ( 编译时判断 )
// . . DB 里面没有D , S , U , I , G 就没有Server端的代码
//
// <DB> 序列化
// 只有 S , U , D , I , L , G 需要发送
// <page> 可能有多个 <JP>
//
// <加密>
// // // 判断解密方法 ( 缺省 , 自定义 , 无加密 )
//
// 
/** ****** 接收 <page> ******* */
// <解密>
// 判断解密方法 ( 缺省 , 自定义 , 无加密 )
// 
// <DB> 反序列化
// 
// 处理 <JP>
//
// 完善<DB>
//
// 执行 <权限>
// 99%的<权限>都是通过的 , 所以锁定之后再检查权限
//
// 执行 <批处理>
//
// 根据 DB 的 U , I , D 进行操作
// . . 如果 <批处理> 里面已经 <UP>了 , 就不用再 Insert 了
//
// 返回 <JPS>数据
// 返回数据
//
// 释放<JP>权限
// 批处理 ( 编译 )
//
// 返回 <XID>
// 检查有变更的数据 , 返回
//
/** ****** 返回 ******* */
// 重建 / 设置 <XID>
//
// 重建 BUF <JPS> 返回
//
// <监听> '返回'
//
// <监听> '更新OK'
//
// <监听> '更新EXP'
//
}