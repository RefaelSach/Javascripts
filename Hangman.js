var Word = "ketchup"; 
var underScore = '_ ';
var wordArray = Word.split("");
var allowedMistakes = 4;
var gameON = true;
var badGuesses = [ ];
var goodGuesses = "";
var result = "";
// var spacesForUser= " "
console.log(wordArray)

for (var i = 0; i < Word.toString().length; i++){ // loop which gives me underscore's according to the length of the word
    goodGuesses += underScore
}

while ( gameON ){  // first loop which starts the game 
    var userInput = prompt("Please enter a Character");
    if (wordArray.toString().length == result.toString().length){
        break;  // stops the entire game
    }
    if ( wordArray.includes(userInput) ) {
        for ( j = 0; j <= wordArray.toString().length; j ++){
            var index = wordArray.indexOf(userInput)
            console.log(index)
            if (index == j){
                result[j] += wordArray[index]
            }
        }        
        console.log(result)
    } else {
        badGuesses += userInput;
        console.log(badGuesses)
        if (badGuesses.toString().length == allowedMistakes){
            console.log("Game over you have made " + allowedMistakes + " bad guesses, the guesses are : " + badGuesses)
            break; // stops the entire game
        } 
    } 
}





