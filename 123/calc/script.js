let a = '';
let b = '';
let c = '';
let finish = false;

const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', 'e'];
const oper = ['-', '+', '*', '/'];

const scr = document.querySelector('.screen p');

function clear() {
    a = '';
    b = '';
    c = '';
    finish = false;
    scr.textContent = 0;
}
//считываем что нажали
document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    document.querySelector('.clear').onclick = clear;
    scr.textContent = '';
    const key = event.target.textContent;
//ввод числа
    if (number.includes(key)) {
        if (c =='' && b == '') {
            if (key === '.' && a.includes('.')) {
                scr.textContent = a;    
            } else if (key === '.' && a === '.') {
                scr.textContent = a;
            } else {
            a+=key;
            scr.textContent = a;
            }
        }
        else {
            if (key === '.' && b.includes('.')) {
                scr.textContent = b;    
            } else {
            b+=key;
            scr.textContent = b;
            }
        }
        console.log(a, c, b);
        return
    }


// ввод знака
    if (oper.includes(key)) {
        c = key;
        b = '';
        console.log(a, c, b);
        scr.textContent = c;
        return;
    }

    if (key === '=') {
        if (b === '') b = a;
        switch (c) {
            case '+':
                a = (+a) + (+b);
                break
            case '-':
                a = a-b;
                break;
            case '*':
                a = a*b;
                break;
            case '/':
                if (b === '0') {
                    scr.textContent = 'Error :)';
                    return
                }
                a = a/b;
                break;
        }
        finish = true;
        scr.textContent = a;
        console.log(a, c, b)
    }
}