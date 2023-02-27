for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

/* 
1> as 'let' has block scope so current value which 'i' takes can be 0,1,2 so it prints 0,1,2
*/