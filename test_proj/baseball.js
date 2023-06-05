// 1. 상수값 정의
const NUM_DIGITS = 4; // 게임에 사용될 숫자의 자릿수

// 2. 화면 요소 초기화
let input = document.querySelector("#input"); // input 요소를 가져옴
let inputButton = document.querySelector("#inputButton"); // 입력 버튼 요소를 가져옴
let resetButton = document.querySelector("#resetButton"); // 리셋 버튼 요소를 가져옴
let hintButton = document.querySelector("#hintButton"); // 힌트 버튼 요소를 가져옴
let result = document.querySelector("#result"); // 결과 표시 영역 요소를 가져옴
let times = document.querySelector("#times"); // 남은 횟수 표시 영역 요소를 가져옴

let remainingTries = 10; // 최대 시도 횟수, 남은 횟수

// 초기 메시지 출력
times.textContent = `남은 횟수: ${remainingTries}`; // 초기화 후, 남은 횟수를 표시

// 정답 생성
let answer = generateAnswer(); // 게임의 정답 생성
console.log(answer);

// 3. 이벤트 리스너 등록
inputButton.addEventListener("click", function (e) {
  // 입력 버튼 클릭 시
  e.preventDefault();

  let inputValue = input.value;
  if (!isValidInput(inputValue)) {
    // 유효한 입력인 경우
    result.textContent = "잘못된 입력입니다.";
    return;
  }

  let [strike, ball] = calculateResult(inputValue, answer); // 입력값과 정답 비교하여 결과 반환
  if (strike === NUM_DIGITS) {
    // 홈런인 경우
    result.textContent = "홈런!!";
    answer = generateAnswer(); // 새로운 정답 생성
    console.log(answer);
  } else {
    // 홈런이 아닌 경우
    result.textContent = `${strike} 스트라이크, ${ball} 볼`; // 스트라이크와 볼의 개수 출력
    remainingTries--; // 남은 횟수 감소
    times.textContent = `남은 횟수: ${remainingTries}`; // 남은 횟수 표시
    if (remainingTries === 0) {
      // 횟수 초과인 경우
      result.textContent = `횟수 초과!! 정답은 ${answer} 입니다.`; // 결과 표시
      times.textContent = ""; // 남은 횟수 표시 초기화
      answer = generateAnswer(); // 새로운 정답 생성
      console.log(answer);
      remainingTries = 10; // 횟수 초기화
    }
  }
  input.value = ""; // 입력 필드 초기화
  input.focus(); // 입력 필드에 초점을 맞춤
});

resetButton.addEventListener("click", function (e) {
  // 리셋 버튼 클릭 시
  e.preventDefault();

  answer = generateAnswer(); // 새로운 정답 생성
  console.log(answer);
  remainingTries = 10; // 횟수 초기화
  times.textContent = `남은 횟수: ${remainingTries}`; // 횟수 표시 초기화
  result.textContent = "리셋 되었습니다."; // 결과 표시 초기화
});

hintButton.addEventListener("click", function (e) {
  // 힌트 버튼 클릭 시
  e.preventDefault();

  if (remainingTries > 0) {
    // 남은 횟수가 있는 경우
    // 게임이 진행 중일 때만 힌트 제공
    let hintNumbers = generateHintNumbers(answer); // 힌트 숫자 생성
    result.textContent = `힌트: ${hintNumbers.join(", ")}`; // 힌트 표시
  }
});
// 4. 함수 정의
function generateAnswer() {
  // 게임의 정답 생성
  // 0~9 중에서 중복 없이 4개의 숫자를 뽑아서 문자열로 반환
  let nums = [];
  while (nums.length < NUM_DIGITS) {
    let num = Math.floor(Math.random() * 10);
    if (!nums.includes(num)) {
      nums.push(num);
    }
  }
  return nums.join("");
}

function isValidInput(inputValue) {
  // 입력값 유효성 검사

  // if (!/^\d{4}$/.test(inputValue)) {
  //   return false;
  // } // 정규표현식은 가독성이 떨어짐

  // 입력값이 4자리 숫자가 아니면 유효하지 않음
  if (inputValue.length !== 4 || isNaN(inputValue)) {
    return false;
  }

  let digits = new Set(inputValue);
  return digits.size === NUM_DIGITS;
}

function calculateResult(inputValue, answer) {
  // 입력값과 정답을 비교하여 스트라이크와 볼의 개수를 계산 결과 반환

  let strike = 0;
  let ball = 0;
  for (let i = 0; i < NUM_DIGITS; i++) {
    let inputNum = parseInt(inputValue.charAt(i));
    if (inputNum === parseInt(answer.charAt(i))) {
      // 자릿수와 숫자가 일치하는 경우, 스트라이크

      strike++;
    } else if (answer.includes(inputNum)) {
      // 자릿수는 다르지만, 숫자가 일치하는 경우, 볼

      ball++;
    }
  }
  return [strike, ball];
}

function generateHintNumbers(answer) {
  // 정답과 겹치지 않는 5개의 숫자를 랜덤으로 선택하여 배열로 반환
  // 힌트 숫자 생성

  let hintNumbers = [];
  while (hintNumbers.length < 5) {
    let num = Math.floor(Math.random() * 10);
    if (!answer.includes(num) && !hintNumbers.includes(num)) {
      hintNumbers.push(num);
    }
  }
  return hintNumbers.sort((a, b) => b - a); // 내림차순 정렬
}
