let name = "sidhu";

function getName() {
  console.log(name);
  let name = "anil";
}
getName();

/*
1> this will throw ReferenceError as we are trying to access name before initialization
due to hoisting and declaring using let  
 */
