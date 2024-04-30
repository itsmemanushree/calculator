// This function clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function displays the values
function display(value) {
    document.getElementById("result").value += value;
}

// This function removes the last character
function backspace() {
    var currentResult = document.getElementById("result").value;
    document.getElementById("result").value = currentResult.slice(0, -1);
}

// This function evaluates the expression and returns the result
function calculate() {
    var expression = document.getElementById("result").value;
    var result = eval(expression);
    document.getElementById("result").value = result;
}