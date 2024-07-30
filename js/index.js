// 模糊查询======================================
let textfield = document.querySelector(".text");
let searchHelpr = document.querySelector(".search-helper")

let searchArr = ["小米手机", "华为手机", "苹果手机", "vivo手机", "oppo手机",
    "小米耳机", "华为耳机", "苹果耳机", "vivo耳机", "oppo耳机",
    "小米平板", "华为平板", "苹果平板", "vivo平板", "oppo平板"]

textfield.oninput = function () {
    console.log(textfield.value);
    console.log(textfield.innerHTML)
    searchHelpr.innerHTML = " ";
    for (var i = 0; i < searchArr.length; i++) {
        if (searchArr[i].indexOf(textfield.value) !== -1 && textfield.value !== "") {
            searchHelpr.innerHTML += "<p>" + searchArr[i] + "</p>";
            searchHelpr.style.display = "block";
        }
    }
}

textfield.onblur = function () {
    searchHelpr.style.display = "none";
}

// 轮播图的切换=======================================
let img = document.getElementById('banner_img');
let prev = document.querySelector(".prev");
let nex = document.querySelector(".nex");
let slide = document.querySelector(".banner-slide");
let imgArr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
let count = 0;
let lis = document.querySelectorAll(".banner-btn li");
console.log(lis);
function changeImg() {
    if (count < 0) {
        count = imgArr.length - 1;
    }
    if (count >= imgArr.length) {
        count = 0;
    }
    img.src = "./images/" + imgArr[count];
    for(let i=0;i<imgArr.length;i++){
        lis[i].className = "";
    }
    lis[count].className = "active";
    console.log("第"+(count+1)+"张图片");
}

let timer = setInterval(() => {
    count++;
    changeImg();
}, 2000);

prev.addEventListener("click", () => {
    count--;
    changeImg();
})

nex.addEventListener("click", () => {
    count++;
    changeImg();
})

slide.addEventListener("mouseover", () => {
    console.log("mouseover");   
    clearInterval(timer);
})
slide.addEventListener("mouseout", () => {
    timer = setInterval(() => {
        count++;
        changeImg();
    }, 2000);
})

for(let i = 0;i<lis.length;i++){
    lis[i].addEventListener("click",()=>{
        count=i;
        changeImg;
    });
}

// 楼层====================================
let elevator = document.querySelector(".elevator");
let header = document.querySelector(".header");
let banner = document.querySelector(".banner");
let miaosha =document.querySelector(".miaosha");//秒杀
let youxuan = document.querySelector(".youxuan");//优选
let guangchang = document.querySelector(".guangchang");//广场
let tuijian = document.querySelector(".tuijian");//推荐
let search =document.querySelector(".search");
let searchM = document.querySelector(".search-m");
let form = document.querySelector(".form");
let logo = document.querySelector(".search-logo");
let headerHeight = header.offsetHeight;
let bannerHeight = banner.offsetHeight;
let miaoshaTop = headerHeight+bannerHeight+30;
let youxuanTop = miaoshaTop+miaosha.offsetHeight+20;
let guangchangTop = youxuanTop+youxuan.offsetHeight+20;
let tuijianTop = guangchangTop+guangchang.offsetHeight+20;

let Tops = [miaoshaTop,youxuanTop,guangchangTop,tuijianTop];

let elevators = document.querySelectorAll(".elevator a")
function changeColor(change){
    
    for(let i = 0;i<elevators.length;i++){
        if(i == change){
            elevators[i].classList.add("elevator_a_font_color");
        }else{
            elevators[i].classList.remove("elevator_a_font_color");
        }
    }
}
for(let i = 0;i<elevators.length;i++){
    elevators[i].addEventListener("click",()=>{
        document.documentElement.scrollTop = Tops[i];
        changeColor(i);
    })
}

document.onscroll = function(){
    let now = document.documentElement.scrollTop;
    console.log(now);
    if(now>=miaoshaTop){
        elevator.classList.add("elevator-fix");
        search.classList.add("search-fix");
        searchM.style.height = "50px";
        logo.style.display = "block"
        form.style.top = "8px";
    }else{
        elevator.classList.remove("elevator-fix");
        search.classList.remove("search-fix");
        searchM.style.height = "60px";
        logo.style.display = "none"
        form.style.top = "25px";
    }

    if(now>=tuijianTop){
        changeColor(3);
        return;
    }
    if(now>=guangchangTop){
        changeColor(2);
        return;
    }
    if(now>=youxuanTop){
        changeColor(1);
        return;
    }
    if(now>=miaoshaTop){
        changeColor(0);
        return
    }
}