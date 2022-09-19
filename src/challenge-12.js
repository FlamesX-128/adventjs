export default function getMinJump(obstacles) {
    let minJump = 1;

    for (let i = 1; i < obstacles.length + 1; i++)
        if (obstacles.includes(minJump * i)) 
            minJump++ && (i = 0);        

    return minJump
}
