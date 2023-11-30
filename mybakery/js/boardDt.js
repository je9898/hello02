let setParam ={}

//const eventImg = document.querySelector(".eventImg")
console.log(setParam);



//의 데이를 a 에 가져와서 담는다.



let param = JSON.parse(localStorage.getItem("bData"));


setParam.param = param;
console.log(setParam);

//받은 데이터에 해당하는 번호 이미지 출력
let html = "";
let BoardDt =  setParam.param
    html = "<div class='boardName'>"  +
                "<h3>" + BoardDt.title + "</h3>" +
            "</div>" +
            "<div class='boardDate2'>" +
            "   <input class='boardDate' type='text' value=' 등록일 : " + BoardDt.regDa + "' disabled>" + 
            "</div>" +
            "<div>" + 
            "   <input class='boardDetail' type='text' value='" + BoardDt.con + "' disabled>" + 
            "</div>"
            let showBoard = document.querySelector(".showBoard");
            showBoard.innerHTML += html;


