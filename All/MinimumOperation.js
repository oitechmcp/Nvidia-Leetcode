/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  let oneArr = [];
  let ans = 0;
  while (n !== 0) {
    if (n % 2 === 1) {
      ans++;
      if (n === 1 || (n & 2) === 0) n--;
      else n++;
    } else n /= 2;
  }

  return ans;
};