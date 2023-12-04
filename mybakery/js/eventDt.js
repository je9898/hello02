const imgDiv = document.querySelector('.eventImg');
let getE = sessionStorage.getItem("getE");

function evChange(NB){  //초기진입 : "F", 이전 : "B", 다음 : "N"
    let eventImg = document.createElement('img');
    let imgURL;

    if(NB === "N"){
       imgURL = 'img/event/event-' + getE+1 +'.png';
    }else if(NB==="B"){
        imgURL = 'img/event/event-' + getE-1 +'.png';
    }else if (NB==="F"){
        imgURL = 'img/event/event-' + getE +'.png';
    }else{
        alert("비 정상적인 접근입니다.")
        return;
    }

    eventImg.src = imgURL;
    eventImg.classList.add('img-fluid');
    imgDiv.appendChild(eventImg);
}


evChange("F")