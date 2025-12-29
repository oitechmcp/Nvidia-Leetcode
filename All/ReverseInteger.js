function reverse(x) {
  const isNegative = x < 0;
  x = Math.abs(x);
  let ret = 0;
  while (x > 0) {
    const num = x % 10;
    x = Math.floor(x / 10);
    ret *= 10;
    ret += num;
  }
  if (ret > Math.pow(2,31)) return 0;
  return isNegative ? ret * -1 : ret;
};