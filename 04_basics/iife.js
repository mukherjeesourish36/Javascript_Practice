// var count = 10;

// function doSomething() {
//   count = 20; // local box
//   console.log(count); // prints 20 (local only)
// }

// doSomething();
// console.log(count); // prints 10 (global unchanged)

(function chai()
{
    console.log("hmm!! the chai is good in taste")
})();

( (name) => {
   console.log(`hmm!! I am ${name}, the coffee is good in taste`)
})("Sourish")