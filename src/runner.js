const readline = require('readline-sync');
const Connect4 = require('./Connect4.js');

const app = new Connect4();

const renderBoard = (board) => {
    const columnNumbers = ' 1 2 3 4 5 6';
    const horizontalSeparator = '-------------';
    const newLine = '\n';
    const verticalSeparator = '|';

    const rowRenderer = (row) => verticalSeparator + columnRenderer(row) + newLine;
    const columnRenderer = (row) => row.map(col => col + verticalSeparator).join("");

    const content = board.map(rowRenderer).join("");

    return columnNumbers + newLine
        + horizontalSeparator + newLine
        + content
        + horizontalSeparator;
};

const clearScreen = () => console.log('\033c');

let playerOne = true;

clearScreen();

while (app.inProgress) {
    console.log(renderBoard(app.board));
    const player = playerOne ? 1 : 2;
    const input = readline.question(`Player ${player}, choose a column: `);
    clearScreen();
    try {
        app.selectColumn(input, player);
        app._hasWon(player)
        playerOne = !playerOne;
    } catch (e) {
        console.error('\x1b[31m' ,`*** ${e}... Please try again. ***`, '\x1b[0m')
    }
    if(!app.inProgress && app.winner === 0) {
        console.log('\x1b[31m' ,`It's a draw!`, '\x1b[0m')
    } else if(!app.inProgress && app.winner !== 0){
        console.log('\x1b[31m' ,`Player ${app.winner} wins`, '\x1b[0m')
    }
}
