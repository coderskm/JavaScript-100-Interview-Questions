let person = { name: "peter" };
const members = [person];
person = null;
console.log(members);

// in this an array has object stored inside it at different location that's why when we make object null then it stores null at object's original location not on array's location