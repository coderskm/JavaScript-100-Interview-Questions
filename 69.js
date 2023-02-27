const obj = { 1: 'a', 2: 'b', 3: 'c' };
console.log(obj.hasOwnProperty('1'))
console.log(obj.hasOwnProperty(1))

// in object key can be number or string so both values ie '1' and 1 works perfectly for hasOwnProperty() 