/*
* 기능 : localStorage 데이터 전달받기
* 기능 : 화면 진입 시 바로 init() 호출
*/
let setParam = {};
let boardTable = [];
function init(){
    console.log("init : makeBoard.js !")
    setParam = JSON.parse(localStorage.setParam || "{}");
    boardTable = setParam.boardTable || [];
    bdToday.value = today("yy.mm.dd");
}

const bdTitle = document.querySelector("#bdTitle"); //제목
const bdKate = document.querySelector("#bdKate"); //카테
const bdToday = document.querySelector("#bdToday"); //작성일
const bdDetail = document.querySelector("#bdDetail"); //내용
const makeBtn = document.querySelector("#makeBtn"); //작성
const resetBtn = document.querySelector("#resetBtn"); //취소

makeBtn.addEventListener("click",function (){
    console.log("func : makeBtn() !")

    if(bdTitle.value === "" ||
        bdKate.value === "0" ||
        bdDetail.value === ""){
        alert("모든 내용을 입력해 주세요 !")
        return;
    }

    let boardCnt = boardTable.length || 0;

    let loginData = JSON.parse(sessionStorage.getItem("loginData"));

    let params = {};
    params.boardId = boardCnt;
    params.userNo = loginData.userNo;
    params.title = bdTitle.value;
    params.con = bdDetail.value;
    params.kate = bdKate.value;
    params.upDa = today("yy.mm.dd");
    params.regDa = today("yy.mm.dd");

    boardTable.push(params);

    //게시글 데이터 올리자

    setParam.boardTable = boardTable;
    localStorage.setItem("setParam",JSON.stringify(setParam));
    console.log(localStorage)
    alert("작성완료 !")
    localStorage.setItem('getB', boardCnt);
    location.href = "boardDt.html";
});

//날짜 리턴
function today(type){
    console.log("func : today() !")

    let today = new Date();

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let day = today.getDay();  // 요일
    if(type==="yymmdd"){
        return year + month + date;
    }else if(type==="mmdd"){
        return month + date;
    }else if(type==="yy"){
        return year;
    }else if(type==="mm"){
        return month;
    }else if(type==="dd"){
        return date;
    }else if(type==="day"){
        return day;
    }else if(type==="yy.mm.dd"){
        return year + "." +  month + "." + date;
    }else if(type==="mm.dd"){
        return month + "." + date;
    }
}

init();
