let currentExpression = '';

function appendNumber(number) {
    currentExpression += number;
    document.getElementById('result').value = currentExpression;
}

function appendOperator(operator) {
    currentExpression += ` ${operator} `;
    document.getElementById('result').value = currentExpression;
}

function calculateResult() {
   
        currentExpression = eval(currentExpression.replace('÷', '/').replace('×', '*'));
        document.getElementById('result').value = currentExpression;
    
}

function clearResult() {
    currentExpression = '';
    document.getElementById('result').value = '';
}