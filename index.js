const quiz = [
  {
    question: 'ゲーム市場、もっとも売れたゲーム機はどれ？',
    answers: [
      'スーパーファミコン',
      'プレステーション２',
      '任天堂スイッチ',
      '任天堂DS'
    ],
    correct: '任天堂DS'
  },
  {
    question: 'ラルクのボーカルは？',
    answers: [
      'hyde',
      'tetsuya',
      'ken',
      'yukihiro'
    ],
    correct: 'hyde'
  },
  {
    question: '好きなお惣菜は？',
    answers: [
      '唐揚げ',
      '生卵',
      '納豆',
      '松毬'
    ],
    correct: '生卵'
  },

];

console.log(quiz.length);

let quizLength = quiz.length;
let quizIndex = 0;

// 変数、定数定義

const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;


// クイズ表示
const quizSettup = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
quizSettup();


// 正答表示
const clickHandler = (e) => {
  if (e.target.textContent === quiz[quizIndex].correct) {
    alert('正解！');
  } else {
    alert('不正解！');
  }
  quizIndex++;
  if(quizIndex < quizLength){
    quizSettup();
  }else {
    alert('終了！');
  }
}

let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handleIndex++;
}
