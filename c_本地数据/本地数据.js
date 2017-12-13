SYS.本地数据._DAT_ = {};



SYS.本地数据.get = function(变量名) {
	return SYS.本地数据._DAT_[变量名];
}


SYS.本地数据.set = function(变量名, v) {
	this.get(变量名).set(v);
}


SYS.本地数据.注册 = function(arr) {

	var obj = new SYS.变量.new(arr[1], '本地变量', arr[2]);
	SYS.XID._DAT_[arr[0]] = obj;


	// TODO 
	// 还要 注册各种<监听>
	// 
}


SYS.本地数据.清单 = function() {


	// TODO
}