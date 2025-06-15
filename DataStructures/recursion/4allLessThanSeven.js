let allAreLessThanSeven = all([1, 2, 7], function name(num) {
  return num < 7;
});
console.log(allAreLessThanSeven);
function all(array, callback) {
  if (array.length == 0) {
    return true;
  }
  if (callback(array[0])) {
    array.splice(0, 1);
    return all(array, callback);
  } else {
    return false;
  }
}

function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

