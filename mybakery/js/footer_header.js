fetch("footer.html").then(function response(response){
        return response.text();
    }).then(function data (data) {
        document.querySelector("footer").innerHTML += data; /* '= '-> '+='로 변경 엎어치기 x*/
    });


fetch("header.html").then(function response(response){
        return response.text();
    }).then(function data (data) {
        document.querySelector("header").innerHTML += data; /* '= '-> '+='로 변경 엎어치기 x*/
    });


//제휴업체 팝업
function alliance(){
    window.open("alliance.html","new", 
    "width=650, height=650, left=30, top=30, scrollbars=no,titlebar=no,status=no,resizable=no,fullscreen=no");
        }

