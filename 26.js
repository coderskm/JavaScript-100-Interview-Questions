const str = 'code step by step';
console.log(!typeof str === 'object')
console.log(!typeof str === 'string')

/*
1> Both console statement gives output as false.
2> Based on priority of operators first ! will execute then === from left to right
3> as we are using ! first its already negating the whole expression ie ! typeof str so 
comparing it with anything will result in false only except 'false'
4> ie !typeof str === 'false will print true value
*/
