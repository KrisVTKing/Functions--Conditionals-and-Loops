function factorial(n) {
  if (typeof n !== "number") {
    throw new TypeError("Input must be a number");
  }

  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 1;
  } else if (n > 15) {
    return Infinity;
  }

  function calculateFactorial(num) {
    return num === 1 ? 1 : num * calculateFactorial(num - 1);
  }

  return calculateFactorial(n);
}

console.log(factorial(-1));
console.log(factorial(0));
console.log(factorial(5));
console.log(factorial(16));
