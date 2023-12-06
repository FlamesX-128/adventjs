function decode(message: string) {
    const stack = [];
    let result = '';

    for (const char of message) {
        if (char === '(') {
            stack.push(result);
            result = '';
        } else if (char === ')') {
            result = stack.pop()
                + result.split('').reverse().join('');
        } else {
            result += char;
        }
    }

    return result;
}

export { decode }
