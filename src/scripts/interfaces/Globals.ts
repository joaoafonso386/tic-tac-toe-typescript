interface Globals {

  DOM: {
    board?: HTMLTableElement,
    startButton?: HTMLInputElement,
    gameStartedParagraph?: HTMLParagraphElement,
    infoParagraph?: HTMLParagraphElement,
    whoIsPlayingParagraph: HTMLLIElement,
    cellArray: HTMLTableCellElement[]
  },
  players: {
    playerOne: string,
    playerTwo: string
  }
  plays?: {
    playerOnePlays: number,
    playerTwoPlays: number
  }
  winningConditions: number[][]
  controlVariables?: {
    isInGameMode?: boolean,
    winnerIsFound: boolean
  }

}

export { Globals }