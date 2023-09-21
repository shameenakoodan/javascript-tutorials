function myFunction() {
  //document.getElementById("demo0").innerHTML = 6<7;
  document.getElementById("demo0").innerHTML = 4 + 7;
  document.getElementById("demo1").innerHTML = 7 - 4;
  document.getElementById("demo2").innerHTML = 4 * 7;
  document.getElementById("demo3").innerHTML = 16 / 8;
  document.getElementById("demo4").innerHTML = 5 % 3;
}
function myFunction2() {
  let number = 3;
  document.getElementById("demo0").innerHTML = number === 3;
  document.getElementById("demo1").innerHTML = 10 < 5;
  document.getElementById("demo2").innerHTML = 78 >= 90;
  document.getElementById("demo3").innerHTML = 56 <= 44;
  document.getElementById("demo4").innerHTML = 10 == 10;
  document.getElementById("demo4").innerHTML = 10 != 10;
}
function logicalFunction() {
  document.getElementById("demo0").innerHTML = 3 > 2 && 6 == 6;
  document.getElementById("demo1").innerHTML = 3 > 2 && 6 == 7;
  document.getElementById("demo2").innerHTML = 3 > 2 || 6 == 6;
  document.getElementById("demo3").innerHTML = 3 > 2 || 6 == 7;
  document.getElementById("demo4").innerHTML = !(3 < 2 && 6 != 6);
}
function ifStatementFunction() {
  let number = 14;
  if (number > 25) {
    document.getElementById("demo1").innerHTML = number;
  } else {
    document.getElementById("demo1").innerHTML =
      number + " is not greater than 25";
  }
}
function ifElseStatementFunction() {
  let ch = "A";
  let index = 0;
  let number = ch.charCodeAt(index);
  if (number == 0)
    document.getElementById("demo0").innerHTML = number + " is equal to 0";
  else if (number > 0)
    document.getElementById("demo0").innerHTML = number + " is greater than 0";
  else if (number < 0)
    document.getElementById("demo0").innerHTML = number + " is less than 0";
}
function switchFunction() {
  let x = 5;
  let y = 4;
  let operand = "+";
  var result;
  switch (operand) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = x / y;
      break;
    case "%":
      result = x % y;
      break;
    default:
      result = "Invalid operand";
  }
  document.getElementById("demo0").innerHTML =
    x + " " + operand + " " + y + " = " + result;
}
function testWhileLoopFunction() {
  const RATE = 5;
  const INITIAL_BALANCE = 10000;
  const TARGET = 2 * INITIAL_BALANCE;
  let balance = INITIAL_BALANCE;
  let year = 0;
  while (balance < TARGET) {
    let interest = (balance * RATE) / 100;
    balance = balance + interest;
    year++;
  }
  document.getElementById("demo0").innerHTML =
    "The investment doubled after " +
    year +
    " years" +
    " Balance: " +
    balance.toFixed(2);
}
function testforLoopFunction() {
  for (let index = 10; index >= 0; --index) {
    document.write(index + "<br>");
  }
  document.write("edqweqw");
}
function testDoWhileLoop() {
  let number = prompt("Enter number less than 10");
  number = parseInt(number);
  do {
    document.write("Printing ... "+number + " <br>");
    number++;
  } while (number<10);
}
