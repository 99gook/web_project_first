// 메시지 변수 정의
const message = "Check List [ 건물 외부 / 건물 내부 ]";

// 메시지 출력
console.log(message);

// HTML 요소 선택하여 내용 변경
const messageElement = document.getElementById("message");
messageElement.textContent = message;

// script.js
const calculateButton = document.getElementById("calculateButton");
const checklistItems = document.querySelectorAll("ul li input[type='checkbox']");

calculateButton.addEventListener("click", Score);

function Score() {
    console.log("버튼이 클릭되었습니다.");

    let score = 0;
    checklistItems.forEach(item => {
        if (item.checked) {
            score += 10;
        }
    });

    const resultPopup = document.createElement("div");
    resultPopup.classList.add("result-popup");
    resultPopup.textContent = `체크리스트 총점: ${score}점`;

    document.body.appendChild(resultPopup);

    setTimeout(() => {
        resultPopup.remove();
    }, 3000); // 3초 후 팝업 삭제
}

