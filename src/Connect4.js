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
    }

    _hasWonHorizontally(player) {
        for(let a = 5; a >= 0; a--) {
            for(let i = 0; i < 5; i++) {
                this._placeTokens(a, i, player)
            }
        }
    }

    _hasWonVertically(player) {
        for(let a = 0; a < 5; a++) {
            for(let i = 5; i >= 0; i--) {
                this._countTokens(i, a, player)
            }
        }
    }

    _hasWonDiagonallyAscending(player) {

    }

    _countTokens(a, i, player) {
        this.board[a][i] === this.tokens[player] ?
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
