if(localStorage.userData === null || localStorage.userData === undefined || JSON.stringify(localStorage.userData) === "[]"){
    localStorage.setItem("userData",JSON.stringify(userData));
}
    const localIdPw = JSON.parse(localStorage.getItem("userData"));

function idFindButton(){
    const id_find_name = document.querySelector('.id_find_name').value;
    const id_find_phone = document.querySelector('.id_find_phone').value;


    const idFind = localIdPw.find((data)=>{
        return data.name == id_find_name && data.phone == id_find_phone
    })

    if (idFind){
            alert("아이디는 " + idFind.id + " 입니다.");
  
    }else if (!idFind){
        alert("회원 정보가 없습니다.");
    }
    
}

function pwFindButton(){
    const pw_find_id = document.querySelector('.pw_find_id').value;
    const pw_find_phone = document.querySelector('.pw_find_phone').value;


    const pwFind = localIdPw.find((data)=>{
        return data.id == pw_find_id && data.phone == pw_find_phone
    })

    if (pwFind){
            alert("비밀번호는 " + pwFind.pw + " 입니다.");
  
    }else if (!pwFind){
        alert("회원 정보가 없습니다.");
    }
    
}

