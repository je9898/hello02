fetch("header.html").then(function response(response){
    return response.text();
}).then(function data (data) {
    document.querySelector("header").innerHTML += data; /* '= '-> '+='로 변경 엎어치기 x*/
    let link = JSON.stringify(window.location.pathname).split('/');
    console.log(link[link.length-1].replaceAll(".html\"",""))
    let linkName = link[link.length-1].replaceAll(".html\"","");
    if(linkName === "boardDt" || linkName === "eventDt"){
        linkName = "board";
    }else if(linkName === "login" || linkName === "signUp") {
        linkName = "index";
    }else if (linkName === "shopDt"){
        linkName = "shop";
    }else if(linkName === "order"){
        linkName = "basket";
    }else if(linkName === "incruit"){
        linkName = "about";
    }
    document.querySelector("#"+linkName).setAttribute("class","active");

    if(sessionStorage.getItem("loginData")){
        let loginData = JSON.parse(sessionStorage.getItem("loginData"));
        let price = document.querySelector("#price");
        let id = loginData.id;
        if(localStorage.getItem(id) === null){
            price.innerHTML = "0원";
        }else{
            price.innerHTML = localStorage.getItem(id) + "원";
        }
    }


    return loginOut();
});

fetch("footer.html").then(function response(response){
        return response.text();
    }).then(function data (data) {
        document.querySelector("footer").innerHTML += data; /* '= '-> '+='로 변경 엎어치기 x*/
    });

//제휴업체 팝업
function alliance(){
    window.open("alliance.html","new", 
    "width=650, height=650, left=30, top=30, scrollbars=no,titlebar=no,status=no,resizable=no,fullscreen=no");
        }

// 로그인을 로그아웃으로 바꾸기
function loginOut(){
    if (sessionStorage.getItem("loginData")){
        document.querySelector(".log_in").innerHTML = `<a href="#" class="log_in" onclick="logout()">Logout</a>`;
    }
}

//로그아웃 클릭시 세션스토리지에 loginData 제거 후 새로고침
function logout() {
    sessionStorage.clear("loginData");
    alert("로그아웃 되었습니다.");
    location.href="index.html";
}

function goBasket(){
    if (!sessionStorage.getItem("loginData")){
        alert("로그인이 필요합니다.")
        location.href="login.html";
    }else{
        location.href="basket.html";
    }
}

function shopKate(kate){
    sessionStorage.setItem("sessionKate",kate);
    location.href="shop.html";
}

