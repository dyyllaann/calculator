let num1;
let num2;
let operator;
let tempString = "";
let display = document.getElementById("display");

document.body.onclick = function (event) {
	let target = event.target;

	if ((!isNaN(target.id) && (target.id != "operate"))) {
    if (num1 == undefined) {
      tempString += target.id;
      display.innerHTML += tempString;
      console.log(tempString);
    } else {
      tempString += target.id;
      display.innerHTML += tempString;
      console.log(tempString);
    }
  } else if ((isNaN(target.id) && (target.id != "operate"))) {
    num1 = Number(tempString);
    tempString = "";
    operator = target.innerHTML;
    display.innerHTML += operator;
  }
  else {
    num2 = Number(tempString);
    console.log(operate( operator, num1, num2 ));

    // Reset variables
    tempString = "";
    num1 = "";
    num2 = "";
  }
};

function Calculator( num1, num2 ) {

  const add = function ( num1, num2 ) {
    return ( num1 + num2 );
  };

  const subtract = function ( num1, num2 ) {
    return ( num1 - num2 );
  };

  const multiply = function ( num1, num2 ) {
    return ( num1 * num2 );
  };

  const divide = function ( num1, num2 ) {
    return ( num1 / num2 );
  };

  return { add, subtract, multiply, divide };
}

function operate( operator, num1, num2 ) {
  switch (operator) {
    case "+":
      return Calculator().add(num1,num2);
    case "-":
      return Calculator().subtract(num1,num2);
    case "x":
      return Calculator().multiply(num1,num2);
    case "*":
      return Calculator().multiply(num1,num2);
    case "/":
      return Calculator().divide(num1,num2);
  }
}

function ui () {
  if (!num1) {
    return num1 = this.value;
  } else {
    return num2 = this.value;
  }
}

// Test Calculator() function:
// console.log(Calculator().add(5, 10)); // 15
// console.log(Calculator().subtract(5, 10)); // -5
// console.log(Calculator().multiply(5, 10)); // 50
// console.log(Calculator().divide(5,10)); // 0.5

// Test operate() function:
// console.log(operate("+", num1,num2)); // 15
// console.log(operate("-", num1,num2)); // -5
// console.log(operate("x", num1,num2)); // 50
// console.log(operate("*", num1,num2)); // 50
// console.log(operate("/", num1,num2)); // 0.5

// num1 = 5;
// num2 = 10;

// operator = "+";
// console.log(operate(operator,num1,num2)); // 15
// operator = "-";
// console.log(operate(operator,num1,num2)); // -5
// operator = "x";
// console.log(operate(operator,num1,num2)); // 50
// operator = "*";
// console.log(operate(operator,num1,num2)); // 50
// operator = "/";
// console.log(operate(operator,num1,num2)); // 0.5