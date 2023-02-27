function fruit() {
    console.log(name);
    console.log(price);
    var name = 'apple';
    let price = 20;
}

fruit();

/* 
1> as 'name' is declared using 'var' so it prints undefined.
2> as 'price' is declared using 'let' so it gives reference error. 
This happens because of hoisting
*/