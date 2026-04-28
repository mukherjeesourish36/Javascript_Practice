var count = 10;

function doSomething() {
  count = 20; // local box
  console.log(count); // prints 20 (local only)
}

doSomething();
console.log(count); // prints 10 (global unchanged)
