let cnt = 1;
let numberButton;
let bData= setParam.boardTable;
const COUNT_PER_PAGE = 5;
const totalPageCount = () => {
    return Math.ceil(bData.length/COUNT_PER_PAGE);
   };

let html = "";
let tbody = document.querySelector("tbody");
function setPageOf(count){
    if(bData.length === 0){
        return;
    }

    cnt = count;

    tbody.innerHTML = "";
    for(let i=COUNT_PER_PAGE*(count-1); i<COUNT_PER_PAGE*count; i++){
        if(i === bData.length){
            break;
        }
        let kate;
        console.log(COUNT_PER_PAGE*(count-1))
        console.log(COUNT_PER_PAGE*count -1)
        if(bData[i].kate === "1"){
            kate = "이벤트"
        }else{
            kate = "공지사항"
        }
        html = "<tr>" +
                "    <td>"+(bData[i].boardId+1)+"</td>" +
                "    <th>" +
                "    <a href='#! class='title_b' onclick = 'js:title_btn("+i+")'>"+ bData[i].title +"</a>" +
                "    <p>테스트</p>" +
                "    </th>" +
                "    <td>"+ bData[i].upDa +"</td>" +
                "    <td>"+ kate +"</td>" +
                "</tr>" 
                tbody.innerHTML += html;}
        }

function title_btn(i){
    sessionStorage.setItem('getB', JSON.stringify(bData[i]));

    if(bData[i].kate === "1"){
        location.href ='eventDt.html';
    }else{
        location.href ='boardDt.html';
    }

}
   

const pageBtn = document.querySelector('.nuBtn');


const setPageBtn = () => {

    if(bData.length === 0){
        let boardTable = document.querySelector(".board-table");
        boardTable.innerHTML = "<h3 id='noBoard'>없다 !</h3>";
        return;
    }

    pageBtn.innerHTML = '';
    for(let i = 1; i <= totalPageCount(); i++){
    pageBtn.innerHTML +=  `<span class="number-button" onclick="setPageOf(${i})" > ${i} </span`;
      }
    };

// 작성진입
let admin = document.querySelector("#admin");
admin.addEventListener("dblclick",function (){
   let loginData = JSON.parse(sessionStorage.getItem("loginData"));
   if(loginData.admin === 1){
       if(confirm("MAKE BOARD")){
           location.href = "makeBoard.html";
       }
   }
});
/*
*
* let setParam = {};
function init(){
    setParam = JSON.parse(localStorage.setParam || "{}");
    testFunc(); //테스트 데이터 넣자
}



let testSearchButton = document.querySelector("#testSearchButton");


//검색버튼 이벤트
testSearchButton.addEventListener("click", function (){
    let searchValue =  testSearchInput.value;  //검색어
    setParam.testSearchData.push(searchValue);  //최근 검색어 저장
    let searchNumber = [];  //몇번째 친구에 검색어가 포함되어 있는지 저장
    setParam.menuTable.forEach(function (data, index){ // forEach문으로 setParam.menuTable의 mnuNa와 searchValue 비교
       if(data.mnuNa.indexOf(searchValue)>0){   //indexOf 사용해 비교대상 문구와 비교 있으면 양수 없으면 음수
           searchNumber.push(index);
       }
    });

    let search = document.querySelector("#search");
    search.innerHTML = "";  //재검색시 초기화 해주자

    if(searchNumber.length === 0){  //검색결과 없으면 이거타자
        search.innerHTML += "그런건없네요"
    }else{  // 검색결과 있으면 그려주자
        searchNumber.forEach(function (data, index){
            search.innerHTML += data + ". mnuNa : " + setParam.menuTable[data].mnuNa + " + mnuId : " + setParam.menuTable[data].mnuId + "<br>";
        });
    }
    let addSearch = document.querySelector("#addSearch");
    if(setParam.testSearchData.length === 1){ //첫번째일때 한번 비워주자
        addSearch.innerHTML = "";
    }
    addSearch.innerHTML += setParam.testSearchData[setParam.testSearchData.length-1] + " <br>"; //최근검색어 저장한 배열 맨 뒤에거만 올리자
    console.log(setParam.testSearchData)
});



//엔터키로 검색할거면 이거 쓰셈
window.addEventListener("keydown",function (data){
    if(data.key === "Enter"){
        testSearchButton.click();
    }
});*/
let testSearchInput = document.querySelector("#search");

function searcheee(){
    let searchValue =  testSearchInput.value;  //검색어
    console.log("검색어 : " + searchValue)
    let searchNumber = [];  //몇번째 친구에 검색어가 포함되어 있는지 저장
    setParam.boardTable.forEach(function (data, index){ // forEach문으로 setParam.menuTable의 mnuNa와 searchValue 비교
        if(data.title.indexOf(searchValue)>=0){   //indexOf 사용해 비교대상 문구와 비교 있으면 양수 없으면 음수
            searchNumber.push(index);
        }
    });
    console.log(searchNumber)
    if(searchNumber.length === 0){  //검색결과 없으면 이거타자
        alert("검색결과가 없습니다.");
        return;
    }else{  // 검색결과 있으면 그려주자
        searchFunc(searchNumber)
    }
}

function searchFunc (searchNumber){
    tbody.innerHTML = "";
    for(let i=0; i<searchNumber.length; i++){
        let kate;
        if(bData[searchNumber[i]].kate === "1"){
            kate = "이벤트"
        }else{
            kate = "공지사항"
        }
        html = "<tr>" +
            "    <td>"+(bData[searchNumber[i]].boardId+1)+"</td>" +
            "    <th>" +
            "    <a href='#! class='title_b' onclick = 'js:title_btn("+i+")'>"+ bData[searchNumber[i]].title +"</a>" +
            "    <p>테스트</p>" +
            "    </th>" +
            "    <td>"+ bData[searchNumber[i]].upDa +"</td>" +
            "    <td>"+ kate +"</td>" +
            "</tr>"
        tbody.innerHTML += html;
    }
}


setPageBtn();
setPageOf(cnt); // 첫페이지 첫진입c