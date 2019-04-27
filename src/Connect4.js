class ConnectFour {
    constructor() {
        this.inProgress = true;
        this.winner = null;
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

        this.counter = 0
    }

    selectColumn(columnNumber, player) {
        for(let i = 5; i >= 0; i--) {
            if(this.board[i][columnNumber - 1] === ' ') {
                this.board[i][columnNumber - 1] = this.tokens[player]
                break;
            }
        }
    }

    _hasWon(player) {
      this._hasWonHorizontally(player)
      this._hasWonVertically(player)
      this._hasWonDiagonallyAscending(player)
    }

    _hasWonHorizontally(player) {
        for(let r = 5; r >= 0; r--) {
            for(let c = 0; c <= 5; c++) {
                this._countTokens(r, c, player)
            }
        }
    }

    _hasWonVertically(player) {
        for(let c = 0; c <= 5; c++) {
            for(let r = 5; r >= 0; r--) {
                this._countTokens(r, c, player)
            }
        }
    }

    _hasWonDiagonallyAscending(player) {
        for(let r = 5; r >= 0; r--) {
            let e = r
            for(let c = 0; c <= 5; c++) {
                this._countTokens(c, e, player)
                e -= 1
            }
        }
    }

    _countTokens(c, r, player) {
        this.board[c][r] === this.tokens[player] ?
            this.counter += 1 : this.counter = 0
        this._winConditions(player)
    }

    _winConditions(player) {
        if(this.counter === 4) {
            this.inProgress = false
            this.winner = player
        }
    }
}

module.exports = ConnectFour
