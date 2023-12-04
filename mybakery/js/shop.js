
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

//메뉴 데이터
function myFunc() {
    let menuTable = [
        {
            //여기부터 샐러드//
            mnuId: 1001,
            mnuNa: "에그마요 샌드위치",
            price: 5200,
            mnuca: "샐러드",
            mnuInfo: "신선한 계란과 유기농 채소 그리고 담백한 빵으로 만들어진 샌드위치입니다."
        },
        {
            mnuId: 1002,
            mnuNa: "햄치즈 샌드위치",
            price: 5000,
            mnuca: "샐러드",
            mnuInfo: "짭조름한 햄과 부드러운 치즈가 어우러지는 샌드위치입니다."
        },
        {
            mnuId: 1003,
            mnuNa: "시저 샐러드",
            price: 4800,
            mnuca: "샐러드",
            mnuInfo: "로메인상추와 크루통이며, 달걀, 올리브유, 레몬 즙, 마늘, 우스터셔 소스, 후추를 드레싱으로 사용하여 만든 샐러드입니다."
        },
        {
            mnuId: 1004,
            mnuNa: "치킨 샐러드",
            price: 5400,
            mnuca: "샐러드",
            mnuInfo: "치킨 샐러드는 닭고기를 주재료로 하는 샐러드입니다."
        },
        {
            mnuId: 1005,
            mnuNa: "BLT 샌드위치",
            price: 5000,
            mnuca: "샐러드",
            mnuInfo: "베이컨, 상추, 토마토가 들어간 샐러드입니다."
        },
        //여기부터 드링크//
        {
            mnuId: 2001,
            mnuNa: "아메리카노",
            price: 5200,
            mnuca: "음료",
            mnuInfo: "직접 로스팅한 원두를 사용하여 추출한 에스프레소 2샷이 첨가된 진한 커피입니다."
        },
        {
            mnuId: 2002,
            mnuNa: "카페라떼",
            price: 5000,
            mnuca: "음료",
            mnuInfo: "기본 에스프레소 2샷에 고소한 우유가 첨가된 부드러운 커피입니다."
        },
        {
            mnuId: 2003,
            mnuNa: "캬라멜마끼아또",
            price: 4800,
            mnuca: "음료",
            mnuInfo: "기본 에스프레소 2샷에 달콤한 캬라멜 시럽과 우유가 첨가된 달콤한 커피입니다."
        },
        {
            mnuId: 2004,
            mnuNa: "그린티",
            price: 5400,
            mnuca: "음료",
            mnuInfo: "녹차를 넣은 라떼의 종류입니다."
        },
        {
            mnuId: 2005,
            mnuNa: "밀크티",
            price: 5000,
            mnuca: "음료",
            mnuInfo: "달콤한 밀크티에 타피오카 펄이 들어간 음료입니다."
        },
        //여기부터 브레드//
        {
            mnuId: 3001,
            mnuNa: "단팥빵",
            price: 1500,
            mnuca: "브레드",
            mnuInfo: "팥과 설탕을 갠 단팥소를 넣어 만든 빵입니다."
        },
        {
            mnuId: 3002,
            mnuNa: "슈크림빵",
            price: 1500,
            mnuca: "브레드",
            mnuInfo: "달콤한 슈크림이 가득 들어간 빵입니다."
        },
        {
            mnuId: 3003,
            mnuNa: "바게트",
            price: 2000,
            mnuca: "브레드",
            mnuInfo: "길쭉한 막대기 모양 빵으로, 밀가루, 소금, 물, 효모 4가지 재료만으로 만든 빵입니다."
        },
        {
            mnuId: 3004,
            mnuNa: "연유바게트",
            price: 3500,
            mnuca: "브레드",
            mnuInfo: "기존 바게트빵에 달콤한 연유가 들어간 빵입니다."
        },
        {
            mnuId: 3005,
            mnuNa: "소금빵",
            price: 3400,
            mnuca: "브레드",
            mnuInfo: "버터 를 베이스로 한 빵 의 표면에 소금 을 뿌려, 버터의 고소한 풍미를 짭짤한 소금을 통해 강조한 빵입니다."
        },
        {
            mnuId: 3006,
            mnuNa: "소세지빵",
            price: 3500,
            mnuca: "브레드",
            mnuInfo: "남녀노소 누구나 좋아하는 소세지 빵입니다."
        },
        //여기부터 케이크//
        {
            mnuId: 4001,
            mnuNa: "순우유",
            price: 25000,
            mnuca: "케이크",
            mnuInfo: "우유 본연의 맛을 느낄 수 있는 부드러운 케이크입니다."
        },
        {
            mnuId: 4002,
            mnuNa: "바스크치즈",
            price: 18000,
            mnuca: "케이크",
            mnuInfo: "진한 치즈의 풍미를 느낄 수 있는 식감이 좋은 케이크입니다."
        },
        {
            mnuId: 4003,
            mnuNa: "샤를로트",
            price: 27000,
            mnuca: "케이크",
            mnuInfo: "여성용 모자를 닮았다 하여 이름 붙어진 케이크입니다."
        },
        {
            mnuId: 4004,
            mnuNa: "생크림",
            price: 22000,
            mnuca: "케이크",
            mnuInfo: "가장 기본 중의 기본이 되는 남녀노소 모두가 좋아하는 케이크입니다."
        },
        {
            mnuId: 4005,
            mnuNa: "초콜릿",
            price: 26000,
            mnuca: "케이크",
            mnuInfo: "단 맛을 좋아하는 사람들에게 적합한 초콜릿 케이크입니다."
        },
        //여기부터 디저트//
        {
            mnuId: 5001,
            mnuNa: "에그타르트",
            price: 5200,
            mnuca: "디저트",
            mnuInfo: "한 입 베어물면 멈출 수 없는 겉은 바삭 속은 촉촉한 에그타르트입니다."
        },
        {
            mnuId: 5002,
            mnuNa: "레몬타르트",
            price: 5000,
            mnuca: "디저트",
            mnuInfo: "상큼한 레몬의 맛을 느낄 수 있는 타르트입니다."
        },
        {
            mnuId: 5003,
            mnuNa: "마들렌",
            price: 4800,
            mnuca: "디저트",
            mnuInfo: "조개 모양의 틀로 구워낸 카스텔라와 비슷한 맛이 나는 디저트입니다."
        },
        {
            mnuId: 5004,
            mnuNa: "마카롱",
            price: 5400,
            mnuca: "디저트",
            mnuInfo: "적당히 딱딱한 꼬끄와 달콤한 필링으로 이루어진 먹기 편한 디저트입니다."
        },
        {
            mnuId: 5005,
            mnuNa: "바움쿠엔",
            price: 5000,
            mnuca: "디저트",
            mnuInfo: "나이테 케이크라고도 불리는 독특한 모양의 디저트입니다."
        },
        //여기부터 비스킷//
        {
            mnuId: 6001,
            mnuNa: "프렌치쿠키",
            price: 8000,
            mnuca: "비스킷",
            mnuInfo: "고급스러운 풍미가 느껴지는 프렌치 쿠키입니다."
        },
        {
            mnuId: 6002,
            mnuNa: "텐더쿠키",
            price: 8000,
            mnuca: "비스킷",
            mnuInfo: "선물용으로 적합한 쿠키입니다."
        }
    ]

    if (setParam.menuTable === null || setParam.menuTable === undefined) {
        console.log("데이터 없습니다")
        setParam.menuTable = menuTable;
        localStorage.setItem("setParam", JSON.stringify(setParam));
    }
}


myFunc();

let sessionKate = sessionStorage.getItem("sessionKate");

if(sessionKate === "" || sessionKate === null || sessionKate === undefined){
    makeImg();
}else{
    makeMenu(sessionKate);
}


