# Connect 4

Yeah man, connect 4

## Before you start

* npm install
* if using intellij download the jest types for code completion (https://intellij-support.jetbrains.com/hc/en-us/community/posts/115000357324/comments/115000322910)

## How to run

```bash
    npm start
```

For tests:

```bash
    npm test
```

## Information

* We have set the project up so you can focus on the requirements, no need to worry about rendering anything to the screen.  Anything in runner.js is not part the test, though if you finish the test, feel free to refactor it.
* The scaffold class (Connect4.js) has some expectations for it to work correctly:
    * has a board consisting of an nested array of strings
    * the string is only one character long
    * any errors thrown in Connect4.js will not alternate to the other player
    
## User Requirements

```
As a Player,
I want to be able to select a column
So that I can play the game
```

```
As a Player,
I want to have a different identifier for my pieces
So that I know which pieces are mine
```

```
As a Player,
I want to be able to win by connecting 4 of my characters horizontally
So that I can beat my opponent
```

```
As a Player,
I want to be able to win by connecting 4 of my characters vertically
So that I can beat my opponent
```

```
As a Player,
I want to be able to win by connecting 4 of my characters diagonally
So that I can destroy my opponent
```

```
As a Games Master,
I want to be able to only accept column numbers
So that I know which column to insert the piece for that player
```

```
As a Games Master,
I do not want Players to be able to insert their pieces into columns which are already full
So that I can keep play within bounds
```

```
As a Games Master,
When there's no more room to insert pieces and there's no winner
I want to declare the game a draw
```

