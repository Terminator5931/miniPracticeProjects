function sumRange(n = 0) {
  if (n == 0) {
    return 0;
  }
  return n + sumRange(n - 1);
}
console.log(sumRange(3));
