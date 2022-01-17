// HOMEWORK01-START

// const setBg = () => {
//         const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//         document.body.style.backgroundColor = "#" + randomColor;
//     }

function changeColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}
// HOMEWORK01-END

// HOMEWORK02-START
let valueUpdate = document.getElementById("btn");
let temp = parseInt(valueUpdate.value);

function updateValue() {
    temp = temp + 1;
    valueUpdate.innerHTML = temp.toString();
}
// HOMEWORK02-END