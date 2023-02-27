const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third')

bar();
foo();
baz();

// Here O/P depends on order or way in which function is called