(() => {
  let x = y = 10;
})();
(() => {
  let x = y = 20;
})();

console.log(y); //20

