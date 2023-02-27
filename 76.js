function sayHi1() {
  return () => 0; 
}
console.log(typeof sayHi1()); // O/P:- function

function sayHi2() {
  return () => 0; 
}
console.log(typeof sayHi2()()); // O/P:- number
