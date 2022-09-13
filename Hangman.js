var Word = "ketchup"; 
var underScore = "_";
var wordArray = Word.split("");
var allowedMistakes = 4;
var gameON = true;
var badGuesses = [ ];
var goodGuesses = [];
var result = [ ];


for (var i = 0; i < Word.toString().length; i++){ // loop which gives me underscore's according to the length of the word
    goodGuesses += underScore;
}
var spaces = Array.from(goodGuesses)
console.log("Welcome you have started the Hangman game, good luck")
while ( gameON ){  // first loop which starts the game 
    var userInput = prompt("Please enter a Character");
    if (userInput.toString().length > 1){
        console.log("You have mistakenly enterd : " + userInput + " ,which is more then one charcter, please try again")
    }
    if (wordArray.toString().length == result.toString().length){
        console.log("Good job man, you have finished the game")
        break;  // stops the entire game
    }
    if ( wordArray.includes(userInput) ) {
        for ( j = 0; j <= wordArray.toString().length; j ++){
            var index = wordArray.indexOf(userInput)
            if (index == j){
                result[index] = userInput;
                // console.log(result.toString().replace(/,/g,'_'));
                spaces[index] = userInput
                console.log(spaces.toString().replace(/,/g,' '));

            }
        }        
    } else if (userInput.toString().length == 1) {
        badGuesses += userInput;
        console.log(badGuesses)
        if (badGuesses.toString().length == allowedMistakes){
            console.log("Game over you have made " + allowedMistakes + " bad guesses, the guesses are : " + badGuesses)
            break; // stops the entire game
        } 
    } 
}





