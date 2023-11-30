let setParam ={}

//const eventImg = document.querySelector(".eventImg")
console.log(setParam);



//의 데이를 a 에 가져와서 담는다.
//let param = JSON.parse(localStorage.getItem("boardTable"));


setParam.boardTable = boardTable;
console.log(setParam);


let html = "";
let BoardDt =  setParam.boardTable[boardId]
    html = "<div class='boardName'>"  +
                "<h3>" + BoardDt.title + "</h3>" +
            "</div>" +
            "<div class='boardDate'>" +
            "   <input class='boardDate' type='text' value='" + BoardDt.regDa + "' disabled>" + 
            "</div>" +
            "<div>" + 
            "   <input class='boardDetail' type='text' value='" + BoardDt.con + "' disabled>" + 
            "</div>"
            let showBoard = document.querySelector(".showBoard");
            showBoard.innerHTML += html;


