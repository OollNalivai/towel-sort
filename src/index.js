module.exports = function towelSort (matrix) {
    let result = [];
    if (matrix && !!matrix.length) {
        for(let i=0; i < matrix.length; i++ ) {
            i%2 ? result.push(`${matrix[i]}`.split(',').reverse().join(',')) : result.push(`${matrix[i]}`);
        }
        result = `${result}`.split(',').map(s => +s);
    }
    return result;
}
