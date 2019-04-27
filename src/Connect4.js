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
      this._hasWonDiagonallyDescending(player)
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
        for(let e = 5; e >= 0; e--) {
            let r = e
            for(let c = 0; c <= 5; c++) {
                this._countTokens(r, c, player)
                r <= 0 ? r = e : r--
            }
        }

        for(let e = 0; e <= 5; e++) {
            let c = e
            for(let r = 5; r >= 0; r--) {
                this._countTokens(r, c, player)
                c <= 0 ? c = e : c++
            }
        }
    }

    _hasWonDiagonallyDescending(player) {
        for(let e = 0; e <= 5; e++) {
            let r = e
            for(let c = 0; c <= 5; c++) {
                this._countTokens(r, c, player)
                r >= 5 ? r = e : r++
            }
        }
    }

    _countTokens(r, c, player) {
        this.board[r][c] === this.tokens[player] ?
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
