
//localStorage 데이터 받아 쓰기 (setParam 에 저장)
console.log(setParam);

// let clickRes = [];  //몇번째 친구에 검색어가 포함되어 있는지 저장

//메뉴 데이터 불러오는 함수
function makeImg() {
    let html = "";
    let makeImgDiv = document.querySelector("#makeImgDiv");
    

    for (let i = 0; i < setParam.menuTable.length; i++) {
        html = 
            "<div class='col-lg-3 col-md-6 col-sm-6'>" +
            "       <div class='product__item'>" +
            "           <div class='product__item__pic set-bg menuImgs' data-setbg='img/menuImg/img_" + setParam.menuTable[i].mnuId + ".PNG' style='background-image: url(img/menuImg/img_" + setParam.menuTable[i].mnuId + ".PNG)'>" +
            "               <div class='product__label'>" +
            "                   <span>" + setParam.menuTable[i].mnuca + "</span>" +
            "            </div>" +
            "        </div>" +
            "        <div class='product__item__text'>" +
            "            <h6><a href='javascript:void(0);'>" + setParam.menuTable[i].mnuNa + "</a></h6>" +
            "            <div class='product__item__price'>" + setParam.menuTable[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원' + "</div>" +
            "            <div class='cart_add'>" + 
            "                <a href='javascript:void(0);' onclick='gomenuDt(" + setParam.menuTable[i].mnuId + ",\"" + setParam.menuTable[i].mnuca + "\")'>자세히 보기</a>" +
            "            </div>" +
            "        </div>" +
            "    </div>" +
            "</div>";
        makeImgDiv.innerHTML += html;
    }
}

//메뉴 카테고리 필터링
function makeMenu(type){
    let html = "";  
    
    let makeImgDiv = document.querySelector("#makeImgDiv");
    makeImgDiv.innerHTML = html;

    for (let i = 0; i < setParam.menuTable.length; i++) {
        if (setParam.menuTable[i].mnuca === type) {
        html = "<div class='col-lg-3 col-md-6 col-sm-6'>" +
            "    <div class='product__item'>" +
            "        <div class='product__item__pic set-bg' data-setbg='img/menuImg/img_" + setParam.menuTable[i].mnuId + ".PNG' style='background-image: url(img/menuImg/img_" + setParam.menuTable[i].mnuId + ".PNG)'>" +
            "            <div class='product__label'>" +
            "                <span>" + setParam.menuTable[i].mnuca + "</span>" +
            "            </div>" +
            "        </div>" +
            "        <div class='product__item__text'>" +
            "            <h6><a href='javascript:void(0);'>" + setParam.menuTable[i].mnuNa + "</a></h6>" +
            "            <div class='product__item__price'>" + setParam.menuTable[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원' + "</div>" +
            "            <div class='cart_add'>" + 
            "                <a href='javascript:void(0);' onclick='gomenuDt(" + setParam.menuTable[i].mnuId + ",\"" + setParam.menuTable[i].mnuca + "\")' >자세히 보기</a>" +
            //이 부분도 함수값 넣어서 해당하는 메뉴가 나오도록 해야 함//
            "            </div>" +
            "        </div>" +
            "    </div>" +
            "</div>";
            console.log(html)
            makeImgDiv.innerHTML += html;
        }
    }
    sessionStorage.setItem("sessionKate","");
}

//메뉴 상세 페이지로 넘어가면서 mnuId와 mnuca 값 url에 저장하기
function gomenuDt(mnuId, mnuca){
    location.href="shopDt.html" + "?" + mnuId + "?" + mnuca;
}

let sessionKate = sessionStorage.getItem("sessionKate");

if(sessionKate === "" || sessionKate === null || sessionKate === undefined){
    makeImg();
}else{
    makeMenu(sessionKate);
}


