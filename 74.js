const person = { name: 'anil' };
function sayHi(age) {
    return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));

/*
study about call and bind methods.
*/