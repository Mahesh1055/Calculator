let currentInput = '';
let currentTheme = 'dark-theme';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('result').value = currentInput;
}

function appendOperator(operator) {
    if (currentInput.length > 0) {
        const lastChar = currentInput.charAt(currentInput.length - 1);
        if (/\d|\)$/g.test(lastChar)) { // Allow operator after number or closing parenthesis
            currentInput += ' ' + operator + ' ';
            document.getElementById('result').value = currentInput;
        }
    }
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        document.getElementById('result').value = currentInput;
    }
}

function appendParenthesis(parenthesis) {
    if (parenthesis === '(') {
        // Can add opening parenthesis if it's the first character or after an operator
        if (currentInput === '' || /[\+\-\*\/\(\)]/.test(currentInput.charAt(currentInput.length - 1))) {
            currentInput += parenthesis;
        }
    } else if (parenthesis === ')') {
        // Can add closing parenthesis only if there's an opening parenthesis
        const openCount = (currentInput.match(/\(/g) || []).length;
        const closeCount = (currentInput.match(/\)/g) || []).length;
        if (openCount > closeCount) {
            currentInput += parenthesis;
        }
    }
    document.getElementById('result').value = currentInput;
}

function clearResult() {
    currentInput = '';
    document.getElementById('result').value = currentInput;
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('result').value = currentInput;
}

function calculate() {
    try {
        // Evaluate the expression with parentheses
        currentInput = eval(currentInput).toString();
        document.getElementById('result').value = currentInput;
    } catch (e) {
        document.getElementById('result').value = 'Error';
        currentInput = '';
    }
}

function toggleTheme() {
    if (currentTheme === 'dark-theme') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        currentTheme = 'light-theme';
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        currentTheme = 'dark-theme';
    }
}
