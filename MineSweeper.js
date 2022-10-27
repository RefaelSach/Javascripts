function gameMode() {
    console.log("Game on" + "\n" +
        "To start the game, First Choose which mode you'd like to play" + "\n" +
        "1)Beginner" + "\n" +
        "2)Normal" + "\n" +
        "3)Hard" + "\n" +
        "4)Expert")
    var gameMode = prompt("Choose mode.")
    if (gameMode == "Beginner") {
        tableColumn = 7
        tableRow = 7
    } else if (gameMode == "Normal") {
        tableColumn = 12
        tableRow = 12
    } else if (gameMode == "Hard") {
        tableColumn = 17
        tableRow = 17
    } else if (gameMode == "Expert") {
        tableColumn = 22
        tableRow = 22
    }
    quantityOfMines = Math.floor(((tableColumn * tableRow) / 7))
    landMines = []
    for (var i = 0; i < quantityOfMines; i++) {
        landMines.push("X");
    }
}

function initializeBoard() {
    var board = new Array();
    emptyCell = "_"
    borderCell = '%'
    for (var i = 0; i < tableColumn; i++) {
        board[i] = new Array();
        for (var j = 0; j < tableRow; j++) {
            if ((i == 0) || (j == 0) || (i == tableColumn - 1) || (j == tableRow - 1)) {
                board[i][j] = borderCell
            }
            else {
                board[i][j] = emptyCell
            }
        }
        // console.log(board[i].toString().replace(/,/g, ' ') + "   " + i + " Row ")
    }

    return board
}

function firstMove() {
    chooseRow = prompt("Please start the game, you must enter: row number")
    if (chooseRow == "stop") {
        mineSweepGameisON = false

    }
    chooseColumn = prompt("Please start the game, you must enter: Column number")
    if (chooseColumn == "stop") {
        mineSweepGameisON = false

    }
    firstMoveGuard = 0
    backEndBoard[chooseRow][chooseColumn] = firstMoveGuard
    console.log("You choose: " + '\n' +
        chooseRow + " Row " + '\n' +
        chooseColumn + " Column ")
    // emptyCellCount = 0
    // for (var p = 1; p < tableRow - 1; p++) {
    //     for (var j = 1; j < tableColumn - 1; j++) {
    //         if (frontEndBoard[p][j] == emptyCell) {
    //             emptyCellCount += 1;
    //         }
    //     }
    // }
}

function landMinesAssign() {
    // Validate no landmines near first move.
    for (var w = (chooseRow[0] - 1); w <= chooseRow[0]; w++) {
        for (var m = (chooseColumn[0] - 1); m <= chooseColumn[0]; m++) {
            if (backEndBoard[w][m] == emptyCell) {
                backEndBoard[w][m] = firstMoveGuard
            } else if (backEndBoard[w][m] == borderCell) {
                backEndBoard[w][m] = borderCell
            }

        }
    }
    frontEndBoard == backEndBoard
    // Inserting randomly landmines to the game
    indexOfX = new Array();
    for (var i = 1; i <= quantityOfMines; i++) {
        var randomRow = Math.floor(Math.random() * backEndBoard.length);
        var randomColumn = Math.floor(Math.random() * backEndBoard[randomRow].length);
        // Validate no landmines near first move.
        if (backEndBoard[randomRow][randomColumn] == borderCell || backEndBoard[randomRow][randomColumn] == firstMoveGuard) {
        } else if (backEndBoard[randomRow][randomColumn] == emptyCell) {
            backEndBoard[randomRow][randomColumn] = landMines[i];
            indexOfX.push(randomRow)
            indexOfX.push(randomColumn)
        }
    }
    // Assign Cell value's near landmines.
    for (var i = 0; i < indexOfX.length; i++) {
        i += 1
        var tempXindex = new Array(indexOfX[i - 1], indexOfX[i])
        for (var j = (tempXindex[0] - 1); j <= (tempXindex[0] + 1); j++) {
            for (var l = (tempXindex[1] - 1); l <= (tempXindex[1] + 1); l++) {
                if (backEndBoard[j][l] == "X") {
                    backEndBoard[j][l] = "X";
                } else if (backEndBoard[j][l] == "%") {
                    backEndBoard[j][l] = "%";
                } else if (backEndBoard[j][l] == firstMoveGuard) {
                    backEndBoard[j][l] = 1
                } else if (backEndBoard[j][l] == emptyCell || backEndBoard[j][l] == firstMoveGuard) {
                    backEndBoard[j][l] = 1
                } else if (backEndBoard[j][l] == undefined) {
                    backEndBoard[j][l] = "X"
                } else if (backEndBoard[j][l] == 1) {
                    backEndBoard[j][l] += 1;
                } else if (backEndBoard[j][l] == 2) {
                    backEndBoard[j][l] += 1
                } else if (backEndBoard[j][l] == 3) {
                    backEndBoard[j][l] += 1
                }
            }

        }
    }
    //Validate That all cell's stay as the should stay.
    for (var i = 0; i < backEndBoard.length; i++) {
        for (var j = 0; j < backEndBoard.length; j++) {
            if (backEndBoard[i][j] == emptyCell) {
                frontEndBoard[i][j] = 0;
            } else if (backEndBoard[i][j] == firstMoveGuard) {
                frontEndBoard[i][j] = firstMoveGuard
            }
        }
    }
}

