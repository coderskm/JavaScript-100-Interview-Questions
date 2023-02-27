for (var i = 0; i < 3; i++){
    setTimeout(() => console.log(i), 1);
}

/* 
1> as 'var' has global scope and final value which 'i' takes is 3 so it prints 3
*/