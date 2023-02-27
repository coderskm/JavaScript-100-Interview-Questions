function sayHi() {
    return (() => 0)(); // IIFE and arrow function combination and returns 0
}
console.log(typeof sayHi());// O/P:- number