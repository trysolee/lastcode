SYS.VIEW.当前BX = null;

SYS.VIEW.show_DB = function(arr, index) {

	var c = SYS.色彩控制;

	switch (arr[index]) {

		case '_':
			SYS.项目条布局.分隔(arr[index + 1], '居中', // 
				c.文字1(), c.底色1(), '中');

			break;
		case '显示':
			//TODO
			//
			// 注意:  SYS.VIEW.当前BX
			break;
		case '输入':
			//TODO
			//

			break;
		case '跳转':
			//TODO
			//

			break;
		case '按键':
			//TODO
			//

			break;

		default:
	}

};


SYS.VIEW.show_page = function(arr) {

	if (arr[0] == '_') {
		SYS.VIEW.show_DB(arr, 0);
		return;
	};

	if (arr[1] == '跳转') {
		SYS.VIEW.show_DB(arr, 1);
		return;
	};

	if (arr[1] == '按键') {
		SYS.VIEW.show_DB(arr, 1);
		return;
	};

	if (arr[0] >= 'A' && arr[0] <= 'Z') {
		// 查找 <页堆>
		SYS.VIEW.当前BX = SYS.页堆.getBX(arr[0]);
		SYS.VIEW.show_DB(arr, 1);
	};
}