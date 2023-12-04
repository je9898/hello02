let boardData = JSON.parse(sessionStorage.getItem("getB"));
console.log(boardData);
let showBoard = document.querySelector(".showBoard");
let html = "";

//받은 데이터에 해당하는 번호 이미지 출력
html = "<div class='boardName'>"  +
            "<h3>" + boardData.title + "</h3>" +
        "</div>" +
        "<div class='boardDate2'>" +
        "   <input class='boardDate' type='text' value=' 등록일 : " + boardData.regDa + "' disabled>" +
        "</div>" +
        "<div>" +
        "   <input class='boardDetail' type='text' value='" + boardData.con + "' disabled>" +
        "</div>"
showBoard.innerHTML += html;
