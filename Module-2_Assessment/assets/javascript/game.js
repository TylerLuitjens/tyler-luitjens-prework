var lives      = 10; // FIXME may need to change how much this is set to
var wins       = 0;
var word       = '';
var guesses    = [];
var hiddenWord = [];

initializeGame();

function generateWord() {
  var words = ['alien', 'star', 'planet', 'constellation', 'galaxy', 'asteroid', 'nebula'];
  var index = Math.floor(Math.random() * 6);

  word = words[index];
}

function initializeGame() {
  generateWord();
  lives   = 10;
  guesses = [];

  for (var i = 0; i < word.length; i++) {
    hiddenWord.push('-'); // FIXME these may need to be spaced out more so it doesn't look cramped
  }

  document.getElementById('hidden-word').innerText = hiddenWord.join(' ');
  document.getElementById('lives').innerText = lives;
  document.getElementById('guesses').innerText = '';
  document.getElementById('wins').innerText = wins;
}

function checkInput(guess) {
  if(guesses.includes(guess)) {
    document.getElementById('fuel-warning').style.display = 'block';
  }
  else if (word.indexOf(guess) === -1) {
    guesses.push(guess);
    lives --;
    document.getElementById('fuel-warning').style.display = 'none';
    document.getElementById('lives').innerText = lives;
    
    if (lives === 0) {
      document.getElementById('guesses').innerText = guesses.join(', ');
      playMusic();
    }
  }
  else {
    document.getElementById('fuel-warning').style.display = 'none';

    //need to make sure we replace all instances of the letter
    for (var i = 0; i < word.length; i++) {
      if (word.charAt(i) == guess) {
        hiddenWord[i] = guess;
      }
    }

    //redisplay the hidden word
    document.getElementById('hidden-word').innerText = hiddenWord.join('');

    if(!hiddenWord.includes('-')) {
      //there are no more hidden letters, the player has won!
      playMusic();
    }
  }
}

function playMusic() {
  if(lives === 0) {
    // TODO play losing music
  }
  else {
    // TODO play winning music
    wins ++;
    document.getElementById('wins').innerText = wins;
  }

}