(function() {
    $(function() {
        drowSth();
    })

    function drowSth() {
        // 取得canvas元素及其绘图上下文
        var canvas = $("#canvast");
        var context = canvast.getContext('2d');
        context.save();

        // 天空
        skyModel(context);

        // 大地
        landModel(context);

        // 云朵
        context.translate(300, 110);
        context.scale(1.8,1.4);
        cloudModel(context);
        context.translate(50, 50);
        context.scale(0.8,0.7);
        cloudModel(context);
        context.translate(550, 50);
        context.scale(0.8,0.7);
        cloudModel(context);
        context.translate(750, 200);
        context.scale(1.3,1.1);
        cloudModel(context);
        context.translate(950, 100);
        context.scale(1,0.9);
        cloudModel(context);
        context.translate(1150, 50);
        context.scale(0.6,0.5);
        cloudModel(context);

        // 重复的树木(远近关系按y值有小到大)
        context.translate(210, 540);
        treeModel(context);
        context.translate(40, 560);
        treeModel(context);
        context.translate(380, 570);
        context.scale(1.1,1.1);
        treeModel(context);
        context.translate(300, 580);
        context.scale(0.8,0.8);
        treeModel(context);
        context.translate(180, 590);
        treeModel(context);
        context.translate(290, 595);
        context.scale(0.8,0.8);
        treeModel(context);
        context.translate(100, 600);
        treeModel(context);
        context.translate(350, 610);
        treeModel(context);
        context.translate(150, 620);
        context.scale(1.1,1.1);
        treeModel(context);
        context.translate(250, 625);
        treeModel(context);
        context.translate(400, 620);
        context.scale(0.7,0.7);
        treeModel(context);
        context.translate(50, 640);
        context.scale(1.2,1.2);
        treeModel(context);

        // 大雁
        context.translate(100, 40);
        context.scale(0.8,0.8);
        gooseModel(context);
        context.translate(120, 70);
        context.scale(0.9,0.9);
        gooseModel(context);
        context.translate(140, 100);
        gooseModel(context);
        context.translate(150, 46);
        context.scale(0.8,0.8);
        gooseModel(context);
        context.translate(200, 50);
        context.scale(0.9,0.9);
        gooseModel(context);

        // 河流
        context.translate(-10, 700);
        riverModel(context);

        myModel(context);

        // 文字
        var color = '#838181'
        // textModel(context, '思', 500, 125, 150, color);
        textModel(context, '最是那一低头的', 500, 150, 150, color);
        textModel(context, '温柔，', 500, 175, 150, color);
        textModel(context, '像一朵水莲花', 500, 200, 150, color);
        textModel(context, '不胜凉风的娇羞！', 500, 225, 160, color);
        textModel(context, '道一声珍重，', 500, 250, 150, color);
        textModel(context, '道一声珍重，', 500, 275, 150, color);
        textModel(context, '那一声珍重里', 500, 300, 150, color);
        textModel(context, '有蜜甜的忧愁——', 500, 325, 160, color);
        textModel(context, '沙扬娜拉！', 500, 350, 150, color);
        
    }

    function treeModel(context) {
        context.beginPath();

        // 树冠路径
        context.lineTo(-50, -75);
        context.lineTo(-20, -120);
        context.lineTo(-40, -120);
        context.lineTo(-10, -165);
        context.lineTo(-30, -165);
        context.lineTo(-0, -210);
        context.lineTo(30, -165);
        context.lineTo(10, -165);
        context.lineTo(40, -120);
        context.lineTo(20, -120);
        context.lineTo(50, -75);

        context.closePath(); //闭合

        // 设置样式
        context.lineWidth = 4; // 线条宽度
        context.lineJoin = 'round'; // 平滑路径结合点
        context.strokeStyle = '#663300'; // 线条颜色
        context.fillStyle = '#339900'; // 填充颜色

        context.fill(); // 填充

        var trunkGradient = context.createLinearGradient(-10, -70, 10, -70);
        trunkGradient.addColorStop(0, '#663300');
        trunkGradient.addColorStop(0.4, '#996600');
        trunkGradient.addColorStop(1, '#552200');

        // context.fillStyle = '#663300'; // 填充颜色
        context.fillStyle = trunkGradient; // 填充渐变（横向）
        context.fillRect(-10, -75, 20, 75); // 绘制矩形树干

        var canopyShadow = context.createLinearGradient(0, -70, 0, 0);
        canopyShadow.addColorStop(0, 'rgba(0, 0, 0, 0.5)');
        canopyShadow.addColorStop(0.2, 'rgba(0, 0, 0, 0)'); // 前0.2部分是树的阴影

        context.fillStyle = canopyShadow; // 填充渐变（竖向）
        context.fillRect(-10, -75, 20, 75); // 绘制矩形树干

        context.stroke(); // stroke: v. 画；n. 笔画
        context.restore(); // 恢复之前的canvas状态
        context.save();
    }

    function riverModel(context) {
        // var riverImg = new Image();
        // riverImg.src = './img/2.jpg';
        // riverImg.onload = function() {
        //     context.beginPath();

        //     context.moveTo(0,0);
        //     context.bezierCurveTo(600, 10, 900, -200, 1250, -275);

        //     // context.quadraticCurveTo(900, -200, 600, -400);

        //     context.lineWidth = 100; // 线条宽度
        //     // context.strokeStyle = '#7BBDF0'; // 线条颜色
        //     context.strokeStyle = context.createPattern(riverImg, 'repeat');

        //     context.stroke();
        //     context.restore();
        // }

        context.beginPath();

        context.moveTo(0,0);
        context.bezierCurveTo(600, 10, 900, -80, 1250, -75); // 1控x, 1控y, 2控x, 2控y, 终x, 终y,

        // context.quadraticCurveTo(900, -200, 600, -400);

        context.lineWidth = 100; // 线条宽度
        context.strokeStyle = '#7BBDF0'; // 线条颜色

        context.stroke();
        context.restore();
        context.save();
    }

    function gooseModel(context) {
        context.beginPath();

        context.lineTo(-10,6);
        context.lineTo(-20,5);
        context.lineTo(-30,15);
        context.lineTo(-39,3);
        context.lineTo(-50,0);
        context.moveTo(-24,17);
        context.lineTo(-36,13);

        context.lineWidth = 2; // 线条宽度
        context.strokeStyle = '#6C6C6C'; // 线条颜色

        context.stroke();
        context.restore();
        context.save();
    }

    function textModel(context, text, x, y, maxW, color) {
        context.font = '20px 华文行楷';
        context.fillStyle = color;
        context.textAlign = 'left';
        context.fillText(text, x, y, maxW);

        context.restore();
        context.save();
    }

    function skyModel(context) {
        context.beginPath();
        var sky = context.createLinearGradient(0,0,0,500);
        sky.addColorStop(0, '#99dcf5');
        sky.addColorStop(1, '#fff');

        context.fillStyle = sky;
        context.fillRect(0,0,1200,500);
        context.restore();
        context.save();
    }

    function landModel(context) {
        context.beginPath();
        var land = context.createLinearGradient(0,500,0,800); // 开始坐标和结束坐标表示渐变的方向
        land.addColorStop(0, '#fff');
        land.addColorStop(1, '#4bb362');

        context.fillStyle = land;
        context.fillRect(0,500,1200,800);
        context.restore();
        context.save();
    }

    function cloudModel(context) {
        context.beginPath();

        var cloud = context.createRadialGradient(-50,-15,20,-50,-15,50); // 起始点坐标半径、结束点坐标半径
        cloud.addColorStop(0, 'rgba(255,255,255,0.8)');
        cloud.addColorStop(1, 'rgba(255,255,255,0.6)');
        context.fillStyle = cloud;    

        context.arc(-90, 5, 25, 0, 2*Math.PI, false);  // 原点坐标x、y、半径、起始度数、结束度数、是否逆时针
        context.arc(-65, -15, 25, 0, 2*Math.PI, false);
        context.arc(-40, -30, 30, 0, 2*Math.PI, false);
        context.arc(-10, 0, 30, 0, 2*Math.PI, false);
        context.arc(-50, 0, 30, 0, 2*Math.PI, false);

        context.closePath();
        context.fill();
        context.restore();
        context.save();
    }

    function myModel(context) {

        var riverImg = new Image();
        riverImg.src = './img/2.jpg';
        riverImg.onload = function() {

            // 头
            context.beginPath();
            context.moveTo(1000, 650);
            context.bezierCurveTo(985, 650, 985, 675, 1000, 680); // 1控x, 1控y, 2控x, 2控y, 终x, 终y,
            context.moveTo(1000, 650);
            context.bezierCurveTo(1015, 650, 1015, 675, 1000, 680);
            context.closePath(); //闭合
            context.lineJoin = 'round'; // 平滑路径结合点
            context.fillStyle = '#404040'; // 填充颜色
            context.fill(); // 填充
            context.restore();
            context.save();

            // 腿
            context.beginPath();
            context.moveTo(1000, 738);
            context.lineTo(1000, 738);
            context.lineTo(995, 738);
            context.lineTo(980, 715);
            context.lineTo(965, 740);
            context.lineTo(963, 735);
            context.lineJoin = 'bevel';
            context.strokeStyle = '#E4E4E4';
            context.lineWidth = 20;
            context.stroke();
            context.restore();
            context.save();

            // 手臂
            context.beginPath();
            context.moveTo(990, 685);
            context.lineTo(990, 685);
            context.lineTo(970, 710);
            context.lineTo(980, 710);
            context.moveTo(1012, 685);
            context.lineTo(1012, 685);
            context.lineTo(1020, 705);
            context.lineTo(1010, 705);
            context.lineJoin = 'round';
            context.strokeStyle = context.createPattern(riverImg, 'repeat');
            context.lineWidth = 15;
            context.stroke();
            context.restore();
            context.save();

            // 身体
            context.beginPath();
            context.moveTo(1005, 675);
            context.bezierCurveTo(965, 660, 975, 760, 1012, 750); // 1控x, 1控y, 2控x, 2控y, 终x, 终y,
            context.moveTo(1005, 675);
            context.bezierCurveTo(1025, 668, 1040, 750, 1012, 750);
            context.closePath(); //闭合
            context.lineJoin = 'round'; // 平滑路径结合点
            context.fillStyle = context.createPattern(riverImg, 'repeat'); // 填充颜色
            context.fill(); // 填充
            context.restore();
            context.save();
        }    
    }

})()