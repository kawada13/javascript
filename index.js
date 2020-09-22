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

$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];

$button[0].addEventListener('click', () => {
  if($button[0].textContent === correct){
    alert('正解！');
  } else {
    alert('不正解！');
  }
});
$button[1].addEventListener('click', () => {
  if($button[1].textContent === correct){
    alert('正解！');
  } else {
    alert('不正解！');
  }
});
$button[2].addEventListener('click', () => {
  if($button[2].textContent === correct){
    alert('正解！');
  } else {
    alert('不正解！');
  }
});
$button[3].addEventListener('click', () => {
  if($button[3].textContent === correct){
    alert('正解！');
  } else {
    alert('不正解！');
  }
});