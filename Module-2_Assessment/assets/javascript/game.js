var hiddenWord = [];
var lives = 10; // FIXME may need to change how much this is set to
var word = '';
var guesses = [];

function generateWord(){
    var words = ['alien', 'star', 'planet', 'constellation', 'galaxy', 'asteroid', 'nebula'];
    var index = Math.floor(Math.random() * 6); // get a random number between 0 and 6

    word = words[index];
}

function initializeGame(){
    generateWord();

    for (var i = 0; i < word.length; i++){
        hiddenWord.push('-'); // FIXME this may need to be spaced out more so it doesn't look cramped
    }
}

function checkInput(){

}

function playMusic(){

}

function showGuesses(){

}