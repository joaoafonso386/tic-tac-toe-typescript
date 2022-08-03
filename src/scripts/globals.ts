interface Globals {

DOM: {
  board: HTMLTableElement,
  startButton: HTMLInputElement,
  gameStartedParagraph: HTMLParagraphElement,
  infoParagraph: HTMLParagraphElement,
  whoIsPlayingParagraph: HTMLLIElement,
  cellArray: HTMLTableCellElement[]
},
players: {
  playerOne: string,
  playerTwo: string
}
plays: {
  playerOnePlays: number,
  playerTwoPlays: number
}
winningConditions: {
  // horizontalWinner: 
}
controlVariables: {
  isInGameMode: boolean,
  winnerIsFound: boolean
}

}



const globals: Globals = {
  DOM: {
    board: document.querySelector(".board"),
    startButton: document.querySelector(".start-game"),
    gameStartedParagraph: document.createElement("p"),
    infoParagraph: document.createElement("p"),
    whoIsPlayingParagraph: document.createElement("li"),
    cellArray: []
  },
  players: {
    playerOne: "X",
    playerTwo: "O"
  },
  plays: {
    playerOnePlays: 0,
    playerTwoPlays: 0
  },
  winningConditions: {

  },
  controlVariables: {
    isInGameMode: false,
    winnerIsFound: false
  }
}

export { globals }