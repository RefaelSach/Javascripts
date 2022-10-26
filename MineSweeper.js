function gameMode() {
    console.log("Game on" + "\n" +
        "To start the game, First Choose which mode you'd like to play" + "\n" +
        "1)Beginner" + "\n" +
        "2)Normal" + "\n" +
        "3)Hard" + "\n" +
        "4)Expert")
    var gameMode = prompt("Choose mode.")
    if (gameMode == "Beginner") {
        tableColumn = 5
        tableRow = 5
    } else if (gameMode == "Normal") {
        tableColumn = 10
        tableRow = 10
    } else if (gameMode == "Hard") {
        tableColumn = 15
        tableRow = 15
    } else if (gameMode == "Expert") {
        tableColumn = 20
        tableRow = 20
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
    var borderCell = '%'
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
}

function landMinesAssign() {
    backEndBoard[chooseRow][chooseColumn] = 0
    // Inserting randomly landmines to the game
    maxLandMinesNearCell = 8;
    indexOfX = new Array();
    for (i = 0; i < landMines.length; i++) {
        var randomRow = Math.floor(Math.random() * backEndBoard.length);
        var randomColumn = Math.floor(Math.random() * backEndBoard[randomRow].length);
        if (backEndBoard[randomRow][randomColumn] == '\D') {
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
                } else if (backEndBoard[j][l] == emptyCell) {
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
    otherMoves()
}