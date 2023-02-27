let a = 2;
setTimeout(() => {
    console.log(a);
}, 0);

a = 100;

// as setTimeout is asynchronous operation so its execution happens at end so by that time value of 'a' becomes 100 so console.log(a) inside setTimeout will display 100