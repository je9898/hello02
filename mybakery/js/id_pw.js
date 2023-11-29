function idFindButton(){
    const id_find_name = document.querySelector('.id_find_name').value;
    const id_find_phone = document.querySelector('.id_find_phone').value;


    const idFind = userData.find((data)=>{
        return data.name == id_find_name && data.phone == id_find_phone
    })
    let idIdx = 0;
    const idResult = userData[idIdx].id

    if (idFind){
            alert("아이디는 " + idResult + " 입니다.");
  
    }else if (!idFind){
        alert("회원 정보가 없습니다.");
    }
    
}

function pwFindButton(){
    const pw_find_id = document.querySelector('.pw_find_id').value;


    const pwFind = userData.find((data)=>{
        return data.id == pw_find_id
    })
    let pwIdx = 0;
    const pwResult = userData[pwIdx].pw

    if (pwFind){
            alert("비밀번호는 " + pwResult + " 입니다.");
  
    }else if (!pwFind){
        alert("회원 정보가 없습니다.");
    }
    
}

