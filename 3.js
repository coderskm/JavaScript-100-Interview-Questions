let a = [20];
let b = [20];
console.warn(a[0] == b[0])
console.warn(a[0] === b[0])

/*
1> here data present at index 0 is getting evaluated (not memory location) whether its same or not in 
arrays a & b so both the console statements print true
 */
