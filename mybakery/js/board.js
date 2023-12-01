let setParam ={};
let cnt = 1;
let numberButton;

setParam = JSON.parse(localStorage.setParam || "{}");
console.log(setParam);

let bData= setParam.boardTable || [];

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
    for(i=COUNT_PER_PAGE*(count-1); i<COUNT_PER_PAGE*count; i++){
        html = "<tr>" +
                "    <td>"+(bData[i].boardId+1)+"</td>" +
                "    <th>" +
                "    <a href='#! class='title_b' onclick = 'js:title_btn("+i+")'>"+ bData[i].title +"</a>" +
                "    <p>테스트</p>" +
                "    </th>" +
                "    <td>"+ bData[i].upDa +"</td>" +
                "</tr>" 
        tbody.innerHTML += html;
    }
}

function title_btn(i){
    localStorage.setItem('getB', bData[i].boardId);
    location.href ='boardDt.html';
    console.log(bData[i]);
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

let admin = document.querySelector("#admin");
admin.addEventListener("dblclick",function (){
   let loginData = JSON.parse(sessionStorage.getItem("loginData"));
   if(loginData.admin === 1){
       if(confirm("MAKE BOARD")){
           location.href = "makeBoard.html";
       }
   }
});
    
setPageBtn();
setPageOf(cnt); // 첫페이지 첫진입

