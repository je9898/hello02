const crNa = document.querySelector('#crName'); // 이름
const crBir = document.querySelector('#inBirth'); // 생년월일
const crPh = document.querySelector('#inPhone'); // 핸드폰번호
const crEm = document.querySelector('#crEm'); // 이메일
const crIntr = document.querySelector('#inText'); // 자기소개서
const crSb = document.querySelector('#incruitSubmit');// 제출버튼
const crRe = document.querySelector('#incruitReset');// 리셋버튼 
const crAd = document.querySelector('.incruit__input__add'); //주소

// 텍스트 예시
let setParam = {};

localStorage.clear(); // 비워주기

function init(){
    console.log("init : incruitData.js !");
    setParam = (localStorage.setParam || {}); //JSON.parse
    console.log(setParam);
}


crNa.addEventListener("click",function (){
    if(this.value==="홍길동"){
        crNa.value = "";
    }
});

crBir.addEventListener("click",function (){
    if(this.value==="991010"){
        crBir.value = "";
    }
});


crPh.addEventListener("click",function (){
    if(this.value==="010-0000-0000"){
        crPh.value = "";
    }
});

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

crEm.addEventListener("click",function (){
    if(this.value==="exm@exm.com"){
        crEm.value = "";
    }
});

crIntr.addEventListener("click",function (){
    if(this.value==="내용을 입력해주세요."){
        crIntr.value = "";
    }
});

// 제출
crSb.addEventListener("click",function (){
    if(crNa.value === "" ||
    crPh.value === "" ||
    crEm.value === "" ||
    crIntr.value === "" ||
    crAd.value === ""){
    alert("모든 내용을 입력해 주세요.")
    return;
    saveData();
    }})

//초기화 버튼    
crRe.addEventListener("click",function (){
    document.querySelectorAll("input[type=text], input[type=textarea]")[0].value="";
    alert("초기화 되었습니다."); 
    });

function saveData() {
let incruitData = setParam.cruTable.length;
    
 let params = {};
    params.crNo = setParam.cruTable[incruitData-1].incruitData +1;
    params.crNa = setParam.value;
    params.crBir = setParam.value;
    params.crAd = setParam.value;
    params.crPh = setParam.value;
    params.crEm = setParam.value;
    params.crIntr = setParam.value;

    setParam.cruTable.push(params);
    localStorage.setItem("setParam", JSON.stringify(setParam));
    console.log("Data saved:", params);
}

//저장
    // let incruitData = setParam.cruTable.length;

    // let params = {};
    // params.crNo = setParam.cruTable[incruitData-1].incruitData +1;
    // params.crNa = setParam.value;
    // params.crBir = setParam.value;
    // params.crAd = setParam.value;
    // params.crPh = setParam.value;
    // params.crEm = setParam.value;
    // params.crIntr = setParam.value;

    // setParam.cruTable.push(params);

    // localStorage.setItem("setParam",JSON.stringify(setParam));
    // console.log(localStorage);

init();