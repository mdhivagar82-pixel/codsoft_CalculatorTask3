const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            currentInput = '';
            display.textContent = '0';
        } else if (value === 'DEL') {
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput || '0';
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
                display.textContent = currentInput;
                resultDisplayed = true;
            } catch {
                display.textContent = 'Error';
                currentInput = '';
            }
        } else {
            if (resultDisplayed && /[0-9.]/.test(value)) {
                currentInput = value;
                resultDisplayed = false;
            } else {
                currentInput += value;
            }
            display.textContent = currentInput;
        }
    });
});