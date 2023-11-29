let setParam ={}
setParam.borderDat = borderDat;
//const eventImg = document.querySelector(".eventImg")
console.log(setParam);



//의 데이를 a 에 가져와서 담는다.

var getE = JSON.stringify(localStorage.getItem(""));
let NB=""; //"" : 초기진입, "N" : 다음, "B" : 이전
let point;
setParam.# = #
function showE(NB){
    if(NB===""){
        point = setParam.#
    }else if(NB==="N"){
        point = setParam.# +1; 
    }else if(NB==="B"){
        point = setParam.# -1;
    }
    imgDiv.removeChild(eventImg)
    var eventImg = document.createElement('img');
    const imgDiv = document.querySelector('.eventImg');
    var imgURL = 'img/event/event' + point +'.png';
    eventImg.src = imgURL;
    eventImg.alt = point;
    eventImg.classList.add('img-fluid');
    imgDiv.appendChild(eventimg);
}



function evChange(e) {
    location.href='eventDt'
    NB=e;
    showE(NB);
}


showE()