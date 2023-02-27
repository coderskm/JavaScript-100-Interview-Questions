//Q:- After applying Object.seal(), how will you modify that object?

let person = { myName: "anil" };
Object.seal(person)
console.log(person)

// after applying seal we cannot add new properties to it we can only modify the ones which are already present in it.

person.myName = "Sumit";
console.log(person)