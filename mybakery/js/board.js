let setParam ={};


 

// border testData
let borderDat =[
    {
        bId : 1,
        num : 1,
        title :'[공지사항] 개인정보 처리방침 변경안내처리방침',
        date : '2023.11.22'
    },
    {
        bId : 2,
        num : 2,
        title :'[공지사항] 개인정보 처리방침 변경안내처리방침',
        date : '2023.11.23'
    },
    {
        bId : 3,
        num : 3,
        title :'[공지사항] 개인정보 처리방침 변경안내처리방침',
        date : '2023.11.24'
    }
]

setParam.borderDat = borderDat;
console.log(setParam);

let bData= setParam.borderDat
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
let html = "";
for(i=0; i<bData.length; i++){
    html = "<tr>" +
            "    <td>"+bData[i].num+"</td>" +
            "    <th>" +
            "    <a href='#!'>"+ bData[i].title +"</a>" +
            "    <p>테스트</p>" +
            "    </th>" +
            "    <td>"+ bData[i].date +"</td>" +
            "</tr>" 
            let tbody = document.querySelector("tbody");
            tbody.innerHTML += html;
        }

