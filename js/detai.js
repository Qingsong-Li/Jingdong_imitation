// 实现前进后退小图片
let forward = document.querySelector(".forward");
let backward = document.querySelector(".backward");
let ul = document.querySelector(".spec-items ul");

forward.addEventListener("click",()=>{
    ul.style.left = "0px";
});
backward.addEventListener("click",()=>{
    ul.style.left = "-116px";
});

// 鼠标滑入改变中图
let lis = document.querySelectorAll(".spec-items ul li");
let img = document.querySelector(".main-img img");
let main_img = document.querySelector(".main-img");
let zoom_pup = document.querySelector(".zoom-pup");
let zoom_div = document.querySelector(".zoom-div");
for(let i = 0;i<lis.length;i++){
    lis[i].addEventListener("mouseover",()=>{
        for(let j = 0;j<lis.length;j++){
            lis[j].classList.remove("img-hover");
        }
        lis[i].classList.add("img-hover");
        img.src = lis[i].children[0].src;
    })
}

main_img.addEventListener("mouseover",()=>{
    zoom_pup.style.display = "block";
    zoom_div.style.display = "block";
    zoom_div.children[0].src = main_img.children[0].src; 
})

main_img.addEventListener("mouseout",()=>{

    zoom_pup.style.display = "none";
    zoom_div.style.display = "none";
    zoom_div.children[0].src = " "; 
})

main_img.addEventListener("mousemove",(e)=>{
    // 鼠标距离文档流顶部/左边的距离
    let pagey = e.pageY;
    let pagex = e.pageX;
    // 中图距离文档流顶部/左边的距离
    let offsettop = main_img.offsetTop;
    let offsetteft = main_img.offsetLeft
    // 黄色小块高度一半;
    let h= zoom_pup.clientHeight/2;

    let top = pagey - offsettop -h;
    let left = pagex - offsetteft -h;
    if(top<=0){
        top = 0;
    }else if(top>=main_img.clientHeight-zoom_pup.clientHeight){
        top=main_img.clientHeight-zoom_pup.clientHeight;
    }
    if(left<=0){
        left = 0;
    }else if(left>=main_img.clientWidth-zoom_pup.clientWidth){
        left=main_img.clientWidth-zoom_pup.clientWidth;
    }

    zoom_pup.style.top = top+"px";
    zoom_pup.style.left = left+"px";


    // 计算移动比例
    let y_rate = top/(main_img.clientHeight-zoom_pup.clientHeight);
    let x_rate = left/(main_img.clientWidth-zoom_pup.clientWidth);

    // 计算大图移动距离
    let big_y = y_rate*(800-540);
    let big_x = x_rate*(800-540);
    zoom_div.children[0].style.top = "-"+big_y+"px";
    zoom_div.children[0].style.left = "-"+big_x+"px";

});

zoom_div.addEventListener("mouseover",()=>{
    zoom_pup.style.display = "none";
    zoom_div.style.display = "none";

});

// 购物车数量
let reduce = document.querySelector(".reduce");
let add = document.querySelector(".add");
let buyNum = document.querySelector(".buy-num");
add.addEventListener("click",()=>{
    buyNum.value++;
    if(buyNum.value>1){
        reduce.classList.remove("disable");
    }
})

reduce.addEventListener("click",()=>{
    buyNum.value--;
    if(buyNum.value<=1){
        buyNum.value=1;
        reduce.classList.add("disable");
        return;
    }
    
})

buyNum.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        if(buyNum.value<=1){
            buyNum.value=1;
            reduce.classList.add("disable");
        }else{
            reduce.classList.remove("disable");
        }
    }
})

