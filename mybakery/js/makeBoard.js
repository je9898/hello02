/*
* 기능 : localStorage 데이터 전달받기
* 기능 : 화면 진입 시 바로 init() 호출
*/
let setParam = {};
function init(){
    console.log("init : makeBoard.js !")

    fetch("footer.html")
        .then(function response(response){
            return response.text()
        })
        .then(function data (data) {
            document.querySelector("footer").innerHTML += data; /* '= '-> '+='로 변경 엎어치기 x*/
        });

    fetch("header.html")
        .then(function response(response){
            return response.text()
        })
        .then(function data (data) {
            document.querySelector("header").innerHTML += data; /* '= '-> '+='로 변경 엎어치기 x*/
        });

    /*text*/
    let boardTable = [
        {
            boardId : 0,
            userNo : 1,
            title : "신제품 1+1",
            con : "신제품 1+1 이벤트",
            regDa : 20220109,
            upDa : 20220120
        },
        {
            boardId : 1,
            userNo : 1,
            title : "신제품 1+1",
            con : "신제품 1+1 이벤트",
            regDa : 20220109,
            upDa : 20220120
        }
    ]
    setParam = JSON.parse(localStorage.setParam || "{}");

    if(setParam.boardTable === null || setParam.boardTable === undefined ){
        setParam.boardTable = boardTable;
        localStorage.setItem("setParam",JSON.stringify(setParam));
    }
    /*text*/

    console.log(setParam)
    bdToday.value =today("yy.mm.dd");
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

    let boardCnt = setParam.boardTable.length;

    let params = {};
    params.boardId = setParam.boardTable[boardCnt-1].boardId +1;
    params.userNo = "1";//setParam.user.userNo;
    params.title = bdTitle.value;
    params.con = bdDetail.value;
    params.kate = bdKate.value;
    params.upDa = today("yymmdd");

    setParam.boardTable.push(params);

    //게시글 데이터 올리자
    localStorage.setItem("setParam",JSON.stringify(setParam));
    console.log(localStorage)
    alert("작성완료 !")
    location.href = "공지목록.html";
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
