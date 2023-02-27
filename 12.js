// merge 2 objects
let data = { name: "anil", age: 29, skill: "JS" };
let info = { city: "Noida", mail: "sm412387@gmail.com" };
data = { ...data, ...info }
console.log(data);

/*
1> simply destructure both of them to merge.
2> also this will work on let declared variable but not on const declared variable.
 */