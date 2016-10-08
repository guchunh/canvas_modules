var ww = window.innerWidth;
var wh = window.innerHeight;

var fps = 60;
var pointNum = 100;
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
			r: randomNum(20, 300),
			rx: ww/2,
			ry: wh/2,
			color: colorOne(),
			round: 0
		}
		cs[i].speed = Math.PI/Math.sqrt(cs[i].r*200);
	}
}

// 更新状态
function updateState(i) {
	if(i === undefined) {
		return ;
	}

	var round = cs[i].round + cs[i].speed;

	if(round > Math.PI*2) {
		round = 0;
	}

	cs[i].round = round;
	cs[i].rx = cs[i].x + cs[i].r * Math.cos(cs[i].round);
	cs[i].ry = cs[i].y + cs[i].r * Math.sin(cs[i].round);
}

// 绘制canvas
function loop() {

	ct.fillStyle = 'rgba(0, 0, 0, .05)';
	ct.fillRect(0, 0, c.width, c.height);

	for(var n=0; n<pointNum; n++) {
		updateState(n);
		ct.beginPath();
		ct.fillStyle = cs[n].color;
		ct.arc(cs[n].rx, cs[n].ry, 1, 0, Math.PI*2, true);
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

// 生成一个随机数
function randomNum(min, max) {
	return Math.random() * (max - min) + min;
}