const board = document.querySelector(".board");
const boardRows = board === null || board === void 0 ? void 0 : board.rows;
const startButton = document.querySelector(".start-button");
const playerOne = "X";
const playerTwo = "O";
for (let row of boardRows) {
    const cellCollection = row.children;
    for (let cell of cellCollection) {
        console.log(cell);
    }
}
