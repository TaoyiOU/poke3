window.onload = function () {
    //1.获取标签
    var gif = document.getElementById('gif');
    //2.创建定时器
    var timer = null;
    //4记录水平方向的初始值
    var beginX = 0;
    //5.记录垂直方向的初始值
    var beginY = 0;
    //3.触发最大事件源的鼠标移动事件
    document.onmousedown = function (event) {
        //3.1清空定时器
        clearInterval(timer);

        var event = event || window.event;
        //3.2鼠标的点击位置相对于浏览器左上角的坐标
        var targetX = event.clientX;
        var targetY = event.clientY;
        //6.调用多次定时器
        t(targetX, targetY);
        var i = 0;
        document.onkeydown = function (event) {
            var key = event.keyCode;
            if (key == 32) {
                if (i == 0) {
                    clearInterval(timer);
                    i = 1;
                } else if (i == 1) {
                    t(targetX, targetY);
                    i = 0;
                }
            }
        }
    };
    //封装定时器函数
    function t(tarX, tarY) {
        timer = setInterval(function () {
            //6.1设置小汽车的位置
            beginX = beginX + (tarX - beginX) * 0.1;
            beginY = beginY + (tarY - beginY) * 0.1;
            gif.style.left = beginX + 'px';
            gif.style.top = beginY + 'px';
        }, 500)
    }
};