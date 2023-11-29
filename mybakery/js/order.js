/*
* 기능 : localStorage 데이터 전달받기
* 기능 : 화면 진입 시 바로 init() 호출
*/
let setParam = {};
function init(){
    console.log("init : basket.js !")
    fetch("footer.html")
        .then(function response(response){
            return response.text()
        })
        .then(function data (data) {
            document.querySelector("footer").innerHTML += data; /* '= '-> '+='로 변경 엎어치기 x*/
        });


    fetch("header.html")
        .then(function response(response){
            return response.text()
        })
        .then(function data (data) {
            document.querySelector("header").innerHTML += data; /* '= '-> '+='로 변경 엎어치기 x*/
        });
    setParam = JSON.parse(localStorage.setParam || "{}");
    console.log(setParam)

    makeOrderInfo(setParam.userNo);
}

const mainI = [];   //1234 순번대로 그려지는게 아니기때문에 해당배열 순번을 저장해놓을거야
function makeOrderInfo(usNo){
    console.log("func : makeOrderInfo() !")
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    for(let i=0; i<setParam.order.length; i++) {
        mainI.push(i);
        console.log(mainI)
        let html = "";
        html += "<tr>" +
            "        <td class='product__cart__item'>" +
            "            <div class='product__cart__item__pic'>" +
            "                <img src='./img/menuImg/img_" + setParam.order[i].mnuId + ".PNG' style='width: 100px' height='100px' alt=''>" +
            "            </div>" +
            "            <div class='product__cart__item__text'>" +
            "                <h6>" + setParam.order[i].mnuNa + "</h6>" +
            "            </div>" +
            "        </td>" +
            "        <td class='cart__price'>" + (setParam.order[i].price * setParam.order[i].cnt).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원</td>" +
            "        <td class='cart__stock'>" + setParam.order[i].cnt + "개</td>" +
            "        <td class='cart__btn'><a href='#' class='primary-btn' onclick='addBasket(" + i + ");'>장바구니에 담기</a></td>" +
            "    </tr>" +
            "    </tbody>";

        tbody.innerHTML += html;
    }
}

function addBasket(index){
    const param = {};

    param.cnt = setParam.order[index].cnt;
    param.mnuId = setParam.order[index].mnuId;
    param.mnuNa = setParam.order[index].mnuNa;
    param.price = setParam.order[index].price;
    param.userNo = setParam.userNo;

    setParam.basket.push(param);

    localStorage.setItem("setParam",JSON.stringify(setParam));

}
function goNext(link){
    location.href = link + ".html";
}


init();