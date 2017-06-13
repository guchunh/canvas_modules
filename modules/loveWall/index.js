var ww = window.innerWidth;
var wh = window.innerHeight;

var fps = 60;
var cs = {};
var angle = 10;
var c, ct;

init();

// 初始化canvas对象
function init() {
    c = document.getElementById('canvast');
    if(c && c.getContext) {
        ct = c.getContext('2d');
        c.width = ww;
        c.height = wh;

        cs.color = colorOne();

        setInterval(loop, 1000/fps);
    }
}

// 绘制canvas
function loop() {
    var t = angle / Math.PI;
    var cx = 19.5 * (16 * Math.pow(Math.sin(t), 3));
    var cy = -20 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

    cs.x = ww/2 + cx;
    cs.y = wh/2 + cy;

    angle += 0.2;

    ct.beginPath();
    if((angle-10) % (2*Math.PI) < 0.2 ) {
        cs.color = colorOne();
    }
    ct.fillStyle = cs.color;
    ct.arc(cs.x, cs.y, 2, 0, Math.PI*2, true);
    ct.fill();
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