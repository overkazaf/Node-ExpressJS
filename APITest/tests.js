function getSelectedValues() {
	var selected = [];
	var $table = $('#tableTop');
	var $tabBody = $table.find('tbody');
	var $aTr = $tabBody.find('tr');

	// 遍历tbody下的每一行tr
	$aTr.each(function (){
		// 找到每一行tr下的的所有td
		var $aTd = $(this).find('td');
		
		// 找到checkbox元素
		var $chkBox = $aTd.first().find('input');
		if ($chkBox.prop('checked') == 'checked') {
			// 取到相应的描述值
			var value = $aTd.eq(3).find('input').val();
			
			// 把值压入数组
			selected.push(value);
		}
	});


	return selected;
}


function setSelectedValues(values, $dom) {
	// test case
}

// fucking tire today, eat shit every sucker!