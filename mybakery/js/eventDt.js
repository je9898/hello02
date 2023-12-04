const imgDiv = document.querySelector('.eventImg');
//const eventImg = document.querySelector(".eventImg")




//의 데이를 a 에 가져와서 담는다.

var getE = localStorage.getItem("getE");
let NB=""; //"" : 초기진입, "N" : 다음, "B" : 이전 
let point; //이미지 출력을 위한 변수 선언
console.log(getE);
//이벤트 포스터 출력 함수
function showE(NB){
    localStorage.getItem("getE");
    point = getE;
    console.log(point);
    if(NB === "N"){
       eventImg.innerHTML= point = getE +1; 
        //다음 페이지 이동
    }else if(NB==="B"){
        point = getE -1;
        //이전 페이지 이동
    }
    var eventImg = document.createElement('img');
    var imgURL = 'img/event/event-' + point +'.png';
    eventImg.src = imgURL;
    eventImg.classList.add('img-fluid');
    imgDiv.appendChild(eventImg);
}



function evChange(e) {
    NB=e;
    showE(NB);
}


showE()