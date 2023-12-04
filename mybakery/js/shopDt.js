let DT = JSON.stringify(window.location.href).split('?');
console.log(DT)
let DT1 = DT[1].replaceAll("\"","");
let DT2 = DT[2].replaceAll("\"","");
let product_qty = document.querySelector(".product_qty")
let dtQty = product_qty.value

let loginData = JSON.parse(sessionStorage.getItem("loginData"));
console.log("loginData")
let userNo = 1;
DT2 = decodeURI(DT2);

console.log(DT1 + " / " + DT2)

//각 메뉴별 변수
let dtName=""
let dtPrice=""
let dtCate=""
let dtInfo=""
let spPrice=""
let dtImg="<img class='product_details_big_img' src='img/menuImg/img_" + DT1 + ".PNG' style='background-image: url(img/menuImg/img_" + DT1 + ".PNG)'>" + "</img>"


//menuTable 자료 뿌려주기
console.log(setParam);

//detail 파트에 저장해둔 Id값과 일치하는 항목 뿌려주기
for (let i = 0; i < setParam.menuTable.length; i++) {
    if (setParam.menuTable[i].mnuId == DT1)
    // console.log(setParam.menuTable[i].price)
    {
        dtName = setParam.menuTable[i].mnuNa
        dtCate = setParam.menuTable[i].mnuca
        dtInfo = setParam.menuTable[i].mnuInfo
        dtPrice = setParam.menuTable[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원'
        spPrice = setParam.menuTable[i].price
    }
}

function addMenu(){
    if (!sessionStorage.getItem("loginData")){
        alert("로그인이 필요합니다.")
        location.href="login.html";
    }
   let addBasket = {
        userNo : loginData.userNo,
        mnuId :  parseInt(DT1),
        mnuNa : dtName,
        price : parseInt(spPrice),
        cnt : parseInt(product_qty.value)
    }

let basket = setParam.basket || [];
basket.push(addBasket);
setParam.basket = basket;
console.log(setParam)
afterAdd();
localStorage.setItem("setParam",JSON.stringify(setParam))
}

function afterAdd(){
	console.log(1)
	if(confirm("장바구니를 확인하시겠습니까?")){
		location.href = "basket.html";
	}else{
        location.href = "shop.html";
    }
}

    //가능하면 내가 누른 메뉴는 안 뜨도록 if문 수정해보자.(mnuId 사용하면 될 듯?)

function makeRelate(){
    let html = "";
    let makeRelateDiv = document.querySelector("#makeRelateDiv");
    let cnt = 1;

    for (let i = 0; i < setParam.menuTable.length; i++) {
        if (setParam.menuTable[i].mnuca == DT2){
            cnt++;
            if(cnt === 6){
                break;
            }
        html =
            "<div class='col-lg-3'>" +
                "<div class='product__item'>" +
                    "<div class='product__item__pic set-bg' data-setbg='img/menuImg/img_" + setParam.menuTable[i].mnuId + ".PNG' style='background-image: url(img/menuImg/img_" + setParam.menuTable[i].mnuId + ".PNG)'>" + "</div>" +
                    "<span class='font_color' id='font_color' onclick='gomenuDt(" + setParam.menuTable[i].mnuId + ",\"" + setParam.menuTable[i].mnuca + "\")'>" + setParam.menuTable[i].mnuNa + "</span>" +
                    "<div class='product__item__price'>" + setParam.menuTable[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원' + "</div>" +
                "</div>"  +
            "</div>"  

        
        makeRelateDiv.innerHTML += html;
        console.log(html);
        }
    }      
}

function gomenuDt(mnuId, mnuca){
    console.log(mnuId)
    console.log(mnuca)
    localStorage.setItem("nextMenuId",mnuId);
    localStorage.setItem("nextMenuca",mnuca);
    location.href="shopDt.html" + "?" + mnuId + "?" + mnuca;
}

makeRelate();

//product_name이라는 class를 쓰는 html 구문을 가져와서 varName이라는 변수 안에 넣겠다
let varName = document.querySelector(".product_name")
let varlabel = document.querySelector(".product_label")
let varprice = document.querySelector(".product_price")
let varinfor = document.querySelector(".product_infor")
let varimg = document.querySelector(".product_details_big_img_div")

varName.innerHTML=dtName
varlabel.innerHTML=dtCate
varprice.innerHTML=dtPrice
varinfor.innerHTML=dtInfo
varimg.innerHTML=dtImg