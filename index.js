const question = 'ゲーム市場、もっとも売れたゲーム機はどれ？';

const answers = [
  'スーパーファミコン',
  'プレステーション２',
  '任天堂スイッチ',
  '任天堂DS'
];

const correct = '任天堂DS';

document.getElementById('js-question').textContent = question;

const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;
const quizSettup = () => {
  let buttonIndex = 0;
  
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}

quizSettup();

console.log($button.length);

const clickHandler = (e) => {
  if (e.target.textContent === correct) {
    alert('正解！');
  } else {
    alert('不正解！');
  }
}

let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handleIndex++;
}
