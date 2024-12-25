# Challenge #22: 🎁 Generate gift combinations

Santa Claus 🎅 is checking a **list of unique toys that he might include in his magic gift bag**. He wants to explore all possible combinations of toys. He wants to see all combinations that actually contain at least one toy.

Your task is to write a function that, given an array of toys, **returns all possible combinations**.

**Important**: You must return it in the order the toys appear and in combinations from 1 to n toys.

```js
generateGiftSets(['car', 'doll', 'puzzle'])
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

generateGiftSets(['ball'])
// [
//   ['ball']
// ]

generateGiftSets(['game', 'pc'])
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]
```

**Note: The input array will always have at least one toy and there will never be duplicate toys.**

**Tip**: There are many ways to solve this problem, but backtracking might be a good option. 😉
