fetch("footer.html").then(function response(response){
        return response.text();
    }).then(function data (data) {
        document.querySelector("footer").innerHTML += data; /* '= '-> '+='로 변경 엎어치기 x*/
    });


fetch("header.html").then(function response(response){
        return response.text();
    }).then(function data (data) {
        document.querySelector("header").innerHTML += data; /* '= '-> '+='로 변경 엎어치기 x*/
        return loginOut();
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
    location.reload();
}