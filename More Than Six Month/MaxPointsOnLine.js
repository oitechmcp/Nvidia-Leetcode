/*
 * @lc app=leetcode id=149 lang=javascript
 *
 * [149] Max Points on a Line
 */

// @lc code=start

var getGCD = function(a, b) {
    return b === 0 ? a : getGCD(b, a % b);
}

var getSlope = function (p1, p2) {
    var xDiff = p1[0] - p2[0];
    var yDiff = p1[1] - p2[1];
    if (xDiff === 0) return 'y';
    if (yDiff === 0) return 'x';
    var gcd = getGCD(xDiff, yDiff);
    xDiff /= gcd;
    yDiff /= gcd;
    return `${xDiff}/${yDiff}`;
}

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    var len = points.length;
    if (len < 3) return len;
    var max = 0;
    for (var i = 0; i < len; i++) {
        var map = new Map();
        var sameCount = 0;
        var curMax = 0;
        for (var j = i + 1; j < len; j++) {
            if (points[j][0] === points[i][0] && points[j][1] === points[i][1]) {
                sameCount++;
                continue;
            }
            var slope = getSlope(points[i], points[j]);
            if (!map.has(slope)) map.set(slope, 1);
            else map.set(slope, map.get(slope) + 1);
            curMax = Math.max(curMax, map.get(slope));
        }
        max = Math.max(max, curMax + sameCount + 1);
    }
    return max;
};


// console.log(maxPoints([[0,0],[1,1],[0,0]]))
// console.log(maxPoints([[1,1],[1,1],[1,1]]))
// console.log(maxPoints([[4,0],[4,-1],[4,5]]))
// console.log(maxPoints([[1,1],[2,2],[3,3]]))
// console.log(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]))
// console.log(maxPoints([[0,0],[94911151,94911150],[94911152,94911151]]))


// @lc code=end
