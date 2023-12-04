/*
* 기능 : localStorage 데이터 전달받기
* 기능 : 화면 진입 시 바로 init() 호출
*/
let loginData = JSON.parse(sessionStorage.getItem("loginData"));
let userNo = loginData.userNo;

function init(){
    console.log("init : basket.js !")
    console.log(setParam)
    makeBasketInfo();
}

let allPrice = 0;  //최종가격 컨트롤하자
const price1 = document.querySelector("#price-1");  //총가격
const price2 = document.querySelector("#price-2");  //할인가격
const price3 = document.querySelector("#price-3");  //최종가격
const mainI = [];   //1234 순번대로 그려지는게 아니기때문에 해당배열 순번을 저장해놓을거야

function makeBasketInfo(){
    console.log("func : makeBasketInfo() !")
    
    
    /* 장바구니 상세정보 그려 */
    let user = userNo;
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    let html = "";

    /*방어로직*/
    if(setParam.basket === null || setParam.basket === undefined || setParam.basket ===[]){
        tbody.innerHTML += "장바구니 내역이 없습니다.";
        return;
    }
    
    for(let i=0; i<setParam.basket.length; i++){
        console.log(userNo);
        if(setParam.basket[i].userNo === user){
            html += "   <tr class='cart-main'>" +
                "        <td class='product__cart__item'>" +
                "            <div class='product__cart__item__pic'>" +
                "                <img src='./img/menuImg/img_" + setParam.basket[i].mnuId + ".PNG' style='width: 100px' height='100px' alt='' class='menuImgs'>" + /*'./img/menuImg/img_" + setParam.basket[i].mnuId + ".PNG'*/
                "            </div>" +
                "            <div class='product__cart__item__text'>" +
                "                <h6>" + setParam.basket[i].mnuNa + "</h6>" +
                "                <h5>" + setParam.basket[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원</h5>" +
                "            </div>" +
                "        </td>" +
                "        <td class='quantity__item'>" +
                "            <div class='quantity'>" +
                "                 <div class='pro-qty'>" +
/*                "                       <span class='dec qtybtn minus-btn' value='" + i + "'>-</span>" +*/
                "                       <span class='dec qtybtn minus-btn' onclick='PlusMinus(" + i + ",\"minus\")'>-</span>" +
                "                       <input type='text'  id='" + setParam.basket[i].mnuId + "-cnt' value=" + setParam.basket[i].cnt + " disabled>" +
                "                       <span class='inc qtybtn plus-btn' onclick='PlusMinus(" + i + ",\"plus\")'>+</span>" +
                "                 </div>" +
                "            </div>" +
                "        </td>" +
                "        <td class='cart__price' id='" + setParam.basket[i].mnuId + "-price'>" + (setParam.basket[i].price * setParam.basket[i].cnt).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원</td>" +
                "        <td class='cart__close'><span class='icon_close' ></span></td>" +
                "    </tr>"
            mainI.push(i)   //해당순번 기억하자 12345가 아니다
            allPrice = allPrice + setParam.basket[i].price * setParam.basket[i].cnt;
            price1.innerHTML = allPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원";
            price3.innerHTML = allPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원";
        }
    }
    tbody.innerHTML += html;

    /*삭제버튼 이벤트*/
    let close = document.querySelectorAll(".icon_close");
    let cartMain = document.querySelectorAll(".cart-main");
    for(let i=0; i<close.length; i++){
        close[i].addEventListener("click",function (){
            if(confirm("정말 삭제하시겠습니까?")){
                cartMain[i].innerHTML = "";
                console.log(mainI[i])
                setParam.basket.splice(mainI[i], 1);
                localStorage.setItem("setParam",JSON.stringify(setParam));
                console.log(setParam);
                goNext("basket");
            }
        });
    }
    localStorage.setItem(loginData.id,allPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
}

function PlusMinus(i,type){
    let cnt = document.getElementById(setParam.basket[i].mnuId + '-cnt');
    let price = document.getElementById(setParam.basket[i].mnuId + '-price');
    if(type === "plus"){
        price.innerHTML = ((parseInt(price.innerText.replace(/(원|,|)/g, "")) / parseInt(cnt.value) * (parseInt(cnt.value) + 1)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')) + "원";
        cnt.setAttribute("value",parseInt(cnt.value) + 1);
        allPrice = allPrice + parseInt(price.innerText.replace(/(원|,|)/g, "")) / parseInt(cnt.value);
    }else if(type === "minus" && parseInt(document.getElementById(setParam.basket[i].mnuId + '-cnt').value) > 1){
            price.innerHTML = ((parseInt(price.innerText.replace(/(원|,|)/g, "")) / parseInt(cnt.value) * (parseInt(cnt.value) - 1)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')) + "원";
            cnt.setAttribute("value",parseInt(cnt.value) -1);
            allPrice = allPrice - parseInt(price.innerText.replace(/(원|,|)/g, "")) / parseInt(cnt.value);
    }else{
        cnt.setAttribute("value",1);
    }
    price1.innerHTML = allPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원";
    if(couponYN){
        price2.innerHTML = (allPrice/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원";
        price3.innerHTML = (allPrice - allPrice/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원";
        localStorage.setItem(loginData.id,(allPrice - allPrice/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    }else{
        price3.innerHTML = allPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원";
        localStorage.setItem(loginData.id,allPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    }
    dataFunc(parseInt(cnt.value),i);


}

function dataFunc(cnt,i){
    console.log("func : dataFunc() !")

    setParam.basket[i].cnt = cnt;
    localStorage.setItem("setParam",JSON.stringify(setParam));
    console.log(localStorage)
}


let coupon = document.querySelector("#coupon");
let couponText = document.querySelector("#couponText");
let couponYN = false;
coupon.addEventListener("click",function (){
    couponYN = confirm("신장개업 이벤트 10% 할인 당첨 !");
    if(couponYN){
        price2.innerHTML = (allPrice/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원";
        price3.innerHTML = (allPrice - allPrice/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원";
        couponText.disabled = true;
        coupon.disabled = true;
        couponText.setAttribute("placeholder","신장개업 10% 할인 완료!")
        coupon.innerHTML = "성공"
    }
});



function goNext(link){
    if(link === "order"){
        if(confirm("주문 하시겠습니까?")){
            let order = [];
            for(let i=0; i<setParam.basket.length; i++){
                if(setParam.basket[i].userNo === loginData.userNo){
                    order.push(setParam.basket[i]);
                }
            }
            setParam.order = order;
            localStorage.setItem("setParam",JSON.stringify(setParam));

            location.href = link + ".html";
        }
    }else{
        location.href = link + ".html";
    }
}


init();