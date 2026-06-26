const kana = [
  {kana: 'あ', romanji: 'a'},
  {kana: 'か', romanji: 'ka'},
  {kana: 'が', romanji: 'ga'},
  {kana: 'さ', romanji: 'sa'},
  {kana: 'ざ', romanji: 'za'},
  {kana: 'た', romanji: 'ta'},
  {kana: 'だ', romanji: 'da'},
  {kana: 'な', romanji: 'na'},
  {kana: 'は', romanji: 'ha'},
  {kana: 'ば', romanji: 'ba'},
  {kana: 'ぱ', romanji: 'pa'},
  {kana: 'ま', romanji: 'ma'},
  {kana: 'や', romanji: 'ya'},
  {kana: 'ら', romanji: 'ra'},
  {kana: 'わ', romanji: 'wa'},
  {kana: 'きゃ', romanji: 'kya'},
  {kana: 'ぎゃ', romanji: 'gya'},
  {kana: 'しゃ', romanji: 'sha'},
  {kana: 'じゃ', romanji: 'jya'},
  {kana: 'ちゃ', romanji: 'cha'},
  {kana: 'ぢゃ', romanji: 'dya'},
  {kana: 'にゃ', romanji: 'nya'},
  {kana: 'ひゃ', romanji: 'hya'},
  {kana: 'びゃ', romanji: 'bya'},
  {kana: 'ぴゃ', romanji: 'pya'},
  {kana: 'みゃ', romanji: 'mya'},
  {kana: 'りゃ', romanji: 'rya'},
  {kana: 'い', romanji: 'i'},
  {kana: 'き', romanji: 'ki'},
  {kana: 'ぎ', romanji: 'gi'},
  {kana: 'し', romanji: 'shi'},
  {kana: 'じ', romanji: 'ji'},
  {kana: 'ち', romanji: 'chi'},
  {kana: 'ぢ', romanji: 'di'},
  {kana: 'に', romanji: 'ni'},
  {kana: 'ひ', romanji: 'hi'},
  {kana: 'び', romanji: 'bi'},
  {kana: 'ぴ', romanji: 'pi'},
  {kana: 'み', romanji: 'mi'},
  {kana: 'り', romanji: 'ri'},
  {kana: 'う', romanji: 'u'},
  {kana: 'く', romanji: 'ku'},
  {kana: 'つ', romanji: 'tu'},
  {kana: 'す', romanji: 'su'},
  {kana: 'ず', romanji: 'zu'},
  {kana: 'つ', romanji: 'tsu'},
  {kana: 'づ', romanji: 'du'},
  {kana: 'ぬ', romanji: 'nu'},
  {kana: 'ふ', romanji: 'fu'},
  {kana: 'ぶ', romanji: 'bu'},
  {kana: 'ぷ', romanji: 'pu'},
  {kana: 'む', romanji: 'mu'},
  {kana: 'ゆ', romanji: 'yu'},
  {kana: 'る', romanji: 'ru'},
  {kana: 'きゅ', romanji: 'kyu'},
  {kana: 'ぎゅ', romanji: 'gyu'},
  {kana: 'しゅ', romanji: 'shu'},
  {kana: 'じゅ', romanji: 'jyu'},
  {kana: 'ちゅ', romanji: 'chu'},
  {kana: 'ぢゅ', romanji: 'dyu'},
  {kana: 'にゅ', romanji: 'nyu'},
  {kana: 'ひゅ', romanji: 'hyu'},
  {kana: 'びゅ', romanji: 'byu'},
  {kana: 'ぴゅ', romanji: 'pyu'},
  {kana: 'みゅ', romanji: 'myu'},
  {kana: 'りゅ', romanji: 'ryu'},
  {kana: 'お', romanji: 'o'},
  {kana: 'こ', romanji: 'ko'},
  {kana: 'ご', romanji: 'go'},
  {kana: 'そ', romanji: 'so'},
  {kana: 'ぞ', romanji: 'zo'},
  {kana: 'と', romanji: 'to'},
  {kana: 'ど', romanji: 'do'},
  {kana: 'の', romanji: 'no'},
  {kana: 'ほ', romanji: 'ho'},
  {kana: 'ぼ', romanji: 'bo'},
  {kana: 'ぽ', romanji: 'po'},
  {kana: 'も', romanji: 'mo'},
  {kana: 'よ', romanji: 'yo'},
  {kana: 'ろ', romanji: 'ro'},
  {kana: 'ん', romanji: 'r'},
  {kana: 'きょ', romanji: 'kyo'},
  {kana: 'ぎょ', romanji: 'gyo'},
  {kana: 'しょ', romanji: 'sho'},
  {kana: 'じょ', romanji: 'jyo'},
  {kana: 'ちょ', romanji: 'cho'},
  {kana: 'ぢょ', romanji: 'dyo'},
  {kana: 'にょ', romanji: 'nyo'},
  {kana: 'ひょ', romanji: 'hyo'},
  {kana: 'びょ', romanji: 'byo'},
  {kana: 'ぴょ', romanji: 'pyo'},
  {kana: 'りょ', romanji: 'ryo'},
]
const kanaDisplay = document.getElementById('kana');
const inputKana = document.getElementById('inputKana');
const feedbackText = document.getElementById('feedbackText');
const sumbitBtn = document.getElementById('sumbit')

let currentItem = null;

function nextKana() {

  const selectedKana = document.querySelectorAll('#kanaSettings input[type="checkbox"]:checked');

  const activeKanaValues = Array.from(selectedKana).map(box => box.value);

  if (activeKanaValues.length == 0) {
    feedbackText.textContent = "Please select at least one";
    return;
  }

  const activeKana = kana.filter(item => activeKanaValues.includes(item.romanji))

  const randomIndex = Math.floor(Math.random() * activeKana.length);

  currentItem = activeKana[randomIndex]

  kanaDisplay.textContent = currentItem.kana
  inputKana.value = "";
  feedbackText.textContent = "";

}

function checkKana() {
  if (!currentItem) return;

  const kanaUser = inputKana.value.toLowerCase();

  if(kanaUser == currentItem.romanji) {
    setTimeout(nextKana, 750);
    feedbackText.textContent = "Correct";
  }
  else {
    setTimeout(nextKana, 750);
    feedbackText.textContent = "Incorrect. The writing is " + currentItem.romanji;
  }
}
inputKana.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault()
    checkKana();
  }
});

nextKana();

/* Settings Toggle */

const kanaSettingsTitle = document.getElementById('kanaSettingsTitle');
const kanaContentSettings = document.getElementById('kanaSettings');

kanaSettingsTitle.addEventListener('click', function() {

  event.preventDefault();
  kanaContentSettings.hidden = !kanaContentSettings.hidden

})
