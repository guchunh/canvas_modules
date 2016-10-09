
	function allowDrop(e) {
		e.preventDefault();
	}

	// 获取被拖动的元素
	function drag(e) {
		e.dataTransfer.setData('mark', e.target.id);
	}

	// 放置元素
	function drop(e, status) {
		e.preventDefault();
		if((status == 1 && !e.target.children) || status == 0 )  {
			var data = e.dataTransfer.getData("mark");
			e.target.appendChild(document.getElementById(data));
		}
	}