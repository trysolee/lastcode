SYS.XID._DAT_ = {};

SYS.XID.get = function(变量名) {
	return SYS.XID._DAT_[变量名];
}


SYS.XID.set = function(变量名, v) {
	this.get(变量名).set(v);
}

SYS.XID.注册 = function(arr) {

	var obj = new SYS.变量.new(arr[1], 'XD', arr[2]);
	SYS.XID._DAT_[arr[0]] = obj;


}


SYS.XID.清单 = function() {


	// TODO
}