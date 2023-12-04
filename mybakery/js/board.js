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
    
setPageBtn();
setPageOf(cnt); // 첫페이지 첫진입c