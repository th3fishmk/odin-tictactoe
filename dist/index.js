"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let game = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
let columns = [0, 0, 0];
let rows = [0, 0, 0];
let diagonals = [0, 0];
let winner = 0;
let currentPlayer = 1;
function updateColumns() {
    columns[0] = game[0][0] + game[1][0] + game[2][0];
    columns[1] = game[0][1] + game[1][1] + game[2][1];
    columns[2] = game[0][2] + game[1][2] + game[2][2];
}
function updateRows() {
    rows[0] = game[0][0] + game[0][1] + game[0][2];
    rows[1] = game[1][0] + game[1][1] + game[1][2];
    rows[2] = game[2][0] + game[2][1] + game[2][2];
}
function updateDiagonals() {
    diagonals[0] = game[0][0] + game[1][1] + game[2][2];
    diagonals[1] = game[2][0] + game[1][1] + game[0][2];
}
function checkForWinner() {
    console.log(`Checking for winners`);
    updateColumns();
    updateRows();
    updateDiagonals();
    // Fancy print
    rows.forEach((element) => {
        console.log(`\t ${element}`);
    });
    console.log(`${columns[0]} ${columns[1]} ${columns[2]}`);
    console.log(`\\ = ${diagonals[0]} / = ${diagonals[1]}`);
    if (columns.includes(3) || rows.includes(3) || diagonals.includes(3)) {
        winner = 1;
        console.log(`1 wins`);
    }
    else if (columns.includes(-3) ||
        rows.includes(-3) ||
        diagonals.includes(-3)) {
        winner = -1;
        console.log(`-1 wins`);
    }
    else {
        console.log(`No winners this far`);
    }
}
const ties = document.querySelectorAll('.row');
ties.forEach((tie) => {
    tie.addEventListener('click', () => {
        if (winner === 0) {
            if (!tie.classList.contains('tied1') &&
                !tie.classList.contains('tied-1')) {
                console.log(`\nPlayer ${currentPlayer} just played!`);
                console.log(`New tie`);
                if (currentPlayer > 0) {
                    tie.classList.add('tied1');
                }
                else {
                    tie.classList.add('tied-1');
                }
                updateArray(Number(tie.getAttribute('id')), currentPlayer);
                checkForWinner();
                if (winner === 0) {
                    currentPlayer = currentPlayer * -1;
                }
            }
            else {
                console.log(`\nIt's player: ${currentPlayer} turn!`);
            }
        }
        else {
            console.log(`Start a new game!`);
        }
    });
});
function updateArray(index, player) {
    switch (index) {
        case 1:
            game[0][0] = player;
            break;
        case 2:
            game[0][1] = player;
            break;
        case 3:
            game[0][2] = player;
            break;
        case 4:
            game[1][0] = player;
            break;
        case 5:
            game[1][1] = player;
            break;
        case 6:
            game[1][2] = player;
            break;
        case 7:
            game[2][0] = player;
            break;
        case 8:
            game[2][1] = player;
            break;
        case 9:
            game[2][2] = player;
            break;
        default:
            break;
    }
}
//# sourceMappingURL=index.js.map