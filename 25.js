function sum(x, y, z) {
    return x + y + z;
}
console.log(sum(...[1, 2, 3]));

/*
Q :- How to call sum from below options so that output shown is 6 ?
a) sum([...1,2,3])
b) sum([...[1,2,3]])
c) sum(...[1,2,3])
d) sum([1,2,3])

Answer is c
*/