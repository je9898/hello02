const contactBtn = document.querySelector("#contactBtn");
const nameText = document.querySelector("#nameText");
const emailText = document.querySelector("#emailText");
const messageText = document.querySelector("#messageText");

function contactBtnClick(){
    if(nameText.value == '') return alert("이름을 입력해 주세요.");
    if(emailText.value == '') return alert("이메일을 입력해 주세요.");
    if(messageText.value == '') return alert("내용을 입력해 주세요.");
    else{
        location.reload();
        alert("문의가 완료되었습니다.")

    }
}