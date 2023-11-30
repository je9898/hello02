let setParam ={}
setParam.borderDat = borderDat;
//const eventImg = document.querySelector(".eventImg")
console.log(setParam);



//의 데이를 a 에 가져와서 담는다.

var getE = JSON.stringify(localStorage.getItem(""));
let NB=""; //"" : 초기진입, "N" : 다음, "B" : 이전 
let point; //이미지 출력을 위한 변수 선언
setParam.getE = getE[No]

//이벤트 포스터 출력 함수
function showE(NB){
    if(NB===""){
        point = setParam.getE
    }else if(NB==="N"){
        point = setParam.getE +1; 
        //다음 페이지 이동
    }else if(NB==="B"){
        point = setParam.getE -1;
        //이전 페이지 이동
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
    location.href='eventDt' //이벤트 슬라이드 클릭시 이동을 위해 추가
    NB=e;
    showE(NB);
}


showE()