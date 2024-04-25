let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('result').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('result').value = '';
}

let isCalculationDone = false;

function calculateResult() {
    try {
        if (!isCalculationDone) {
            let result = eval(displayValue);
            document.getElementById('result').value = result;
            displayValue = result.toString();
            isCalculationDone = true;
        }
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('result').value = displayValue;
}

function appendToDisplay(value) {
    // Check if the input is zero and the display value is already zero
    if (value === '0' && displayValue === '0') {
        return;
    }

    // Reset the flag if a non-zero value or a decimal point is pressed
    if (value.match(/[1-9.]/)) {
        isCalculationDone = false;
    }

    displayValue += value;
    document.getElementById('result').value = displayValue;
}