function otherMoves() {
    chooseRow = prompt("For next move you must enter: row number")
    if (chooseRow == "stop") {
        mineSweepGameisON = false

    }
    chooseColumn = prompt("For next move you must enter: Column number")
    if (chooseColumn == "stop") {
        mineSweepGameisON = false
    }
    if (frontEndBoard[chooseRow][chooseColumn] == '\d'){
    } else if ( frontEndBoard[chooseRow][chooseColumn] == emptyCell ){
        emptyCellCount = emptyCellCount - 1;
    }
    frontEndBoard[chooseRow][chooseColumn] = backEndBoard[chooseRow][chooseColumn]
    console.log("You choose: " + '\n' +
        chooseRow + " Row " + '\n' +
        chooseColumn + " Column ")
}

function printBoard() {
    // Prints the id Index of each column
    array = [""];
    for (var i = 1; i < tableColumn - 1; i++) {
        array.push(i);
    }
    console.log(array.toString().replace(/,/g, ' ') + " Column")
    // Prints seperately each row of the table
    for (var i = 1; i < tableRow - 1; i++) {
        for (var j = 1; j < tableColumn - 1; j++) {
        }
        console.log(frontEndBoard[i].slice(1, - 1).toString().replace(/,/g, ' ') + "  :" + i + " <-Row ")
    }
}

//Game starts here
gameMode()
var backEndBoard = initializeBoard()
console.clear()
var frontEndBoard = initializeBoard()
printBoard()
firstMove()
landMinesAssign()
printBoard()
landMineLeftCount = 0
var mineSweepGameisON = true
//empty cell count
emptyCellCount = 0
for (var p = 1; p < tableRow - 1; p++) {
    for (var j = 1; j < tableColumn - 1; j++) {
        if (frontEndBoard[p][j] == emptyCell) {
            emptyCellCount += 1;
        }
    }
}
// Count the Total mines that enterd the table.
for (var p = 1; p < tableRow - 1; p++) {
    for (var j = 1; j < tableColumn - 1; j++) {
        if (backEndBoard[p][j] == "X") {
            landMineLeftCount += 1
        } else {
        }
    }
}
while (mineSweepGameisON) {
    // win or lose Condition.
    otherMoves()
    console.clear()
    printBoard()
    if (landMineLeftCount == emptyCellCount) {
        mineSweepGameisON = false;
        console.log("You won !!!!! .")
    } else if (frontEndBoard[chooseRow][chooseColumn] == landMines[0]) {
        mineSweepGameisON = false;
        console.log("You stepped on a mine, Game over.")
    }
}