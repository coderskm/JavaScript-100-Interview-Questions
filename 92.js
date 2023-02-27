function getInfo(member) {
    member.name = 'Anil';
}

const person = { name: 'Sarah' };
getInfo(person);
console.log(person); // {name:"Anil"}

// when we pass object in function in JS, it gets called by "reference"