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