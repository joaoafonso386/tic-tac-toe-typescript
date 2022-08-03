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
  winningConditions: number[][]
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
  winningConditions: [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ],
  controlVariables: {
    isInGameMode: false,
    winnerIsFound: false
  }
}

export { globals }