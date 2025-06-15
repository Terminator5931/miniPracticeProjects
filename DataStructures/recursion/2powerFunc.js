function power(a, b) {
  if (b == 0) {
    return 1;
  }
  if (b == 1) {
    return a;
  }
  return a * power(a, b - 1);
}
console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1
