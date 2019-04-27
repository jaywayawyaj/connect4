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

      connect4.selectColumn(1, 1)
      expect(connect4.board).toEqual([
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
      connect4.selectColumn(2, 2)
      expect(connect4.board).toEqual([
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
      connect4._hasWon(1)


      expect(connect4.board).toEqual([
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          ['x', 'x', 'x', 'x', ' ', ' ']
      ]);

      expect(connect4.inProgress).toEqual(false);

      expect(connect4.winner).toEqual(1)
    });

    test('player 1 can win with 4 in a row horozintally with gaps', () => {
      const connect4 = new Connect4();

      connect4.selectColumn(2, 1)
      connect4.selectColumn(3, 1)
      connect4.selectColumn(4, 1)
      connect4.selectColumn(5, 1)
      connect4._hasWon(1)


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
      connect4._hasWon(2)


      expect(connect4.board).toEqual([
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', 'o', 'o', 'o', 'o', ' ']
      ]);

      expect(connect4.inProgress).toEqual(false);

      expect(connect4.winner).toEqual(2)

    });

    test('either player can win with 4 in a row horozintally with gaps', () => {
      const connect4 = new Connect4();

      connect4.selectColumn(2, 2)
      connect4.selectColumn(3, 1)
      connect4.selectColumn(4, 1)
      connect4.selectColumn(5, 2)
      connect4.selectColumn(2, 2)
      connect4.selectColumn(3, 2)
      connect4.selectColumn(4, 2)
      connect4.selectColumn(5, 2)
      connect4._hasWon(2)

      expect(connect4.board).toEqual([
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', 'o', 'o', 'o', 'o', ' '],
          [' ', 'o', 'x', 'x', 'o', ' ']
      ]);
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

    test('player 2 can select column 3 thrice', () => {
      const connect4 = new Connect4();
      connect4.selectColumn(3, 2);
      connect4.selectColumn(3, 2);
      connect4.selectColumn(3, 2);

      expect(connect4.board).toEqual([
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', 'o', ' ', ' ', ' '],
          [' ', ' ', 'o', ' ', ' ', ' '],
          [' ', ' ', 'o', ' ', ' ', ' ']
      ]);
    });

      test('either player can win vertically', () => {
        const connect4 = new Connect4();
        connect4.selectColumn(3, 2);
        connect4.selectColumn(3, 2);
        connect4.selectColumn(3, 2);
        connect4.selectColumn(3, 2);
        connect4._hasWon(2);

        expect(connect4.board).toEqual([
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', 'o', ' ', ' ', ' '],
            [' ', ' ', 'o', ' ', ' ', ' '],
            [' ', ' ', 'o', ' ', ' ', ' '],
            [' ', ' ', 'o', ' ', ' ', ' ']
          ]);

        expect(connect4.inProgress).toEqual(false);

        expect(connect4.winner).toEqual(2)
    });

    test('either player can win vertically with gaps', () => {
      const connect4 = new Connect4();
      connect4.selectColumn(3, 1);
      connect4.selectColumn(3, 2);
      connect4.selectColumn(3, 2);
      connect4.selectColumn(3, 2);
      connect4.selectColumn(3, 2);
      connect4._hasWon(2);


      expect(connect4.board).toEqual([
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', 'o', ' ', ' ', ' '],
          [' ', ' ', 'o', ' ', ' ', ' '],
          [' ', ' ', 'o', ' ', ' ', ' '],
          [' ', ' ', 'o', ' ', ' ', ' '],
          [' ', ' ', 'x', ' ', ' ', ' ']
        ]);

      expect(connect4.inProgress).toEqual(false);

      expect(connect4.winner).toEqual(2)
  });
  test('either player can win ascending diagonally', () => {
      const connect4 = new Connect4();
      connect4.selectColumn(1, 1);
      connect4.selectColumn(2, 2);
      connect4.selectColumn(2, 1);
      connect4.selectColumn(3, 2);
      connect4.selectColumn(3, 2);
      connect4.selectColumn(3, 1);
      connect4.selectColumn(4, 2);
      connect4.selectColumn(4, 2);
      connect4.selectColumn(4, 2);
      connect4.selectColumn(4, 1);
      connect4._hasWon(1);


      expect(connect4.board).toEqual([
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', 'x', ' ', ' '],
          [' ', ' ', 'x', 'o', ' ', ' '],
          [' ', 'x', 'o', 'o', ' ', ' '],
          ['x', 'o', 'o', 'o', ' ', ' ']
        ]);

      expect(connect4.inProgress).toEqual(false);

      expect(connect4.winner).toEqual(1)
  });
  test('either player can win ascending diagonally at top right', () => {
      const connect4 = new Connect4();
      connect4.selectColumn(1, 1);
      connect4.selectColumn(1, 1);
      connect4.selectColumn(1, 1);
      connect4.selectColumn(2, 2);
      connect4.selectColumn(2, 1);
      connect4.selectColumn(2, 1);
      connect4.selectColumn(2, 1);
      connect4.selectColumn(3, 2);
      connect4.selectColumn(3, 2);
      connect4.selectColumn(3, 2);
      connect4.selectColumn(3, 1);
      connect4.selectColumn(3, 1);
      connect4.selectColumn(4, 2);
      connect4.selectColumn(4, 2);
      connect4.selectColumn(4, 2);
      connect4.selectColumn(4, 1);
      connect4.selectColumn(4, 2);
      connect4.selectColumn(4, 1);
      connect4._hasWon(1);


      expect(connect4.board).toEqual([
          [' ', ' ', ' ', 'x', ' ', ' '],
          [' ', ' ', 'x', 'o', ' ', ' '],
          [' ', 'x', 'x', 'x', ' ', ' '],
          ['x', 'x', 'o', 'o', ' ', ' '],
          ['x', 'x', 'o', 'o', ' ', ' '],
          ['x', 'o', 'o', 'o', ' ', ' ']
        ]);

      expect(connect4.inProgress).toEqual(false);

      expect(connect4.winner).toEqual(1)
  });
  test('either player can win ascending diagonally not from board[5][0]', () => {
      const connect4 = new Connect4();
      connect4.selectColumn(3, 1);
      connect4.selectColumn(3, 1);
      connect4.selectColumn(3, 1);
      connect4.selectColumn(4, 2);
      connect4.selectColumn(4, 1);
      connect4.selectColumn(4, 1);
      connect4.selectColumn(4, 1);
      connect4.selectColumn(5, 2);
      connect4.selectColumn(5, 2);
      connect4.selectColumn(5, 2);
      connect4.selectColumn(5, 1);
      connect4.selectColumn(5, 1);
      connect4.selectColumn(6, 2);
      connect4.selectColumn(6, 2);
      connect4.selectColumn(6, 2);
      connect4.selectColumn(6, 1);
      connect4.selectColumn(6, 2);
      connect4.selectColumn(6, 1);
      connect4._hasWon(1);


      expect(connect4.board).toEqual([
          [' ', ' ', ' ', ' ', ' ', 'x'],
          [' ', ' ', ' ', ' ', 'x', 'o'],
          [' ', ' ', ' ', 'x', 'x', 'x'],
          [' ', ' ', 'x', 'x', 'o', 'o'],
          [' ', ' ', 'x', 'x', 'o', 'o'],
          [' ', ' ', 'x', 'o', 'o', 'o']
        ]);

      expect(connect4.inProgress).toEqual(false);

      expect(connect4.winner).toEqual(1)
  });
});
