export default function sumPairs(numbers, result) {
    for (let i = 0; i < numbers.length; i++)
        for (let j = i + 1; j < numbers.length; j++)
            if (numbers[i] + numbers[j] === result)
                return [numbers[i], numbers[j]];
        
    return null;
}
