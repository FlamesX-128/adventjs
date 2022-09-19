/**
 * @param {(' ' | 'm' | '*')[][]} game
 * @param {string} direction
 */
export default function canMouseEat(direction, game) {
    // ¡Gracias por jugar a AdventJS 2021! 🤗
    // ¡Nos vemos el año que viene! 👋
    let position = [0, 0];

    for (let i = 0; i < game.length; i++) {
        for (let j = 0; j < game[i].length; j++) {
            if (game[i][j] === 'm') {
                position = [i, j];
                break;
            }
        }
    }

    if (direction === 'right') 
        position[1] += 1;
    
    if (direction === 'left') 
        position[1] -= 1;

    if (direction === 'up') 
        position[0] -= 1;
    
    if (direction === 'down') 
        position[0] += 1;

    return game[position[0]]
        ? game[position[0]][position[1]] === '*'
        : false;
}
