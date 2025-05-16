function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply (a,b) {
    return a*b;
}
function divide (a,b){
    return a/b;
}

function calculator(a, b, operator) {
  if (operator === "substract")
  {
    return substract(a,b);
  }
  if (operator === "multiply")
  {
    return multiply(a,b);
  }
  if (operator === "divide")
  {
    return divide(a,b);
  }
  if (operator === "add")
  {
    return add(a,b);
  }

    return "Invalid operator";


}
const result= calculator(10, 5, "divide");
console.log(result);