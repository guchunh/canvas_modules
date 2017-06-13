
    function allowDrop(e) {
        e.preventDefault();
    }

    // 获取被拖动的元素
    function drag(e) {
        e.dataTransfer.setData('itId', e.target.id);
    }

    // 放置元素
    function drop(e) {
        e.preventDefault();
        e.stopPropagation();
        var data = e.dataTransfer.getData("itId");
        e.target.appendChild(document.getElementById(data));
    }