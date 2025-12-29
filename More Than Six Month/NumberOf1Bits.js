/**
 * @param {number} n
 * @return {number}
 */
 
var hammingWeight = function(n) {
    let count = (n % 2 === 0 ? 1 : 2);
    while((n = (n / 2 !== 0.5) ? Math.trunc(n / 2) : n / 2) != 0.5 && (count = n % 2 === 1 ? count + 1 : count));
    return --count;
};