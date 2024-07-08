function factorial(n) {
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 1;
  } else if (n > 15) {
    return Infinity;
  } else {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

function calculateFactorial() {
  const input = document.getElementById("numberInput").value;
  const n = parseInt(input, 10);
  const result = factorial(n);
  console.log(`The factorial of ${n} is ${result}`);
}
