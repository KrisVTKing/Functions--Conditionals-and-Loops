function camelCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase())
    .replace(/^\w/, (chr) => chr.toLowerCase());
}

function displayCamelCase() {
  const inputStr = document.getElementById("inputStr").value;
  const result = camelCase(inputStr);
  document.getElementById("result").innerText = result;
  console.log(result);
}

console.log(camelCase("hello world"));
console.log(camelCase("make_this_camel_case"));
console.log(camelCase("camel case string"));
