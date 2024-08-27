let isHorizontal = false;

function rotateCalculator() {
    const frame = document.getElementById('phone-frame');
    const calculator = document.getElementById('calculator');
    isHorizontal = !isHorizontal;
    
    if (isHorizontal) {
        frame.classList.add('horizontal');
        calculator.classList.add('horizontal');
    } else {
        frame.classList.remove('horizontal');
        calculator.classList.remove('horizontal');
    }
}

function clearScreen() {
    document.getElementById('screen').innerText = '0';
}

function number(num) {
    const screen = document.getElementById('screen');
    if (screen.innerText === '0') {
        screen.innerText = num;
    } else {
        screen.innerText += num;
    }
}

function operator(op) {
    const screen = document.getElementById('screen');
    screen.innerText += ' ' + op + ' ';
}

function decimal() {
    const screen = document.getElementById('screen');
    if (!screen.innerText.includes('.')) {
        screen.innerText += '.';
    }
}

function calculate() {
    const screen = document.getElementById('screen');
    try {
        screen.innerText = eval(screen.innerText.replace(/÷/g, '/').replace(/×/g, '*'));
    } catch (e) {
        screen.innerText = 'Error';
    }
}

function toggleSign() {
    const screen = document.getElementById('screen');
    if (screen.innerText.startsWith('-')) {
        screen.innerText = screen.innerText.substring(1);
    } else {
        screen.innerText = '-' + screen.innerText;
    }
}

function percent() {
    const screen = document.getElementById('screen');
    screen.innerText = (parseFloat(screen.innerText) / 100).toString();
}
