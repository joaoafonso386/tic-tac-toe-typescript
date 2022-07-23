const board: HTMLTableElement | null = document.querySelector(".board");
const boardRows: HTMLCollection | undefined = board?.rows;
const startButton: HTMLButtonElement = document.querySelector(".start-button");
const playerOne: string = "X";
const playerTwo: string = "O";

for(let row of boardRows) {

  const cellCollection: HTMLCollection = row.children;

  for(let cell of cellCollection) {
    console.log(cell)
  }

}

