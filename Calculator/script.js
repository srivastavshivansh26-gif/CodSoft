// Get the display element once
let display = document.getElementById('display');

// Function to add numbers and operators to the display
function append(value) {
    if (display.value === 'Error') {
        display.value = ''; // Clear error on new input
    }
    display.value += value;
}

// Function to clear the entire display
function clearDisplay() {
    display.value = '';
}
//Function to clear one digit
    function deleteLast() {
    display.value=
    display.value.slice(0,-1);
    }

// Function to calculate the result
function calculate() {
    try {
        // Use the built-in eval() function to calculate the expression
        // In a real project, eval() is dangerous, but for a simple project, it's the easiest way.
        let result = eval(display.value);
       
        // Fix for floating-point issues (e.g., 0.1 + 0.2)
        if (result && result % 1 !== 0) {
            result = parseFloat(result.toFixed(5));
        }

        display.value = result;
    } catch (e) {
        // Show "Error" if the expression is invalid (like 5 + /)
        display.value = 'Error';
    }
}