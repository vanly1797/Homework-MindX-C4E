// EXERCISE 01 - START
const operator = prompt("Nhập vào phép tính (+, -, *, /): ");
let result;
let _number1 = parseFloat(prompt("Nhập vào số thứ nhất: "));
let _number2 = parseFloat(prompt("Nhập vào số thứ hai: "));

// use switch
switch (operator) {
    case "+":
        result = _number1 + _number2;
        console.log("Kết quả: " + `${_number1} ${operator} ${_number2} = ${result}`);
        break;
    case "-":
        result = _number1 - _number2;
        console.log("Kết quả: " + `${_number1} ${operator} ${_number2} = ${result}`);
        break;
    case "*":
        result = _number1 * _number2;
        console.log("Kết quả: " + `${_number1} ${operator} ${_number2} = ${result}`);
        break;
    case "/":
        result = _number1 / _number2;
        console.log("Kết quả: " + `${_number1} ${operator} ${_number2} = ${result}`);
        break;
    default:
        alert("Bạn đã nhập sai phép tính");
        break;
}

// use if...else
// if (operator != "+" && operator != "-" && operator != "*" && operator != "/") {
//     alert("Bạn đã nhập sai phép tính");
// } else {
//     if (operator == "+") {
//         result = _number1 + _number2;
//         console.log("Kết quả: " + `${_number1} ${operator} ${_number2} = ${result}`);
//     } else if (operator == "-") {
//         result = _number1 - _number2;
//         console.log("Kết quả: " + `${_number1} ${operator} ${_number2} = ${result}`);
//     } else if (operator == "*") {
//         result = _number1 * _number2;
//         console.log("Kết quả: " + `${_number1} ${operator} ${_number2} = ${result}`);
//     } else {
//         result = _number1 / _number2;
//         console.log("Kết quả: " + `${_number1} ${operator} ${_number2} = ${result}`);
//     }
// }
// EXERCISE 01 - END

// EXERCISE 02 - START
const _number = parseInt(prompt("Nhập vào một số: "));
let _isPrime = true;
if (_number < 2) {
    _isPrime = false;
} else if (_number == 2) {
    _isPrime = true;
} else {
    if (_number % 2 == 0) {
        _isPrime = false;
    } else {
        for (let i = 3; i < (_number - 1); i += 2) {
            if (_number % i == 0) {
                _isPrime = false;
            }
        }
    }
}

if (_isPrime == true) {
    console.log(`${_number} là số nguyên tố`);
} else {
    console.log(`${_number} không phải là số nguyên tố`);
}
// EXERCISE 02 - END