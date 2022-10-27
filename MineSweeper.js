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
    for (i = 0; i < quantityOfMines; i++) {
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
    backEndBoard[chooseRow][chooseColumn] = 0
}

function landMinesAssign() {
    firstMoveGuard = 0
    // Validate no landmines near first move.
    console.log("Thatsaaa the symbol" + backEndBoard[chooseRow][chooseColumn] + "Thats the row:" + chooseRow + "Thats the column" + chooseColumn)
    for (w = (chooseRow[0] - 1); w <= chooseRow[0]; w++) {
        for (m = (chooseColumn[0] - 1); m <= chooseColumn[0]; m++) {
            console.log("Thats the symbol: " + backEndBoard[w][m] + "Thats the row:" + w + "Thats the column" + m)
            if (backEndBoard[w][m] == emptyCell) {
                backEndBoard[w][m] = firstMoveGuard
                console.log(backEndBoard[w][m])
            } else if  (backEndBoard[w][m] == borderCell) {
                backEndBoard[w][m] = borderCell
            }

        }
    }
    // Inserting randomly landmines to the game
    indexOfX = new Array();
    for (i = 1; i <= quantityOfMines; i++) {
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
}

function otherMoves() {

}

function calCellNearLandMines() {



}

//Game starts here
gameMode()
var backEndBoard = initializeBoard()
var frontEndBoard = initializeBoard()
var mineSweepGameisON = true
while (mineSweepGameisON) {
    console.table(backEndBoard)
    firstMove()
    landMinesAssign()
    // assignment numbers near land mines
    for (i = 0; i < indexOfX.length; i++) {
        i += 1
        var tempXindex = new Array(indexOfX[i - 1], indexOfX[i])
        for (j = (tempXindex[0] - 1); j <= (tempXindex[0] + 1); j++) {
            for (l = (tempXindex[1] - 1); l <= (tempXindex[1] + 1); l++) {
                if (backEndBoard[j][l] == "X") {
                    backEndBoard[j][l] = "X";
                } else if (backEndBoard[j][l] == "%") {
                    backEndBoard[j][l] = "%";
                } else if (backEndBoard[j][l] == firstMoveGuard) {
                    backEndBoard[j][l] = 1
                } else if (backEndBoard[j][l] == emptyCell || backEndBoard[j][l] == firstMoveGuard ){
                    backEndBoard[j][l] = 1
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
    console.table(frontEndBoard)
    otherMoves()
}