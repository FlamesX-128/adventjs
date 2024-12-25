# Challenge #17: 💣 Grinch's bombs

The Grinch has been up to his tricks in the North Pole and has planted **explosive coal bombs** 💣 in the elves' toy factory. He wants all the toys to be rendered useless, and that's why he has left a grid where some cells have explosive coal (`true`) and others are empty (`false`).

The elves need your help to **map the dangerous areas**. Each empty cell should display a number indicating **how many explosive coal bombs there are in the adjacent positions**, including diagonals.

```js
detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
])
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

detectBombs([
  [true, false],
  [false, false]
])
// [
//   [0, 1],
//   [1, 1]
// ]

detectBombs([
  [true, true],
  [false, false],
  [true, true]
])

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
```

**Note**: Want a hint? You've surely played the Minesweeper game before… 😉
