const imgDiv = document.querySelector('.eventImg');
let getB = JSON.parse(sessionStorage.getItem("getB"));
let getBCnt = getB.boardId;
function evChange(NB){  //초기진입 : "F", 이전 : "B", 다음 : "N"
    let imgURL;
    console.log(getBCnt);
    if(getBCnt < 0){
        alert("이전글이 없습니다.")
        return;
    }
    imgDiv.innerHTML = "";
    
    if(NB === "N"){
        getBCnt = getBCnt+1;
        imgURL = 'img/event/event-' + getBCnt +'.png';
    }else if(NB==="B"){
        getBCnt = getBCnt-1;
        imgURL = 'img/event/event-' + getBCnt +'.png';
    }else if (NB==="F"){
        imgURL = 'img/event/event-' + getBCnt +'.png';
    }else{
        alert("비 정상적인 접근입니다.")
        return;
    }
    let eventImg = document.createElement('img');
    eventImg.src = imgURL;
    eventImg.classList.add('img-fluid');
    imgDiv.appendChild(eventImg);
}

function goBoard(){
    location.href = "board.html";

}

evChange("F")
