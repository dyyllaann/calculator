let num1;
let num2;
let operator;
let result;
let tempString = "";
let displayString = "";
let display = document.getElementById("display");

const keySwitch = function(event) {
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
};

document.addEventListener('keyup', keySwitch);

const calculatorUI = function (event) {
  target = event.target;

  // If dividing by zero, get snarky.
  function zeroCheck() {
		if (operator == "/" && num2 == 0) {
			clear();
			return (display.innerHTML = "nice try.");
		}
	}

  // Clear
  function clear() {
    operator = "";
    result = "";
    displayString = "";
    num1 = undefined;
    num2 = undefined;
    tempString = "";
    display.innerHTML = "";
  }

  // Modify and display tempString
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
  }
  
  // Commit tempString to an operand if the pressed button does not modify tempString
  if (target.classList.contains("operator") || target.id == "operate") {
    if (tempString.length > 0) {
      if (isNaN(num1) && isNaN(num2)) {
        num1 = Number(tempString);
      } else if ((!isNaN(num1)) && (isNaN(num2))) {
        num2 = Number(tempString);
      }
      tempString = "";
    }
  }

  // Set operator
  if (target.classList.contains("operator")) {    
    zeroCheck();
    
    // If num1 doesn't exist but a value is displayed, set num1 to the display value.
    if (isNaN(num1) && display.innerHTML.length>0) {
      num1 = Number(display.innerHTML);
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
    zeroCheck();

    if (operator && num1 && num2) {
      display.innerHTML = operate(operator, num1, num2);
      num1 = undefined;
      num2 = undefined;
      operator = undefined;
      displayString = "";
      // displayString = num1;
    }
	} 
  
  if (target.id == "clear") {
    clear();
	}
};

function operate(operator, num1, num2) {
	switch (operator) {
		case "+":
			return num1 + num2;
		case "-":
			return num1 - num2;
		case "x":
			return num1 * num2;
		case "/":
			return num1 / num2;
	}
}

document.addEventListener('click', calculatorUI);

function check() {
  console.log(`num1: ${num1}`);
  console.log(`num2: ${num2}`);
  console.log(`operator: ${operator}`);
  console.log(`result: ${result}`);
  console.log(`tempString: ${tempString}`);
  console.log(`displayString: ${displayString}`);
}