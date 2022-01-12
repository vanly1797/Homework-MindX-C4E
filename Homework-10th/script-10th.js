// HOMEWORK01-START
let person = {
    name: 'Bob',
    occupation: 'web developer',
    hobbies: 'painting',
};

console.log(person.name);
console.log(person.occupation);
console.log(person.hobbies);

console.log(person);


console.log(person["occupation"]);
console.log(person["name"]);

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

for (let key in person) {
    console.log(key);
    console.log(person[key]);
}
// HOMEWORK01-END

// HOMEWORK02-START
let obj = {
    b: 2,
    a: 1,
    c: 3,
};

let ar = Object.keys(obj);

let upperCase = ar.map(ar => ar.toUpperCase());

console.log(upperCase);
// HOMEWORK02-END

// HOMEWORK04-START
let obj2 = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
};
// HOMEWORK04-END