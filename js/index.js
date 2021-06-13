window.onload = function() {
    //获取广告图片列表
    let imgList = document.getElementById("ad-banner");
    let imgArr = imgList.getElementsByTagName("img");
    //设置宽度
    imgList.style.width = 1226*imgArr.length+"px";

    //获取左右及下方按钮
    //左键
    let prev = document.getElementById("btn-prev");
    //右键
    let next = document.getElementById("btn-next");

    //默认显示图片的索引
    let index = 0;
    //获取所有的a
    let adList = document.getElementById("list-show");
    let allA = adList.getElementsByTagName("li");
    
    /*
        点击超链接切换到指定的图片
            点击第一个超链接，显示第一个图片   
    */

    function lunBo(){
        return setInterval (function(){
            index++;
            if (index>allA.length){
                index = 1;
                imgList.style.left = 0;
                move(imgList,"left",-1226*index+"px",20);
            }
            else{
             //imgList.style.left = -1226*index+"px";
             move(imgList,"left",-1226*index+"px",20);               
            }           
        },3000);
    }
    
    let realTimeClData = lunBo();

    //为所有超链接绑定单击响应函数
    //鼠标停留在画面上时，停止轮播
    
    for(let i=0, len = allA.length;i <len; i++){
        allA[i].onclick = function(){
            index = i;
            imgList.style.left = -1226*index+"px";
            clearInterval(realTimeClData);
            realTimeClData = 0;
            realTimeClData = lunBo();  
        }
        imgArr[i].onmouseover = function(){
            clearInterval(realTimeClData);
            realTimeClData = 0;
        }
        imgArr[i].onmouseout = function(){
            realTimeClData = lunBo();  
        }
    }


    //向前移动
    prev.onclick=function(){
        index--;
        if (index<0){
            index = allA.length-1;
        }
        imgList.style.left = -1226*index+"px";
        clearInterval(realTimeClData);
        realTimeClData = 0;
        realTimeClData = lunBo();
    }

    //向后移动
    next.onclick=function(){
        index++;
        if (index>allA.length-1){
            index = 0;
        } 
        imgList.style.left = -1226*index+"px";
        clearInterval(realTimeClData);
        realTimeClData = 0;
        realTimeClData = lunBo();
    }

}