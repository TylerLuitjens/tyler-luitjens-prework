var lives      = 10;
var wins       = 0;
var word       = '';
var guesses    = [];
var hiddenWord = [];
var finished = false;
// TODO need to make a way to reset the game
// TODO need to add in the music
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
  finished = false;
  hiddenWord = [];
  for (var i = 0; i < word.length; i++) {
    hiddenWord.push('-');
  }

  document.getElementById('hidden-word').innerText = hiddenWord.join(' ');
  document.getElementById('lives').innerText = lives;
  document.getElementById('guesses').innerText = '';
  document.getElementById('wins').innerText = wins;

}

function checkInput(guess) {
  guess = guess.toLowerCase();

  if(guesses.includes(guess)) {
    document.getElementById('fuel-warning').style.display = 'block';
  }
  else if (word.indexOf(guess) === -1 && lives !== 0) {
    guesses.push(guess);
    lives --;
    document.getElementById('lives').innerText = lives;
    document.getElementById('guesses').innerText = guesses.join(', ');
    document.getElementById('hud-win').style.display = 'none';
    document.getElementById('hud-game-over').style.display = 'none';
    document.getElementById('hud-fuel-warning').style.display = 'none';
    
    if (lives === 0) {
      //They have run out of lives, the player has lost...
      document.getElementById('hud-game-over').style.display = 'block';
      finished = true;
      playMusic();
    }
  }
  else {
    document.getElementById('hud-fuel-warning').style.display = 'none';
    document.getElementById('hud-win').style.display = 'none';
    document.getElementById('hud-game-over').style.display = 'none';
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
      finished = true;
      document.getElementById('hud-win').style.display = 'block';
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
    // document.getElementById('wins').innerText = wins;
  }
  initializeGame();
}