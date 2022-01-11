// HM01 - START
function checkAge(age) {
    let check = age > 18 ? true : false;
    return check;
}

let _age = prompt("Nhập vào tuổi: ");
if (!checkAge(_age)) {
    alert("Did parents allow you? ");
}
// HM01 - END

// HM02 - START
function findMin(num1, num2) {
    let min = num1;
    min = num1 < num2 ? num1 : num2;
    return min;
}
//test
let a = parseInt(prompt("Nhập vào số a: "));
let b = parseInt(prompt("Nhập vào số b: "));
console.log(`Min 2 số (a,b) là: ${findMin(a, b)}`);
// HM02 - END

// HM03 - START
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

let yes = function agree() {
    return alert("You agreed.");
}

let no = function cancel() {
    return alert("You canceled the execution.");
}

ask(
    "Do you agree?",
    yes,
    no
);
// HM03 - END

// HM04 - START
function checkInput() {
    let resultCheck;
    let inputName = prompt("Nhập vào tên người dùng: ");
    if (inputName == "Admin") {
        let inputPass = prompt("Nhập mật khẩu người dùng: ");
        if (inputPass == "cafedev") {
            resultCheck = console.log("Chào mừng!");
        } else if (inputPass != "cafedev") {
            resultCheck = console.log("Mật khẩu sai");
        } else {
            resultCheck = console.log("Đã hủy");
        }
    } else if (inputName == null || inputName == "") {
        resultCheck = console.log("Canceled");
    } else {
        resultCheck = console.log("Tôi không biết bạn.");
    }
    return resultCheck;
}

checkInput();
// HM04 - END