# Challenge #14: 🦌 Weaving the reno

Reindeer need to move to occupy the stables, but **there cannot be more than one reindeer per stable**. Additionally, to keep the reindeer comfortable, we must minimize the total distance they travel to get settled.

We have two parameters:

- `reindeer`: An array of integers representing the positions of the reindeer.
- `stables`: An array of integers representing the positions of the stables.

Each reindeer must be moved from its current position to a stable. However, it is important to note that **there can only be one reindeer per stable**.

Your task is to calculate the **minimum number of moves needed** for all the reindeer to end up in a stable.

Note: Keep in mind that **the stables array will always be the same size as the reindeer array** and that **the stables will always be unique**.

Example

```js
minMovesToStables([2, 6, 9], [3, 8, 5]) // -> 3
// Explanation:
// Reindeer at positions: 2, 6, 9
// Stables at positions: 3, 8, 5
// 1st reindeer: moves from position 2 to the stable at position 3 (1 move).
// 2nd reindeer: moves from position 6 to the stable at position 5 (1 move)
// 3rd reindeer: moves from position 9 to the stable at position 8 (1 move).
// Total moves: 1 + 1 + 1 = 3 moves

minMovesToStables([1, 1, 3], [1, 8, 4])
// Explanation:
// Reindeer at positions: 1, 1, 3
// Stables at positions: 1, 8, 4
// 1st reindeer: does not move (0 moves)
// 2nd reindeer: moves from position 1 to the stable at position 4 (3 moves)
// 3rd reindeer: moves from position 3 to the stable at position 8 (5 moves)
// Total moves: 0 + 3 + 5 = 8 moves
```
