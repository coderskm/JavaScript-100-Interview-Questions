(() => {
  let x = y = 10;
})();

console.log(typeof y); // we get 'number' as output because while declaring 'y' it gets 'var' declaration which is global-scoped
