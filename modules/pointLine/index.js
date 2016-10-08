var ww = window.innerWidth;
var wh = window.innerHeight;

var fps = 60;
var speed = 3;
var pointNum = 20;
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
			x: Math.floor(ww * Math.random()),
			y: 0,
			speed: speed,
			direction: Math.PI * 2 * Math.random(),
			color: colorOne()
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
		cs[i].direction = Math.PI * 2 * Math.random();
		updateState();
	} else {
		cs[i].x = cx;
		cs[i].y = cy;
	}
}

// 绘制canvas
function loop() {

	ct.fillStyle = 'rgba(0, 0, 0, .1)';
	ct.fillRect(0, 0, c.width, c.height);

	for(var n=0; n<pointNum; n++) {
		updateState(n);
		ct.beginPath();
		ct.fillStyle = cs[n].color;
		ct.arc(cs[n].x, cs[n].y, 2, 0, Math.PI*2, true);
		ct.fill();
	}
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
	clickPoint(e);

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

// 点击效果
function clickPoint(e) {
	var r = 1;
	var getPoint = setInterval(function() {
		r++;
		ct.beginPath();
		ct.lineWidth = 1;
		ct.strokeStyle = '#3bce1a';
		ct.arc(e.clientX, e.clientY, r/2, 0, Math.PI*2, true);
		ct.stroke();

		if(r>30) {
			clearInterval(getPoint);
		}
	}, 1000/fps);
}