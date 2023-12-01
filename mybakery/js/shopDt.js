//mnuId값 가져오기
let steal = localStorage.getItem("nextMenuId");
console.log(steal)

//각 메뉴별 변수
let dtName=""
let dtPrice=""
let dtCate=""
let dtInfo=""
let dtSku=""

//menuTable 자료 뿌려주기
let setParam = {};
setParam = JSON.parse(localStorage.setParam || "{}");
//localStorage 데이터 받아 쓰기 (setParam 에 저장)
console.log(setParam);

//localStorage 메뉴(steal) 안에 있는 자료와 전체 메뉴 자료와 같은 값만 호출 
for (let i = 0; i < setParam.menuTable.length; i++) {
    if (setParam.menuTable[i].mnuId == steal)
    // console.log(setParam.menuTable[i].price)
    
                                            {
        dtName = setParam.menuTable[i].mnuNa
        // dtPrice = setParam.menuTable[i].price
        dtCate = setParam.menuTable[i].mnuca
        dtInfo = setParam.menuTable[i].mnuInfo
        dtSku = setParam.menuTable[i].sku
        dtPrice = setParam.menuTable[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원'

        console.log(setParam.menuTable[i].sku)
    }
}

// //관련 상품
// function makeRelation(){
// for (let i = 0; i < setParam.menuTable.length; i++) {
//     if (setParam.menuTable[i].mnuca == steal)
//     console.log(setParam.menuTable[i].mnuca)
    
//     let makeReInfo = document.querySelector("#makeReInfo");
//     makeReInfo.innerHTML = html;   
    
// }
// }

//product_name이라는 class를 쓰는 html 구문을 가져와서 varName이라는 변수 안에 넣겠다
let varName = document.querySelector(".product_name")
let varlabel = document.querySelector(".product_label")
let varprice = document.querySelector(".product_price")
let varinfor = document.querySelector(".product_infor")
let varsku = document.querySelector(".product_sku")

varName.innerHTML=dtName
varlabel.innerHTML=dtCate
varprice.innerHTML=dtPrice
varinfor.innerHTML=dtInfo
varsku.innerHTML=dtSku.toString()
