let setParam ={};
function init(){
    console.log("init : eventTable.js !");
    setParam = (localStorage.setParam || {}); //JSON.parse
    console.log(setParam);
}

let 
setParam.eventTable = eventTable;
console.log(setParam);

let eData= setParam.eventTable;
/* 
<tr>
    <td>1</td>
    <th>
    <a href="#!">[공지사항] 개인정보 처리방침 변경안내처리방침</a>
    <p>테스트</p>
    </th>
    <td>2017.07.13</td>
</tr>
*/

const COUNT_PER_PAGE = 5;
const totalPageCount = () => {
    return Math.ceil(eData.length/COUNT_PER_PAGE);
   };

let html = "";

function setPageOf(count){
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    for(i=COUNT_PER_PAGE*(count-1); i<COUNT_PER_PAGE*count; i++){
        html = "<tr>" +
                "    <td>"+(eData[i].eventId+1)+"</td>" +
                "    <th>" +
                "    <a href='#! class='title_b' onclick = 'js:title_btn("+i+")'>"+ eData[i].title +"</a>" +
                "    <p>테스트</p>" +
                "    </th>" +
                "    <td>"+ eData[i].upDa +"</td>" +
                "</tr>" 
                tbody.innerHTML += html;
    }}


      
function title_btn(i){
    localStorage.setItem('eData', JSON.stringify(eData[i]));    
    location.href ='eventDT.html';
    console.log(eData[i]);
}
   

const pageBtn = document.querySelector('.nuBtn');


const setPageBtn = () => {
    pageBtn.innerHTML = '';
    for(let i = 1; i <= totalPageCount(); i++){
    pageBtn.innerHTML +=  `<span class="number-button" onclick="setPageOf(${i})" > ${i} </span`; 
      }
    };
    
setPageBtn();
setPageOf(1); // 첫페이지 첫진입
init();

