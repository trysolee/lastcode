// 

var db模板 = {

//
// 步骤 :
// 

// 根据 <JPID> , 锁定 <JP>
// 具体锁定那个<JPS> 在 编译时确定
//

//
// . . 根据<上传数据行>.<主键> , 读取<BX>
//
// . . 按<BX> ( 非<上传数据> )
// 执行 <权限>
//
// . . 执行<接收>
//
// . . 删除 <子DB> 需要自己删除 // 注意 : 需要自己编写
//
// . . 删除<DB>
//
// . . 每处理完一个 ,检查<异常标记>
//
// > 如果发现异常 , <回滚数据>
//

}
