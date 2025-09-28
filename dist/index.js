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
        spawnBar(3);
    }
    else if (columns.includes(-3) ||
        rows.includes(-3) ||
        diagonals.includes(-3)) {
        winner = -1;
        console.log(`-1 wins`);
        spawnBar(-3);
    }
    else {
        console.log(`No winners this far`);
    }
}
function spawnBar(winner) {
    const horiBar = document.getElementById('horiBar');
    const vertBar = document.getElementById('vertBar');
    const diagBar = document.getElementById('diagBar');
    const winnerColumn = columns.indexOf(winner);
    const winnerRow = rows.indexOf(winner);
    // Spawning on columns
    console.log(`spawning on col: ${winnerColumn}`);
    if (winnerColumn >= 0) {
        const spawnLoc = document.getElementById(String(winnerColumn + 1));
        console.log(spawnLoc);
        const bar = vertBar?.cloneNode(true);
        bar.classList.toggle('hidden');
        spawnLoc?.appendChild(bar);
    }
    // Spawning on rows
    console.log(`spawning on row: ${winnerRow}`);
    if (winnerRow >= 0) {
        let location = 0;
        if (winnerRow + 1 === 1) {
            location = 1;
        }
        else if (winnerRow + 1 == 2) {
            location = 4;
        }
        else {
            location = 7;
        }
        const spawnLoc = document.getElementById(String(location));
        console.log(spawnLoc);
        const bar = horiBar?.cloneNode(true);
        bar.classList.toggle('hidden');
        spawnLoc?.appendChild(bar);
    }
    // Spawning diagonals
    if (diagonals[0] === winner) {
        const spawnLoc = document.getElementById('5');
        const bar = diagBar?.cloneNode(true);
        bar.classList.toggle('hidden');
        bar.classList.toggle('left');
        spawnLoc?.appendChild(bar);
    }
    if (diagonals[1] === winner) {
        const spawnLoc = document.getElementById('5');
        const bar = diagBar?.cloneNode(true);
        bar.classList.toggle('hidden');
        bar.classList.toggle('right');
        spawnLoc?.appendChild(bar);
    }
    dialog.showModal();
    const modalText = document.getElementById('player-winner');
    modalText.textContent = `Player ${winner > 0 ? 1 : 2} wins!`;
}
function changePlayerTurn() {
    playerTurn?.classList.toggle('tied-1');
    currentPlayer = currentPlayer * -1;
}
const ties = document.querySelectorAll('.row');
const playerTurn = document.getElementById('turn');
const dialog = document.getElementById('winner');
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
                    changePlayerTurn();
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