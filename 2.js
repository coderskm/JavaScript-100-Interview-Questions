let a = [];
let b = a;
console.warn(a == b);
console.warn(a === b);

/*
1> here a is initialized in b so b is pointing to same memory location where a is present
so both console statements print true
*/ 
