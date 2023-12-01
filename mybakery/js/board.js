let setParam ={};
let cnt = 1;
let numberButton;
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
    },
    {
        boardId : 2,
        userNo : 1,
        title : "신제품 1+1",
        con : "신제품 1+1 이벤트",
        regDa : 20220129,
        upDa : 20220110
    },
    {
        boardId : 3,
        userNo : 1,
        title : "신제품 1+1",
        con : "신제품 1+1 이벤트",
        regDa : 20220128,
        upDa : 20220111
    },
    {
        boardId : 4,
        userNo : 1,
        title : "신제품 1+1",
        con : "신제품 1+1 이벤트",
        regDa : 20220120,
        upDa : 20211225
    },
    {
        boardId : 5,
        userNo : 1,
        title : "신제품 1+1",
        con : "신제품 1+1 이벤트",
        regDa : 20211220,
        upDa : 20211225
    },
    {
        boardId : 6,
        userNo : 1,
        title : "신제품 1+1",
        con : "신제품 1+1 이벤트",
        regDa : 20211220,
        upDa : 20211225
    },
    {
        boardId : 7,
        userNo : 1,
        title : "신제품 1+1",
        con : "신제품 1+1 이벤트",
        regDa : 20211220,
        upDa : 20211225
    },
    {
        boardId : 8,
        userNo : 1,
        title : "신제품 1+1",
        con : "신제품 1+1 이벤트",
        regDa : 20211220,
        upDa : 20211225
    },
    {
        boardId : 9,
        userNo : 1,
        title : "신제품 1+1",
        con : "신제품 1+1 이벤트",
        regDa : 20211220,
        upDa : 20211225
    },
    {
        boardId : 10,
        userNo : 1,
        title : "신제품 1+1",
        con : "신제품 1+1 이벤트",
        regDa : 20211220,
        upDa : 20211225
    },
    {
        boardId : 11,
        userNo : 1,
        title : "신제품 1+1",
        con : "신제품 1+1 이벤트",
        regDa : 20211220,
        upDa : 20211225
    },
    {
        boardId : 12,
        userNo : 1,
        title : "신제품 1+1",
        con : "신제품 1+1 이벤트",
        regDa : 20220109,
        upDa : 20220120
    },
    {
        boardId : 13,
        userNo : 1,
        title : "신제품 1+1",
        con : "신제품 1+1 이벤트",
        regDa : 20220129,
        upDa : 20220110
    },
    {
        boardId : 14,
        userNo : 1,
        title : "신제품 1+1",
        con : "신제품 1+1 이벤트",
        regDa : 20220128,
        upDa : 20220111
    },
    {
        boardId : 15,
        userNo : 1,
        title : "신제품 1+1",
        con : "신제품 1+1 이벤트",
        regDa : 20220120,
        upDa : 20211225
    },
    {
        boardId : 16,
        userNo : 1,
        title : "신제품 1+1",
        con : "신제품 1+1 이벤트",
        regDa : 20211220,
        upDa : 20211225
    },
    {
        boardId : 17,
        userNo : 1,
        title : "신제품 1+1",
        con : "신제품 1+1 이벤트",
        regDa : 20211220,
        upDa : 20211225
    },
    {
        boardId : 18,
        userNo : 1,
        title : "신제품 1+1",
        con : "신제품 1+1 이벤트",
        regDa : 20211220,
        upDa : 20211225
    },
    {
        boardId : 19,
        userNo : 1,
        title : "신제품 1+1",
        con : "신제품 1+1 이벤트",
        regDa : 20211220,
        upDa : 20211225
    },
    {
        boardId : 20,
        userNo : 1,
        title : "신제품 1+1",
        con : "신제품 1+1 이벤트",
        regDa : 20211220,
        upDa : 20211225
    },
    {
        boardId : 21,
        userNo : 1,
        title : "신제품 1+1",
        con : "신제품 1+1 이벤트",
        regDa : 20211220,
        upDa : 20211225
    },
    {
        boardId : 22,
        userNo : 1,
        title : "신제품 1+1",
        con : "신제품 1+1 이벤트",
        regDa : 20211220,
        upDa : 20211225
    }



    

]
setParam.boardTable = boardTable;
console.log(setParam);

let bData= setParam.boardTable;
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
    return Math.ceil(bData.length/COUNT_PER_PAGE);
   };

let html = "";

function setPageOf(count){
    cnt = count;
    
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    for(i=COUNT_PER_PAGE*(count-1); i<COUNT_PER_PAGE*count; i++){
        html = "<tr>" +
                "    <td>"+(bData[i].boardId+1)+"</td>" +
                "    <th>" +
                "    <a href='#! class='title_b' onclick = 'js:title_btn("+i+")'>"+ bData[i].title +"</a>" +
                "    <p>테스트</p>" +
                "    </th>" +
                "    <td>"+ JSON.stringify(bData[i].upDa).substring(0,1) +"</td>" +
                "</tr>" 
        tbody.innerHTML += html;
    }
}


      
function title_btn(i){
    localStorage.setItem('bData', JSON.stringify(bData[i]));    
    location.href ='boardDt.html';
    console.log(bData[i]);
}
   

const pageBtn = document.querySelector('.nuBtn');


const setPageBtn = () => {
    pageBtn.innerHTML = '';
    for(let i = 1; i <= totalPageCount(); i++){
    pageBtn.innerHTML +=  `<span class="number-button" onclick="setPageOf(${i})" > ${i} </span`;
      }
    };
    
setPageBtn();
setPageOf(cnt); // 첫페이지 첫진입

