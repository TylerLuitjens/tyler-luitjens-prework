var game = {
  lives      : 10,
  wins       : 0,
  word       : '',
  guesses    : [],
  hiddenWord : [],
  finished   : false,

  generateWord : function() {
    var words = ['alien', 'star', 'planet', 'constellation', 'galaxy', 'asteroid', 'nebula'];
    var index = Math.floor(Math.random() * 6);

    this.word = words[index];
  },

  initializeGame : function(){
    this.generateWord();
    this.lives      = 10;
    this.guesses    = [];
    this.finished   = false;
    this.hiddenWord = [];

    for (var i = 0; i < this.word.length; i++) {
      this.hiddenWord.push('-');
    }
  
    document.getElementById('hidden-word').innerText = this.hiddenWord.join(' ');
    document.getElementById('lives').innerText = this.lives;
    document.getElementById('guesses').innerText = '';
    document.getElementById('wins').innerText = this.wins;
  },

  checkGuess : function(guess){
    if(this.guesses.includes(guess)) {
      document.getElementById('hud-fuel-warning').style.display = 'block';
    }
    else if (this.word.indexOf(guess) === -1 && this.lives !== 0) {
      this.guesses.push(guess);
      this.lives --;
      document.getElementById('lives').innerText = this.lives;
      document.getElementById('guesses').innerText = this.guesses.join(', ');
      document.getElementById('hud-win').style.display = 'none';
      document.getElementById('hud-game-over').style.display = 'none';
      document.getElementById('hud-fuel-warning').style.display = 'none';
      
      if (this.lives === 0) {
        //They have run out of lives, the player has lost...
        document.getElementById('hud-game-over').style.display = 'block';
        this.finished = true;
        playMusic();
      }
    }
    else {
      document.getElementById('hud-fuel-warning').style.display = 'none';
      document.getElementById('hud-win').style.display = 'none';
      document.getElementById('hud-game-over').style.display = 'none';
      //need to make sure we replace all instances of the letter
      for (var i = 0; i < this.word.length; i++) {
        if (this.word.charAt(i) == guess) {
          this.hiddenWord[i] = guess;
        }
      }
  
      //redisplay the hidden word
      document.getElementById('hidden-word').innerText = this.hiddenWord.join('');
  
      if(!this.hiddenWord.includes('-')) {
        //there are no more hidden letters, the player has won!
        this.finished = true;
        document.getElementById('hud-win').style.display = 'block';
        playMusic();
      }
    }
  }

};

game.initializeGame();

function checkInput(guess) {
  game.checkGuess(guess.toLowerCase());
}

function playMusic() {
  var sound;
  if(game.lives === 0) {
    // TODO play losing music
    sound = sound = document.getElementById('loss-sound');
  }
  else {
    // TODO play winning music
    sound = document.getElementById('win-sound');
    game.wins ++;
    // document.getElementById('wins').innerText = wins;
  }
  sound.play();
  game.initializeGame();
}
