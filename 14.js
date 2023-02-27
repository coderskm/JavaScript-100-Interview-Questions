let data = { name: "anil", age: 29, skill: "JS" };
let info = { city: "Noida", skill: "Node" };
data = { ...data, ...info };
console.log(data);

/*
1> while merging 2 objects using destructuring the property having 
same names will get replaced in 1st object by that of 2nd object 
2> Output :- { name: 'anil', age: 29, skill: 'Node', city: 'Noida' }
*/
