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

let searchInput = document.querySelector("#search");
let InputFocusYN = "N";

searchInput.onfocus = function(){
    InputFocusYN = "Y";
}
searchInput.onblur = function(){
    InputFocusYN = "N";
}
window.addEventListener("keydown",function (data){
    if(InputFocusYN === "Y" && data.key === "Enter"){
        searcheee();
    }
});
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