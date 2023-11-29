
// 세션스토리지에서 loginData를 받을경우 login을 logout버튼으로 바꿈, 나중에 헤더로 연결 해야함
window.onload = () => {
    if (sessionStorage.getItem("loginData")){
        document.querySelector(".log_in").innerHTML = `<a href="#" class="log_out" onclick="logout()">Logout</a>`;
    }
}


// 로그인 버튼 클릭시 입력한 id, pw를 data.js와 비교, 맞을시 json형태로 세션스토리지에 저장, 나중에 헤더에 연결 해야 함
function loginBtn(){
    const userId = document.querySelector('#login_id').value;
    const userPw = document.querySelector('#login_pw').value;

    const login = userData.find((data)=>{
        return data.id == userId && data.pw == userPw
    })

    if (login){
            alert("로그인 되었습니다.");
            const loginData = JSON.stringify({
                id: userId,
                pw: userPw,
                loginyn: "y"
            })
            sessionStorage.setItem("loginData", loginData);
            location.href="index.html";    
    }else if (!login){
        alert("아이디 또는 비밀번호가 틀립니다.");
    }
    
}

//로그아웃 클릭시 세션스토리지에 loginData 제거 후 새로고침
function logout() {
    sessionStorage.clear("loginData");
    alert("로그아웃 되었습니다.");
    location.reload();
}
