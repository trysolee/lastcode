// 注意 :
// 
// . . 上传后 ,文件没有被直接引用 , ( <引用次数> = 0 )
//
// . . 可以通过<临时文件><编号> 找到 <文件BX>
//
// . . <文件>上传完成后 , 会最后上传数据
// 这时再把引用次数完善

// 步骤 : ( 单个<临时文件>的上传 , <服务端> )
//
// . . 接收<编号ID>
//
// . . 接收 <后缀名>
//
// . . 创建<文件BX>
// 获得<文件ID>
// <引用次数> : 0 次
// <上传用户> : <玩家ID>
// <路径> : 由<文件ID>和<后缀名>组成
// <后缀> : <后缀名>
// <上传时间> : <当前时间>
//
// . . 创建<临时文件BX>
// <临时文件BX> 设置<编号ID> <文件ID> <玩家ID>
//
// . . 接收<文件>
// 以<文件名>命名 , 保存到<文件目录>
//
// . . 更新<文件BX>
// <大小>
// 

