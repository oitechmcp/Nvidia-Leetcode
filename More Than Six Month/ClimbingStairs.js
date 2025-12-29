/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    var result = 1, prev = 1;

    for (var i = 2; i <= n; i++) {
        var p = prev;
        prev = result;
        result += p;
    }

    return result;
};