// mnuId값 가져오기
// let steal = localStorage.getItem("nextMenuId");
// console.log(steal)

let DT = JSON.stringify(window.location.href).split('?');
console.log(DT)
let DT1 = DT[1].replaceAll("\"","");
let DT2 = DT[2].replaceAll("\"","");

DT2 = decodeURI(DT2);

console.log(DT1 + " / " + DT2)

//각 메뉴별 변수
let dtName=""
let dtPrice=""
let dtCate=""
let dtInfo=""
let dtSku=""
let dtImg="<img class='product_details_big_img' src='img/menuImg/img_" + DT1 + ".PNG' style='background-image: url(img/menuImg/img_" + DT1 + ".PNG)'>" + "</img>"

//menuTable 자료 뿌려주기
let setParam = {};
setParam = JSON.parse(localStorage.setParam || "{}");
//localStorage 데이터 받아 쓰기 (setParam 에 저장)
console.log(setParam);

function addMenu(){
    //현재 디테일 상품에 있는 정보를 보내주는 역할
}


//detail 파트에 저장해둔 Id값과 일치하는 항목 뿌려주기
for (let i = 0; i < setParam.menuTable.length; i++) {
    if (setParam.menuTable[i].mnuId == DT1)
    // console.log(setParam.menuTable[i].price)
    {
        dtName = setParam.menuTable[i].mnuNa
        dtCate = setParam.menuTable[i].mnuca
        dtInfo = setParam.menuTable[i].mnuInfo
        dtSku = setParam.menuTable[i].sku
        dtPrice = setParam.menuTable[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원'
        

        console.log(setParam.menuTable[i].sku)
    }
}

// function makeRealate(){
//     let html = "";
//     console.log(1)
//     let makeRealateDiv = document.querySelector("#makeRealateDiv");
//     setParam.menuTable[i].mnuca
//     for (let i = 0; i < setParam.menuTable.length; i++) {
//         html = "<div class='row'>" +
//         "<div class='related__products__slider owl-carousel'>" +
//             "<div class='col-lg-3'>" +
//                 "<div class='product__item'>" +
//                     "<div class='product__item__pic set-bg' data-setbg='img/menuImg/img_" + setParam.menuTable[i].mnuId + ".PNG' style='background-image: url(img/menuImg/img_" + setParam.menuTable[i].mnuId + ".PNG)'>" +
//                         "<div class='product__label'>" +
//                             "<span>" + setParam.menuTable[i].mnuca + "</span>" +
//                                 "</div>" +
//                                   "</div>" +    
//                                     "<h6><a href='#'>" + setParam.menuTable[i].mnuNa + "</a></h6>" +
//                                 "<div class='product__item__price'>" + setParam.menuTable[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원' + "</div>" +
//                             "<div class='cart_add'>" +
//                         "<a href='#'>" + 'Add to cart' + "</a>" +
//                             "</div>" +
//                         "</div>" +
//                     "</div>" +
//                 "</div>" +
//             "</div>" +
//         "</div>"
//             const dsad = setParam.menuTable[i].mnuca;
//             makeRealateDiv.innerHTML += html;
//         if (dsad == DT2) {
//             console.log(setParam.menuTable[i].mnuca)
            
            // menuTable[2].
        // html = "<div class='row'>" +
        // "<div class='related__products__slider owl-carousel'>" +
        //     "<div class='col-lg-3'>" +
        //         "<div class='product__item'>" +
        //             "<div class='product__item__pic set-bg' data-setbg='img/menuImg/img_" + setParam.menuTable[i].mnuId + ".PNG' style='background-image: url(img/menuImg/img_" + setParam.menuTable[i].mnuId + ".PNG)'>" +
        //                 "<div class='product__label'>" +
        //                     "<span>" + setParam.menuTable[i].mnuca + "</span>" +
        //                         "</div>" +
        //                           "</div>" +    
        //                             "<h6><a href='#'>" + setParam.menuTable[i].mnuNa + "</a></h6>" +
        //                         "<div class='product__item__price'>" + setParam.menuTable[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원' + "</div>" +
        //                     "<div class='cart_add'>" +
        //                 "<a href='#'>" + 'Add to cart' + "</a>" +
        //                     "</div>" +
        //                 "</div>" +
        //             "</div>" +
        //         "</div>" +
        //     "</div>" +
        // "</div>"
        //     makeRealateDiv.innerHTML += html;
//         }
//     }
// }

// makeRealate();

//product_name이라는 class를 쓰는 html 구문을 가져와서 varName이라는 변수 안에 넣겠다
let varName = document.querySelector(".product_name")
let varlabel = document.querySelector(".product_label")
let varprice = document.querySelector(".product_price")
let varinfor = document.querySelector(".product_infor")
let varsku = document.querySelector(".product_sku")
let varimg = document.querySelector(".product_details_big_img")

varName.innerHTML=dtName
varlabel.innerHTML=dtCate
varprice.innerHTML=dtPrice
varinfor.innerHTML=dtInfo
varsku.innerHTML=dtSku.toString()
varimg.innerHTML=dtImg
