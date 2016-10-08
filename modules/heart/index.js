var ww = window.innerWidth;
var wh = window.innerHeight;

var fps = 60;
var pointNum = 20;
var c, ct;
var pArr = [];

init();

// 初始化canvas对象
function init() {
	c = document.getElementById('canvast');
	if(c && c.getContext) {
		ct = c.getContext('2d');
		c.width = ww;
		c.height = wh;

		setInterval(loop, 1000/fps);
	}
}

// 绘制canvas
function loop() {
	ct.fillStyle = 'rgba(0, 0, 0, .12)';
	ct.fillRect(0, 0, c.width, c.height);

	for(var i=0; i<pArr.length; i++) {
		pointDo(pArr[i], i);
	}
}

// 获取一个随机数
function randomNum(min, max) {
	return Math.random() * (max - min) + min;
}

// 点击事件
document.getElementById("canvast").addEventListener("click", function(event) {
	var e = event || window.event;
	var ep = {
		x : e.clientX,
		y : e.clientY,
		r : 0
	}
	pArr.push(ep);
})

// 鼠标移动捕获
document.getElementById("canvast").addEventListener("mousemove", function(event) {
	var e = event || window.event;
	var ep = {
		x : e.clientX,
		y : e.clientY,
		r : 0
	}
	pArr.push(ep);
})

function pointDo(e, i) {
	if(e.r < 50) {
		e.r ++;
		ct.beginPath();
		ct.lineWidth = 1;
		ct.strokeStyle = 'rgba(255, 0, 0, 0.8)';
		ct.moveTo(e.x, e.y - e.r / 2);
		ct.bezierCurveTo(
			e.x + e.r / 1.1, e.y - e.r / 0.8,
			e.x + e.r / 1.1, e.y + e.r / 24,
			e.x, e.y + e.r / 2);

		ct.bezierCurveTo(
			e.x - e.r / 1.1, e.y + e.r / 24,
			e.x - e.r / 1.1, e.y - e.r / 0.8,
			e.x, e.y - e.r / 2);

		ct.stroke();
	} else {
		pArr.splice(i);
	}
}
