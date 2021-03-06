var db模板 = {

	// --------------------------------------
	// ----------- 步骤 : 编译检查 ----------
	// --------------------------------------


	// 注析 :
	// '数据库' (DB) 由多条 '数据行' (BX) 叠加组成 , ( ..横向.. )
	// '数据行' (BX) 包含多个 '数据名'(BN) 和 '数据值'(BZ)
	// '数据名'(BN) 和 '数据值'(BZ) 一一对应
	// 

	// DB :
	// 定义的 '主键' , '自增加' 必须是 'ID'类型

	// Item :
	// 有 LIST  必须有 Item

	// NEW :
	// BC 的值需要全定义
	// 考虑有'默认值'的情况
	// 考虑 : <PHP>里面设值的情况
	//
	// '自增加' 可以不设值
	// 有 '初值' 定义 , 可以不设置
	// 
	// <VIEW> 里面没有输入的 , 在 <PHP>里面需要设置
	// 检查相关的“赋值语句”
	// 

	// <NEW>的权限里面不能有<BX>
	// 因为创建的<BX>还不确定能用。
	//

	// <VIEW> 如果 <子JP> , 检查 JPS 的关系
	// . . 他们必须在同一个 <JPS>里面 /.
	// . . 被 <子JP> 指向的 <DB> ,
	// 里面的<VIEW> 不能再出现 <子JP>指向 /.
	// . . 只有<主JP>的 <VIEW>才能有 <子JP>指向
	// 就这一点 , 就可以保证 '单层' <子JP> /.

	// <BUF> 可以包含 DB里面没有的'变量'
	// JPS返回后 , 统计 , 计算 , 会用到'变量'

	// DB ： ( BN 的检查 )
	// 需要检查的BN的项目
	// <VIEW> , <NEW> , <Item> , <DEL>, <EDIT>
	// , <BUF>, <LIST>, <SF_xx>, <MF_xx>

}