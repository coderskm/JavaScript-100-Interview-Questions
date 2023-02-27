let data = [1, 2, 3].map(num => {
  if (typeof num === "number") return; // because of the empty return statement we get array :- [undefined,undefined,undefined]
  return num * 2;
})

console.log(data)