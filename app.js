let num1;
let num2;
let operator;
let result;
let tempString = "";
let displayString = "";
let display = document.getElementById("display");

document.body.onclick = function (event) {
  let target = event.target;
  if (target.id == "backspace") {
    tempString = tempString.substring(0, tempString.length - 1);
    display.innerHTML = displayString + tempString;
  } else if (target.classList.contains("num")) {
    tempString += target.id;
    display.innerHTML = displayString + tempString;
  } else {
    if (isNaN(num1) && isNaN(num2) && (tempString.length > 0)) {
      num1 = Number(tempString);
    } else if ((!isNaN(num1)) && (isNaN(num2)) && (tempString.length > 0)) {
			num2 = Number(tempString);
		}
    tempString = "";
  }
  
  if (target.classList.contains("operator")) {
    if (operator == "/" && num2 == 0) {
      clear();
      display.innerHTML = "nice try.";
    }  
    
    if (!isNaN(num1) && !isNaN(num2)) {
      let n = operate(operator, num1, num2);
      num1 = n;
      num2 = undefined;
    }

    if (num1) {
      operator = target.innerHTML;
      display.innerHTML = num1 + " " + operator + " ";
      displayString = display.innerHTML;
    }
	} else if (target.id == "operate") {
    if (operator && num1 && num2) {
      num1 = operate(operator, num1, num2);
      num2 = undefined;
      operator = undefined;
      displayString = num1;
      display.innerHTML = displayString;
    }
	} else if (target.id == "clear") {
    clear();
	}
};

const clear = function () {
      operator = "";
			result = "";
			displayString = "";
			num1 = undefined;
			num2 = undefined;
			tempString = "";
			display.innerHTML = "";
}

function Calculator() {
	const add      = (num1, num2) => { return num1 + num2; };
	const subtract = (num1, num2) => { return num1 - num2; };
	const multiply = (num1, num2) => { return num1 * num2; };
	const divide   = (num1, num2) => { return num1 / num2; };
	return { add, subtract, multiply, divide };
}

function operate(operator, num1, num2) {
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

function check() {
  console.log(`num1: ${num1}`);
  console.log(`num2: ${num2}`);
  console.log(`operator: ${operator}`);
  console.log(`tempString: ${tempString}`);
  console.log(`displayString: ${displayString}`);
}