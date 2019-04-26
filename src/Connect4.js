class ConnectFour {
    constructor() {
        this.inProgress = true;
        this.board = [
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ']
        ];
        this.tokens = {
          1: 'x',
          2: 'o'
        }
    }

    selectColumn(columnNumber, player) {
        this.board[5][columnNumber - 1] = this.tokens[player]
        this.hasWon(player)
        return this.board
    }

    hasWon(player) {
      let counter = 1
      for(let i = 0; i < 5; i++) {
        if(this.board[5][i] === this.tokens[player] && this.board[5][i] === this.board[5][i + 1]) {
          counter += 1;
        } else {
          counter = 1;
        }

        if(counter === 4) {
          this.inProgress = false
          return `Player ${player} has won!`
        }
      }
  }
}

module.exports = ConnectFour;
