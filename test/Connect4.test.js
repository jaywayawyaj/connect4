const Connect4 = require('../src/Connect4.js');

describe('Connect4', () => {
    test('starts with an empty board', () => {
        const connect4 = new Connect4();

        expect(connect4.board).toEqual([
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ']
        ]);
    });

    test('player 1 can select column 1', () => {
      const connect4 = new Connect4();

      expect(connect4.selectColumn(1, 1)).toEqual([
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          ['x', ' ', ' ', ' ', ' ', ' ']
      ]);
    });

    test('player 2 can select column 2, 2', () => {
      const connect4 = new Connect4();

      expect(connect4.selectColumn(2, 2)).toEqual([
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', 'o', ' ', ' ', ' ', ' ']
      ]);
    });

    test('player 1 can win with 4 in a row horozintally', () => {
      const connect4 = new Connect4();

      expect(connect4.inProgress).toEqual(true)

      connect4.selectColumn(1, 1)
      connect4.selectColumn(2, 1)
      connect4.selectColumn(3, 1)
      connect4.selectColumn(4, 1)

      expect(connect4.board).toEqual([
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          ['x', 'x', 'x', 'x', ' ', ' ']
      ]);

      expect(connect4.inProgress).toEqual(false);

      expect(connect4.hasWon(1)).toEqual('Player 1 has won!')
    });

    test('player 1 can win with 4 in a row horozintally with gaps', () => {
      const connect4 = new Connect4();

      connect4.selectColumn(2, 1)
      connect4.selectColumn(3, 1)
      connect4.selectColumn(4, 1)
      connect4.selectColumn(5, 1)

      expect(connect4.board).toEqual([
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', 'x', 'x', 'x', 'x', ' ']
      ]);

      expect(connect4.inProgress).toEqual(false);
    });

    test('player 2 can win with 4 in a row horozintally with gaps', () => {
      const connect4 = new Connect4();

      connect4.selectColumn(2, 2)
      connect4.selectColumn(3, 2)
      connect4.selectColumn(4, 2)
      connect4.selectColumn(5, 2)

      expect(connect4.board).toEqual([
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', 'o', 'o', 'o', 'o', ' ']
      ]);

      expect(connect4.inProgress).toEqual(false);

      expect(connect4.hasWon(2)).toEqual('Player 2 has won!')

    });

    test('player 1 can select column 1 twice', () => {
      const connect4 = new Connect4();
      connect4.selectColumn(1, 1);
      connect4.selectColumn(1, 1);

      expect(connect4.board).toEqual([
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          ['x', ' ', ' ', ' ', ' ', ' '],
          ['x', ' ', ' ', ' ', ' ', ' ']
      ]);
    });
});
