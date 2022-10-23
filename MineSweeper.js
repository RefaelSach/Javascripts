var board = [];
var spot = "_";

var column = prompt("Please enter the number of column's the game will have")
var row = prompt("Please enter the number of rows the game will have")
var markRow = 1;
var markColumn = "  ";

for ( var j = 1; j <= column; j++){
    markColumn += j + "  "
}
console.log(markColumn)

board += markColumn + '\n'
for (var i = 0; i < row; i++){
    board += markRow + i
    for ( var j = 0; j < column; j++){
        board += " " + spot + " " ;
    }
    board += "\n";
}
console.log(typeof(board))
console.log(board)

var chooseRow = prompt("Please start the game, you must enter: row number")
var chooseColumn = prompt("Please start the game, you must enter: Column number")

console.log(board.length)
for ( var k = 0; k < board.length; k++){
    
}