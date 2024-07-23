// 模糊查询======================================
let textfield = document.querySelector(".text");
let searchHelpr = document.querySelector(".search-helper")

let searchArr = ["小米手机","华为手机","苹果手机","vivo手机","oppo手机",
    "小米耳机","华为耳机","苹果耳机","vivo耳机","oppo耳机",
    "小米平板","华为平板","苹果平板","vivo平板","oppo平板"]

textfield.oninput = function(){
    console.log(textfield.value);
    console.log(textfield.innerHTML)
    searchHelpr.innerHTML = " ";
    for(var i = 0;i<searchArr.length;i++){
        if(searchArr[i].indexOf(textfield.value)!==-1&&textfield.value!==""){
            searchHelpr.innerHTML  += "<p>"+searchArr[i]+"</p>";
            searchHelpr.style.display = "block";
        }
    }
}

textfield.onblur = function(){
    searchHelpr.style.display = "none";
}