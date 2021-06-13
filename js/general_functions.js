//此文件储存一些常用的动画绘制函数


//实现匀速的画面移动，轮播图时可调用

/*
    参数
    obj:变量名
    cs:样式
    target:目标位置
    speed:位移速度
    back:回调函数
*/
function move(obj, cs, target, speed, back){
    clearInterval(obj.timer);
    let start = parseInt(getStyle(obj,cs));
    target = parseInt(target);
    if(start>target){
        speed = -speed;
    };
    obj.timer = setInterval(function(){
        let old = parseInt(getStyle(obj,cs));
        let newv = old + speed*10;
        if((newv<target&&speed<0) || (speed>0&&newv>target)){
            newv = target;
        };
        obj.style[cs] = newv + "px";
        if(newv == target){
            clearInterval(obj.timer);
            back&&back();
        };
    },30);
}

//获取样式的元素

/*
    参数
    obj:获取样式的元素
    na:要获取的样式名
*/
function getStyle(obj,na){
    return window.getComputedStyle?getComputedStyle(obj,null)[na]:obj.currentStyle[na];
    //ie8没有getComputedStyle()
}