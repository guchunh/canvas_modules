var ww = window.innerWidth;
var wh = window.innerHeight;

var fps = 60;
var pointNum = 200; //点的个数
var maxLine = 120; //允许连接的最大的间距
var cs = [];
var c, ct;

init();

// 初始化canvas对象
function init() {
	c = document.getElementById('canvast');
	if(c && c.getContext) {
		ct = c.getContext('2d');
		c.width = ww;
		c.height = wh;

		initState();

		setInterval(loop, 1000/fps);
	}
}

// 设置初始化状态
function initState() {
	for(var i=0; i<pointNum; i++) {
		cs[i] = {
			x: ww/2,
			y: wh/2,
			speed: 3,
			direction: Math.PI * 2 * Math.random(),
			color: colorOne(),
			round: 1
		}
	}
}

// 更新状态
function updateState(i) {
	if(i === undefined) {
		return ;
	}
	var cx = cs[i].x + cs[i].speed * Math.cos(cs[i].direction);
	var cy = cs[i].y + cs[i].speed * Math.sin(cs[i].direction);

	if(cx<0 || cx>ww || cy<0 || cy>wh) {
		centerPoint(cs[i]);
		updateState();
	} else {
		cs[i].x = cx;
		cs[i].y = cy;
	}
}

// 绘制canvas
function loop() {

	// 更新点的位置
	ct.fillStyle = 'rgba(0, 0, 0, 1)';
	ct.fillRect(0, 0, c.width, c.height);
	for(var n=0; n<pointNum; n++) {
		updateState(n);
		ct.beginPath();
		ct.fillStyle = cs[n].color;
		ct.arc(cs[n].x, cs[n].y, cs[n].round, 0, Math.PI*2, true);
		ct.fill();
	}

	// 连线
	// ct.strokeStyle = 'rgba(38, 224, 7, 0.3)';
	for(var i=0; i<pointNum; i++) {
		for(var j=i+1; j<pointNum; j++) {
			if(Math.sqrt( Math.pow((cs[j].x - cs[i].x), 2) + Math.pow((cs[j].y - cs[i].y), 2) ) < maxLine) {
				ct.beginPath();
				ct.moveTo(cs[i].x, cs[i].y);
				ct.lineTo(cs[j].x, cs[j].y);
				ct.strokeStyle = cs[j].color;
				ct.stroke();
			}
		}
	}
}

// 取一个随机数
function randomNum(min, max) {
	if(min == undefined) {min = 0};
	if(max == undefined) {max = 1};

	return Math.random() * (max - min) + min;
}

// 生成随机颜色
function colorOne(op) {
	if(op === undefined) {
		op = 1;	
	}
	var r = Math.floor(256 * Math.random());
	var g = Math.floor(256 * Math.random());
	var b = Math.floor(256 * Math.random());

	return 'rgba(' + r + ',' + g + ',' + b + ',' + op + ')';
}


// 点击事件
document.getElementById("canvast").addEventListener("click", function(event) {
	var e = event || window.event;

	for(var i=0; i<pointNum; i++) {
		var xd = e.clientX - cs[i].x;
		var yd = e.clientY - cs[i].y;
		var sin = yd/Math.sqrt(Math.pow(xd, 2)+Math.pow(yd, 2));
		var asin = Math.asin(sin);

		if(xd < 0) {
			asin = Math.PI - asin;
		}
		if(xd > 0 && yd <0) {
			asin = 2*Math.PI + asin;
		}
		cs[i].direction = asin;
	}
})

// 集中点
function centerPoint(item) {

	var xd = ww/2 - item.x;
	var yd = wh/2 - item.y;
	var sin = yd/Math.sqrt(Math.pow(xd, 2)+Math.pow(yd, 2));
	var asin = Math.asin(sin);

	if(xd < 0) {
		asin = Math.PI - asin;
	}
	if(xd > 0 && yd <0) {
		asin = 2*Math.PI + asin;
	}
	item.direction = asin;
}