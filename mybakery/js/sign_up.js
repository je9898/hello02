// 회원가입 관련 input들
const username = document.querySelector("input[name='username']");
const userId = document.querySelector("input[name='id']");
const userPw = document.querySelector("input[name='pw']");
const userPwCheck = document.querySelector("input[name='pw_check']");
const userAdress = document.querySelector("input[name='adress']");
const userAdressDetails = document.querySelector("input[name='adress_Details']");
const userZipcode = document.querySelector("input[name='zipcode']");
const userPhone = document.querySelector("input[name='phone']");
const userEmail = document.querySelector("input[name='email']");

//우편번호 검색, 자동완성 (Daum)
function zipCodeSearch() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if(data.userSelectedType === 'R'){
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('zip_code').value = data.zonecode;
                document.getElementById("adress_input").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("adress_input_details").focus();
            }
        }).open();
    }
    
    // [필수]
    // 비밀번호, 비밀번호 확인이 서로 같지않으면 회원가입 불가, alert - 회원가입 버튼 클릭에 조건을 넣어본다 (완료)
    // 모든 항목 입력 안했을 시 회원가입 불가 - 검색해보기 (완료)
    // 모든 약관 동의 체크 안할 시 회원가입 불가 - 검색해보기 (완료)
    // 회원가입 버튼 클릭시 이름, 아이디, 비밀번호, 전화번호는 로컬스토리지에 저장 - 세션스토리지 응용해서 해보기 (완료)
    // 로그인페이지에서도 로컬스토리지에 있는 회원가입 정보 불러와서 로그인 가능하게 연결 (미완료)
    // 아이디 중복확인 (data.js, 로컬스토리지 id데이터랑 같은게 있으면 alert 또는 innerHTML, 회원가입 불가) - find 사용해보기 (미완료, 로컬 스토리지에서도 데이터를 받아야함)

    // [선택]
    // 약관 스크롤 넣기
    // 성별 선택 추가







    // 회원가입버튼 관련 조건문들, if만 사용할시 한줄로 정리 가능하다.
    function signUpButton(){
        const accOr = document.querySelector("#acc-or").checked;
        const payment = document.querySelector("#payment").checked;
        const paypal = document.querySelector("#paypal").checked;

        if(!username.value) return alert("이름을 입력 해주세요");
        if(!userId.value) return alert("아이디를 입력 해주세요");
        if(checkUserId()) return alert("중복된 아이디 입니다.");
        if(!userPw.value) return alert("비밀번호 확인이 틀립니다.");
        if(!userPwCheck.value) return alert("비밀번호 확인이 틀립니다.");
        if(userPw.value != userPwCheck.value) return alert("비밀번호 확인이 틀립니다.");
        if(!userZipcode.value) return alert("우편번호를 입력 해주세요.");
        if(!userAdress.value) return alert("주소를 입력 해주세요.");
        if(!userAdressDetails.value) return alert("상세주소를 입력 해주세요.");
        if(!userPhone.value) return alert("전화번호를 입력 해주세요.");
        if(!userEmail.value) return alert("이메일을 입력 해주세요.");
        if(!accOr) return alert("약관에 동의 해주세요.");
        if(!payment) return alert("약관에 동의 해주세요.");
        if(!paypal) return alert("약관에 동의 해주세요.");
        else{
            
            if(localStorage.userData === null || localStorage.userData === undefined || JSON.stringify(localStorage.userData) === "[]"){
                localStorage.setItem("userData",JSON.stringify(userData));
            }
            const localData = JSON.parse(localStorage.getItem("userData") || "[]") ;
            
            localData.push({
                userNo:localData[localData.length - 1].userNo+1,
                admin:0,
                name:username.value,
                phone:userPhone.value,
                id:userId.value,
                pw:userPw.value
            });
            localStorage.setItem("userData",JSON.stringify(localData));

            alert("회원가입이 완료 되었습니다.")
            return location.href="login.html";
        }
    }

    // 회원가입 버튼에서도 최종 중복체크를 하고, alert이 나오게 하기 위한것.
    function checkUserId(){
        const idfind = userData.find((data)=>{
            return data.id == userId.value
        })
        return idfind
    }

    // 아이디 중복체크 관련 (checkUserId()과 연결할수 있는지 알아보자)
    function userIdMatch(){
        const idfind = userData.find((data)=>{
            return data.id == userId.value
        })
        if(idfind)  return alert("중복된 아이디 입니다.");
        if(userId.value == "") return alert("아이디를 입력 해주세요.");
        if(!idfind) return alert("사용 가능한 아이디 입니다.");
    }

    console.log(JSON.stringify(localStorage.userData));