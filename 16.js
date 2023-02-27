const result = false || {} || null;
console.log(result);

/**
1> if there are multiple condition in OR operation then the first true value
is returned and OR operation stops there only and furthur expressions are not calculated even if they are true.
2> Output is {} 
 */