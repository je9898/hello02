let userNo = 1;
/*
* 기능 : localStorage 데이터 전달받기
* 기능 : 화면 진입 시 바로 init() 호출
*/
let setParam = {};
function init(){
    console.log("init : basket.js !")
    fetch("footer.html").then(function response(response){
        return response.text();
    }).then(function data (data) {
        document.querySelector("footer").innerHTML += data; /* '= '-> '+='로 변경 엎어치기 x*/
    });


    fetch("header.html").then(function response(response){
        return response.text();
    }).then(function data (data) {
        document.querySelector("header").innerHTML += data; /* '= '-> '+='로 변경 엎어치기 x*/
    });
    //localStorage 데이터 받아 쓰기 (setParam 에 저장)
    setParam = JSON.parse(localStorage.setParam || "{}");
    console.log(localStorage.setParam)
    //localStorage 데이터 받아 쓰기 (setParam 에 저장)

    //test
    testFunc();
    //test
    setParam.userNo = userNo;

    //localStorage 데이터 올리기 (JSON.stringify(setParam)를 setParam이름으로 )
    localStorage.setItem("setParam",JSON.stringify(setParam));
    //localStorage 데이터 올리기 (JSON.stringify(setParam)를 setParam이름으로 )

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
    for(let i=0; i<setParam.basket.length; i++){
        let html = "";
        if(setParam.basket[i].userNo === user){
            html += "   <tr class='cart-main'>" +
                "        <td class='product__cart__item'>" +
                "            <div class='product__cart__item__pic'>" +
                "                <img src='./img/menuImg/img_" + setParam.basket[i].mnuId + ".PNG' style='width: 100px' height='100px' alt=''>" + /*'./img/menuImg/img_" + setParam.basket[i].mnuId + ".PNG'*/
                "            </div>" +
                "            <div class='product__cart__item__text'>" +
                "                <h6>" + setParam.basket[i].mnuNa + "</h6>" +
                "                <h5>" + setParam.basket[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원</h5>" +
                "            </div>" +
                "        </td>" +
                "        <td class='quantity__item'>" +
                "            <div class='quantity'>" +
                "                 <div class='pro-qty'>" +
                "                       <span class='dec qtybtn minus-btn' value='" + i + "'>-</span>" +
                "                       <input type='text' id='" + setParam.basket[i].mnuId + "-cnt' value=" + setParam.basket[i].cnt + ">" +
                "                       <span class='inc qtybtn plus-btn'>+</span>" +
                "                 </div>" +
                "            </div>" +
                "        </td>" +
                "        <td class='cart__price' id='" + setParam.basket[i].mnuId + "-price'>" + (setParam.basket[i].price * setParam.basket[i].cnt).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원</td>" +
                "        <td class='cart__close'><span class='icon_close'></span></td>" +
                "    </tr>"
            mainI.push(i)   //해당순번 기억하자 12345가 아니다
            allPrice = allPrice + setParam.basket[i].price * setParam.basket[i].cnt;
            price1.innerHTML = allPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원";
            price3.innerHTML = allPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원";
        }
        tbody.innerHTML += html;
    }

    /* 장바구니 수량추가 감소 버튼 반응형 이벤트 */
    let minus = document.querySelectorAll(".minus-btn");
    let plus = document.querySelectorAll(".plus-btn");
    for(let i=0; i<minus.length; i++){
        minus[i].addEventListener("click",function (){
            let cnt = document.getElementById(setParam.basket[mainI[i]].mnuId + '-cnt');
            let price = document.getElementById(setParam.basket[mainI[i]].mnuId + '-price');
            if(parseInt(document.getElementById(setParam.basket[mainI[i]].mnuId + '-cnt').value) > 1){
                price.innerHTML = ((parseInt(price.innerText.replace(/(원|,|)/g, "")) / parseInt(cnt.value) * (parseInt(cnt.value) - 1)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')) + "원";
                cnt.setAttribute("value",parseInt(cnt.value) -1);
                allPrice = allPrice - parseInt(price.innerText.replace(/(원|,|)/g, "")) / parseInt(cnt.value);
                price1.innerHTML = allPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원";
                if(couponYN){
                    price2.innerHTML = (allPrice/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원";
                    price3.innerHTML = (allPrice - allPrice/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원";
                }else{
                    price3.innerHTML = allPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원";
                }
            }else{
                cnt.setAttribute("value",1);
            }
            /*data 갱신 해줘*/
            dataFunc(parseInt(cnt.value),mainI[i]);
        });

        plus[i].addEventListener("click",function (){
            let cnt = document.getElementById(setParam.basket[mainI[i]].mnuId + '-cnt');
            let price = document.getElementById(setParam.basket[mainI[i]].mnuId + '-price');
            price.innerHTML = ((parseInt(price.innerText.replace(/(원|,|)/g, "")) / parseInt(cnt.value) * (parseInt(cnt.value) + 1)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')) + "원";
            cnt.setAttribute("value",parseInt(cnt.value) + 1);
            allPrice = allPrice + parseInt(price.innerText.replace(/(원|,|)/g, "")) / parseInt(cnt.value);
            price1.innerHTML = allPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원";
            if(couponYN){
                price2.innerHTML = (allPrice/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원";
                price3.innerHTML = (allPrice - allPrice/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원";
            }else{
                price3.innerHTML = allPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원";
            }
            /*data 갱신 해줘*/
            dataFunc(parseInt(cnt.value),mainI[i]);
        });
    }

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

}

function dataFunc(cnt,mainI){

    console.log("func : dataFunc() !")

    setParam.basket[mainI].cnt = cnt;
    localStorage.setItem("setParam",JSON.stringify(setParam));
    console.log(localStorage)
}

function testFunc(){
    console.log("func : testFunc() !")

    let input = prompt('테스트입니다, userNo : 1~3 입력바람', '1');
    if(parseInt(input)>3 || parseInt(input)<1 || input===null){
        alert("1~3만 입력하세요 !")
        testFunc();
    }else{

        /*text*/
        let basket = [
            {
                userNo : 1,
                mnuId : 1001,
                mnuNa : "에그마요 샌드위치",
                price : 5200,
                cnt : 1
            },
            {
                userNo : 1,
                mnuId : 1002,
                mnuNa : "햄치즈  샌드위치",
                price : 5000,
                cnt : 3
            },
            {
                userNo : 1,
                mnuId : 1003,
                mnuNa : "시저샐러드",
                price : 4800,
                cnt : 2
            },
            {
                userNo : 2,
                mnuId : 1004,
                mnuNa : "치킨샐러드",
                price : 5400,
                cnt : 4
            },
            {
                userNo : 3,
                mnuId : 1005,
                mnuNa : "BLT샌드위치",
                price : 5000,
                cnt : 5

            },
            {
                userNo : 3,
                mnuId : 2001,
                mnuNa : "아메리카노",
                price : 5200,
                cnt : 4
            },
            {
                userNo : 3,
                mnuId : 2002,
                mnuNa : "카페라떼",
                price : 5000,
                cnt : 2
            },
            {
                userNo : 2,
                mnuId : 2003,
                mnuNa : "카라멜마끼아또",
                price : 4800,
                cnt : 1
            },
            {
                userNo : 3,
                mnuId : 2004,
                mnuNa : "그린티",
                price : 5400,
                cnt : 4
            },
            {
                userNo : 3,
                mnuId : 3001,
                mnuNa : "단팥빵",
                price : 1500,
                cnt : 2
            },
            {
                userNo : 2,
                mnuId : 3002,
                mnuNa : "슈크림빵",
                price : 1500,
                cnt : 3
            },
            {
                userNo : 2,
                mnuId : 3003,
                mnuNa : "바게트",
                price : 2000,
                cnt : 1
            },
            {
                userNo : 1,
                mnuId : 3004,
                mnuNa : "연유바게트",
                price : 3500,
                cnt : 1
            },
            {
                userNo : 3,
                mnuId : 3005,
                mnuNa : "소금빵",
                price : 3400,
                cnt : 3
            },
            {
                userNo : 3,
                mnuId : 3006,
                mnuNa : "소세지빵",
                price : 3500,
                cnt : 2
            },
            {
                userNo : 1,
                mnuId : 4001,
                mnuNa : "순우유",
                price : 25000,
                cnt : 4
            },
            {
                userNo : 2,
                mnuId : 4002,
                mnuNa : "바스크치즈",
                price : 18000,
                cnt : 5
            },
            {
                userNo : 3,
                mnuId : 4003,
                mnuNa : "샤를로트",
                price : 27000,
                cnt : 4
            },
            {
                userNo : 3,
                mnuId : 4004,
                mnuNa : "생크림",
                price : 22000,
                cnt : 2
            },
            {
                userNo : 2,
                mnuId : 4005,
                mnuNa : "초콜릿",
                price : 26000,
                cnt : 1
            },
            {
                userNo : 1,
                mnuId : 5001,
                mnuNa : "에그타르트",
                price : 5200,
                cnt : 3
            },
            {
                userNo : 3,
                mnuId : 5002,
                mnuNa : "레몬타르트",
                price : 5000,
                cnt : 2
            },
            {
                userNo : 2,
                mnuId : 5003,
                mnuNa : "마들렌",
                price : 4800,
                cnt : 1
            },
            {
                userNo : 1,
                mnuId : 5004,
                mnuNa : "마카롱",
                price : 5400,
                cnt : 1
            },
            {
                userNo : 3,
                mnuId : 5005,
                mnuNa : "바움쿠엔",
                price : 5000,
                cnt : 3
            }
        ]
        if(setParam.basket === null || setParam.basket === undefined){
            console.log("데이터 없습니다")
            setParam.basket = basket;
            localStorage.setItem("setParam",JSON.stringify(setParam));
        }
        /*text*/

        userNo = parseInt(input);
    }
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
                if(setParam.basket[i].userNo === setParam.userNo){
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