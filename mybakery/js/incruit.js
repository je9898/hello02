const crNa = document.querySelector('#crName'); // 이름
const crBir = document.querySelector('#inBirth'); // 생년월일
const crPh = document.querySelector('#inPhone'); // 핸드폰번호
const crEm = document.querySelector('#crEm'); // 이메일
const crIntr = document.querySelector('#inText'); // 자기소개서
const crRe = document.querySelector('#incruitReset');// 리셋버튼
const crAd = document.querySelector('.incruit__input__add'); //주소

// 텍스트 예시

localStorage.clear(); // 비워주기

function init(){
    console.log("init : incruitData.js !");
    console.log(setParam);
}

//우편번호
function adBtn() {
    new daum.Postcode( {
      oncomplete: function( data ) {
        document.getElementById( 'inPost' ).value = data.zonecode;
        document.getElementById( 'inAdr2' ).value = data.address;
        document.getElementById( 'inAdr' ).focus();
      }
    } ).open();
  }

//초기화 버튼
crRe.addEventListener("click",function (){
    document.querySelectorAll("input[type=text], input[type=textarea]")[0].value="";
    alert("초기화 되었습니다."); 
    });

function saveData() {
    if(crNa.value === "" ||
        crPh.value === "" ||
        crEm.value === "" ||
        crIntr.value === "" ||
        crAd.value === ""){
        alert("모든 내용을 입력해 주세요.")
        return;
    }

let incruitData = setParam.cruTable.length;
    console.log(incruitData)
    
 let params = {};
    if(setParam.cruTable.length === 0){
        params.crNo = 0;
    }else{
        params.crNo = setParam.cruTable[incruitData-1].crNo +1;
    }
    params.crNa = setParam.value;
    params.crBir = setParam.value;
    params.crAd = setParam.value;
    params.crPh = setParam.value;
    params.crEm = setParam.value;
    params.crIntr = setParam.value;

    setParam.cruTable.push(params);
    localStorage.setItem("setParam", JSON.stringify(setParam));
    alert("전송완료");
    location.href = "index.html";
    console.log("Data saved:", params);
}

init();