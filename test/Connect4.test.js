const Connect4 = require('../src/Connect4.js')

describe('Connect4', () => {
    test('starts with an empty board', () => {
        const connect4 = new Connect4()

        expect(connect4.board).toEqual([
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ']
        ])
    })

        describe('#selectColumn', () => {
            test('player 1 can select column 1', () => {
                const connect4 = new Connect4()

                connect4.selectColumn(1, 1)
                expect(connect4.board).toEqual([
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    ['x', ' ', ' ', ' ', ' ', ' ']
                ])
            })

            test('player 2 can select column 2, 2', () => {
                const connect4 = new Connect4()
                connect4.selectColumn(2, 2)
                expect(connect4.board).toEqual([
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', 'o', ' ', ' ', ' ', ' ']
                ])
            })

            test('player 1 can select column 1 twice', () => {
                const connect4 = new Connect4()
                connect4.selectColumn(1, 1)
                connect4.selectColumn(1, 1)

                expect(connect4.board).toEqual([
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    ['x', ' ', ' ', ' ', ' ', ' '],
                    ['x', ' ', ' ', ' ', ' ', ' ']
                ])
            })

            test('player 2 can select column 3 thrice', () => {
                const connect4 = new Connect4()
                connect4.selectColumn(3, 2)
                connect4.selectColumn(3, 2)
                connect4.selectColumn(3, 2)

                expect(connect4.board).toEqual([
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', 'o', ' ', ' ', ' '],
                    [' ', ' ', 'o', ' ', ' ', ' '],
                    [' ', ' ', 'o', ' ', ' ', ' ']
                ])
            })
        })

        describe('winning situations', () => {

            describe('horizontal wins', () => {

                test('player 1 can win with 4 in a row horozintally', () => {
                    const connect4 = new Connect4()

                    expect(connect4.inProgress).toEqual(true)

                    connect4.board = ([
                        [' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' '],
                        ['x', 'x', 'x', 'x', ' ', ' ']
                    ])
                    connect4._hasWon(1)

                    expect(connect4.inProgress).toEqual(false)
                    expect(connect4.winner).toEqual(1)
                })

                test('player 1 can win with 4 in a row horozintally with gaps', () => {
                    const connect4 = new Connect4()

                    connect4.board = ([
                        [' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', 'x', 'x', 'x', 'x', ' ']
                    ])
                    connect4._hasWon(1)

                    expect(connect4.inProgress).toEqual(false)
                    expect(connect4.winner).toEqual(1)
                })

                test('player 2 can win with 4 in a row horozintally with gaps', () => {
                    const connect4 = new Connect4()

                    connect4.board = ([
                        [' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', 'o', 'o', 'o', 'o', ' ']
                    ])
                    connect4._hasWon(2)

                    expect(connect4.inProgress).toEqual(false)
                    expect(connect4.winner).toEqual(2)
                })

                test('either player can win with 4 in a row horozintally with gaps', () => {
                    const connect4 = new Connect4()

                    connect4.board = ([
                        [' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', 'o', 'o', 'o', 'o', ' '],
                        [' ', 'o', 'x', 'x', 'o', ' ']
                    ])
                    connect4._hasWon(2)

                    expect(connect4.inProgress).toEqual(false)
                    expect(connect4.winner).toEqual(2)
                })
            })

            describe('vertical wins', () => {

            test('either player can win vertically', () => {
                const connect4 = new Connect4()

                connect4.board = ([
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', 'o', ' ', ' ', ' '],
                    [' ', ' ', 'o', ' ', ' ', ' '],
                    [' ', ' ', 'o', ' ', ' ', ' '],
                    [' ', ' ', 'o', ' ', ' ', ' ']
                ])
                connect4._hasWon(2)

                expect(connect4.inProgress).toEqual(false)
                expect(connect4.winner).toEqual(2)
            })

            test('either player can win vertically with gaps', () => {
                const connect4 = new Connect4()

                connect4.board = ([
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', 'o', ' ', ' ', ' '],
                    [' ', ' ', 'o', ' ', ' ', ' '],
                    [' ', ' ', 'o', ' ', ' ', ' '],
                    [' ', ' ', 'o', ' ', ' ', ' '],
                    [' ', ' ', 'x', ' ', ' ', ' ']
                ])
                connect4._hasWon(2)

                expect(connect4.inProgress).toEqual(false)
                expect(connect4.winner).toEqual(2)
            })
        })

        describe('either player ascending diagonal wins', () => {

            test('win ascending diagonally low left', () => {
                const connect4 = new Connect4()

                connect4.board = ([
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', 'x', ' ', ' '],
                    [' ', ' ', 'x', ' ', ' ', ' '],
                    [' ', 'x', ' ', ' ', ' ', ' '],
                    ['x', ' ', ' ', ' ', ' ', ' ']
                ])
                connect4._hasWon(1)

                expect(connect4.inProgress).toEqual(false)
                expect(connect4.winner).toEqual(1)
            })

            test('win ascending diagonally at top left', () => {
                const connect4 = new Connect4()

                connect4.board = ([
                    [' ', ' ', ' ', 'x', ' ', ' '],
                    [' ', ' ', 'x', ' ', ' ', ' '],
                    [' ', 'x', ' ', ' ', ' ', ' '],
                    ['x', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' ']
                ])
                connect4._hasWon(1)

                expect(connect4.inProgress).toEqual(false)
                expect(connect4.winner).toEqual(1)
            })

            test('win ascending diagonally top right', () => {
                const connect4 = new Connect4()

                connect4.board = ([
                    [' ', ' ', ' ', ' ', ' ', 'x'],
                    [' ', ' ', ' ', ' ', 'x', ' '],
                    [' ', ' ', ' ', 'x', ' ', ' '],
                    [' ', ' ', 'x', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' ']
                ])
                connect4._hasWon(1)

                expect(connect4.inProgress).toEqual(false)
                expect(connect4.winner).toEqual(1)
            })

            test('either player can win ascending diagonally from mid table', () => {
                const connect4 = new Connect4()

                connect4.board = ([
                    [' ', ' ', ' ', ' ', 'x', ' '],
                    [' ', ' ', ' ', 'x', ' ', ' '],
                    [' ', ' ', 'x', ' ', ' ', ' '],
                    [' ', 'x', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' ']
                ])
                connect4._hasWon(1)

                expect(connect4.inProgress).toEqual(false)
                expect(connect4.winner).toEqual(1)
            })

            test('win ascending diagonally from mid right', () => {
                const connect4 = new Connect4()

                connect4.board = ([
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', 'x'],
                    [' ', ' ', ' ', ' ', 'x', ' '],
                    [' ', ' ', ' ', 'x', ' ', ' '],
                    [' ', ' ', 'x', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' ']
                ])
                connect4._hasWon(1)

                expect(connect4.inProgress).toEqual(false)
                expect(connect4.winner).toEqual(1)
            })
        })

        describe('either player descending diagonal wins', () => {

            test('win descending diagonally high left', () => {
                const connect4 = new Connect4()

                connect4.board = ([
                    ['x', ' ', ' ', ' ', ' ', ' '],
                    [' ', 'x', ' ', ' ', ' ', ' '],
                    [' ', ' ', 'x', ' ', ' ', ' '],
                    [' ', ' ', ' ', 'x', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' ']
                ])
                connect4._hasWon(1)

                expect(connect4.inProgress).toEqual(false)
                expect(connect4.winner).toEqual(1)
            })

            test('win descending diagonally low left', () => {
                const connect4 = new Connect4()

                connect4.board = ([
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    ['x', ' ', ' ', ' ', ' ', ' '],
                    [' ', 'x', ' ', ' ', ' ', ' '],
                    [' ', ' ', 'x', ' ', ' ', ' '],
                    [' ', ' ', ' ', 'x', ' ', ' ']
                ])
                connect4._hasWon(1)

                expect(connect4.inProgress).toEqual(false)
                expect(connect4.winner).toEqual(1)
            })

            test('win descending diagonally high right', () => {
                const connect4 = new Connect4()

                connect4.board = ([
                    [' ', ' ', 'x', ' ', ' ', ' '],
                    [' ', ' ', ' ', 'x', ' ', ' '],
                    [' ', ' ', ' ', ' ', 'x', ' '],
                    [' ', ' ', ' ', ' ', ' ', 'x'],
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' ']
                ])
                connect4._hasWon(1)

                expect(connect4.inProgress).toEqual(false)
                expect(connect4.winner).toEqual(1)
            })

            test('win descending diagonally low right', () => {
                const connect4 = new Connect4()

                connect4.board = ([
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', ' ', ' ', ' ', ' '],
                    [' ', ' ', 'x', ' ', ' ', ' '],
                    [' ', ' ', ' ', 'x', ' ', ' '],
                    [' ', ' ', ' ', ' ', 'x', ' '],
                    [' ', ' ', ' ', ' ', ' ', 'x']
                ])
                connect4._hasWon(1)

                expect(connect4.inProgress).toEqual(false)
                expect(connect4.winner).toEqual(1)
            })
        })
    })
})
