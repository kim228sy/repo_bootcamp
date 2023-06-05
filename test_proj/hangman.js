const words = ["apple", "banana", "cherry", "durian"]; // 단어 배열
let selectedWord = ""; // 선택된 단어
let displayWord = ""; // 화면에 표시될 단어 (밑줄로 시작)
let attempts = 0; // 시도 횟수
let guessedLetters = []; // 입력한 문자를 저장하는 배열

// HTML 요소들에 대한 참조를 가져옴.
const wordDisplay = document.getElementById("word-display");
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const startButton = document.getElementById("start-button");
const message = document.getElementById("message");
const remainingAttemptsDisplay = document.getElementById("remaining-attempts");

// 게임 시작 함수
function startGame() {
  // 변수 초기화
  attempts = 0;
  guessedLetters = [];

  // 랜덤 단어 선택
  selectedWord = words[Math.floor(Math.random() * words.length)];

  // 표시 단어 설정 (밑줄로 시작)
  displayWord = "_".repeat(selectedWord.length);
  wordDisplay.textContent = displayWord.split("").join(" ");

  // 메시지 초기화
  message.textContent = "";

  // 입력 박스, 버튼 활성화
  guessInput.disabled = false;
  guessButton.disabled = false;

  // 남은 횟수를 10으로 초기화
  remainingAttempts = 10;
  remainingAttemptsDisplay.textContent = "남은 횟수: " + remainingAttempts;

  console.log("단어: ", selectedWord);
}

// 알파벳 추측 함수
function guessLetter() {
  const guessedLetter = guessInput.value;

  // 입력한 문자가 이미 추측한 문자에 포함되어 있으면 무시
  if (guessedLetters.includes(guessedLetter)) {
    guessInput.value = "";
    return;
  }

  // 입력한 문자를 추측한 문자 배열에 추가
  guessedLetters.push(guessedLetter);

  // 문자가 단어에 포함되어 있는지 확인
  let newDisplayWord = "";
  for (let i = 0; i < selectedWord.length; i++) {
    if (guessedLetters.includes(selectedWord[i])) {
      newDisplayWord += selectedWord[i];
    } else {
      newDisplayWord += "_";
    }
  }

  // 화면에 표시되는 단어 업데이트
  displayWord = newDisplayWord;
  wordDisplay.textContent = displayWord.split("").join(" ");

  // 입력 박스 초기화
  guessInput.value = "";

  // 정답을 맞췄는지 확인
  if (displayWord === selectedWord) {
    message.textContent = "성공!";
    guessInput.disabled = true;
    guessButton.disabled = true;
    return;
  }

  // 시도 횟수 증가
  attempts++;
  remainingAttempts--;
  remainingAttemptsDisplay.textContent = "남은 횟수: " + remainingAttempts;

  // 시도 횟수가 10회를 넘어갔는지 확인
  if (attempts >= 10) {
    message.textContent = `실패; 답은 ${selectedWord}.`;
    guessInput.disabled = true;
    guessButton.disabled = true;
  }
}

// 버튼 이벤트 핸들러 설정
startButton.addEventListener("click", startGame);
guessButton.addEventListener("click", guessLetter);
