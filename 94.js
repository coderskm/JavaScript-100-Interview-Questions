(() => {
    let x = (y = 10);
})();

console.log(typeof x); // x is block-scoped so it will give O/P as 'undefined'