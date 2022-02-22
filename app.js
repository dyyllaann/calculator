let num1;
let num2;
let operator;
let result;
let tempString = "";
let displayString = "";
let display = document.getElementById("display");

const logit = function(event) {
  let id = event.key;
  switch (id) {
    case "Enter":
      id = "operate";
      break;
    case "+":
      id = "add";
      break;
    case "-":
      id = "subtract";
      break;
    case "*":
      id = "multiply";
      break;
    case "/":
      id = "divide";
      break;
    case "c":
      id = "clear";
      break;
    case ".":
      id = "decimal";
      break;
  }
  if (document.getElementById(id)) {
    document.getElementById(id).click();
  }
}

document.addEventListener('keyup', logit);

const calculatorUI = function (event) {
  target = event.target;
  
  

  if (target.id == "Backspace") {
    tempString = tempString.substring(0, tempString.length - 1);
    display.innerHTML = displayString + tempString;
  } else if (target.id == "decimal") {
    if (!tempString.includes(".")) {
      tempString += ".";
      display.innerHTML = displayString + tempString;
    }
  } else if (target.classList.contains("num")) {
    tempString += target.id;
    display.innerHTML = displayString + tempString;
  } else {
    if (tempString.length > 0) {
      if (isNaN(num1) && isNaN(num2)) {
        num1 = Number(tempString);
      } else if ((!isNaN(num1)) && (isNaN(num2))) {
        num2 = Number(tempString);
      }
      tempString = "";
		}
  }
  
  if (target.classList.contains("operator")) {
    if (operator == "/" && num2 == 0) {
      clear();
      display.innerHTML = "nice try.";
    }  
    
    // If both operands exist, operate
    if (!isNaN(num1) && !isNaN(num2)) {
      let n = operate(operator, num1, num2);
      num1 = n;
      num2 = undefined;
    }

    // If num1 exists, set and display operator. Otherwise, don't. 
    if (num1) {
      operator = target.innerHTML;
      displayString = num1 + " " + operator + " ";
      display.innerHTML = displayString;
    }
	} 

  
  if (target.id == "operate") {
    if (operator && num1 && num2) {
      num1 = operate(operator, num1, num2);
      num2 = undefined;
      operator = undefined;
      displayString = num1;
      display.innerHTML = displayString;
    }
	} 
  
  if (target.id == "clear") {
      operator = "";
			result = "";
			displayString = "";
			num1 = undefined;
			num2 = undefined;
			tempString = "";
			display.innerHTML = "";
	}
};

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

document.addEventListener('click', calculatorUI);

function check() {
  console.log(`num1: ${num1}`);
  console.log(`num2: ${num2}`);
  console.log(`operator: ${operator}`);
  console.log(`tempString: ${tempString}`);
  console.log(`displayString: ${displayString}`);
}