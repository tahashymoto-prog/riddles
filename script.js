// 謎と答えのデータ
const riddles = [
    { riddle: "パンはパンでも、食べられないパンはなーんだ？", answer: "フライパン" },
    { riddle: "いつもお客さんがいるのに、誰も乗っていない乗り物はなーんだ？", answer: "エレベーター" },
    { riddle: "上りも下りもせず、いつも平らな道はなーんだ？", answer: "鉄道" }
];

let currentRiddleIndex = 0;

// HTML要素を取得
const riddleTextElement = document.getElementById('riddle-text');
const answerInputElement = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-button');
const resultMessageElement = document.getElementById('result-message');

// 問題を表示する関数
function displayRiddle() {
    if (currentRiddleIndex < riddles.length) {
        riddleTextElement.textContent = riddles[currentRiddleIndex].riddle;
        resultMessageElement.textContent = '';
        answerInputElement.value = '';
    } else {
        // 全問正解
        riddleTextElement.textContent = "おめでとう！全問正解です！";
        document.querySelector('.input-area').style.display = 'none'; // 入力欄を隠す
    }
}

// 回答ボタンがクリックされたときの処理
submitButton.addEventListener('click', () => {
    const userAnswer = answerInputElement.value.trim();
    if (userAnswer === riddles[currentRiddleIndex].answer) {
        // 正解
        resultMessageElement.textContent = "正解！";
        resultMessageElement.style.color = 'green';
        currentRiddleIndex++;
        // 1秒後に次の問題を表示
        setTimeout(displayRiddle, 1000);
    } else {
        // 不正解
        resultMessageElement.textContent = "不正解！もう一度考えてみよう。";
        resultMessageElement.style.color = 'red';
    }
});

// 最初の問題を表示
displayRiddle();
