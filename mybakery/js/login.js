const userId = document.querySelector('#login_id');
const userPw = document.querySelector('#login_pw');
const keepId = document.querySelector("#keepId");

// 로컬 스토리지에 들어가있는 id가 value에 들어가고 체크상태 유지
window.onload = () => {
    const keepIdValue = JSON.parse(localStorage.getItem("keepId"));

    if (keepIdValue != ""){
        userId.value = keepIdValue;
        keepId.checked = true;
}
    }

// 데이터js의 내용이 로컬저장소에 없을시 저장해줌
if(localStorage.userData === null || localStorage.userData === undefined || JSON.stringify(localStorage.userData) === "[]"){
    localStorage.setItem("userData",JSON.stringify(userData));
}
    const localLogin = JSON.parse(localStorage.getItem("userData"));
// 로그인 버튼 클릭시 입력한 id, pw를 data.js와 비교, 맞을시 json형태로 세션스토리지에 저장, 나중에 헤더에 연결 해야 함
function loginBtn(){
    const login = localLogin.find((data)=>{
        return data.id == userId.value && data.pw == userPw.value
    })

    if (login){
            alert("로그인 되었습니다.");
            const loginData = JSON.stringify({
                id: userId.value,
                pw: userPw.value,
                userNo: login.userNo
            })
            sessionStorage.setItem("loginData", loginData);
            localStorage.setItem("keepId",JSON.stringify(userId.value)); //로그인 성공시에도 아이디 저장되게 함
            return location.href="index.html";
    }else if (!login){
        alert("아이디 또는 비밀번호가 틀립니다.");
    }

//아이디저장 기능
    if (keepId.checked){
        localStorage.setItem("keepId",JSON.stringify(userId.value));
        return location.reload();
    } else if (!keepId.checked){
        localStorage.removeItem("keepId");
        return location.reload();
    }
}


