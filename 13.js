let data = { name: "anil", age: 29, skill: "JS" };
let info = { city: "Noida", mail: "sm412387@gmail.com" };
data = {data, ...info };
console.log(data);

/*
Output will be as follows :-
{
  data: { name: 'anil', age: 29, skill: 'JS' },
  city: 'Noida',
  mail: 'sm412387@gmail.com'
}
*/
