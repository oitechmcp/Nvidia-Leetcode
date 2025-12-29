// Since every balanced substring should start with 1 and end with 0,
// we can reorder the inside by recursing on that part.
// Sort in reverse LXG order to "bunch up" as many 1s as possible first.
let makeLargestSpecial = str =>
  Array.from(balanced(str))
    .map(bal => `${1}${makeLargestSpecial(bal.slice(1, -1))}${0}`)
    .sort().reverse()
    .join("");

// JavaScript generator that splits a special binary string
// into its substrings (each of them must be balanced too).
function* balanced(str) {
  let i = 0, j = 0, count = 0;
  for (; j < str.length; j++) {
    const ch = str.at(j);
    if (ch === '1') count++; else count--;
    if (count !== 0) continue;
    yield str.slice(i, j + 1);
    i = j + 1;
  }
}