let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('result').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('result').value = '';
}

function calculateResult() {
    try {
        let result = eval(displayValue);
        document.getElementById('result').value = result;
        displayValue = '';
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
function backspace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('result').value = displayValue;
}
