"use strict";
const board = document.querySelector(".board");
const startButton = document.querySelector(".start-button");
const playerOne = "X";
const isPlayerOnePlaying = false;
const isPlayerTwoPlaying = false;
const playerTwo = "O";
for (let { children } of board.rows) {
    for (let cell of children) {
        console.log(cell);
        cell.addEventListener("click", () => {
            console.log("clicked");
        });
    }
}
