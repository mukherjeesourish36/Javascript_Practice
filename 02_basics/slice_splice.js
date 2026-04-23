let cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
let newCars = cars.slice(1, 4);

// console.log(cars);     // ['Benz','Innova','Breeza','Etios','Dzire']
// console.log(newCars);  // ['Innova','Breeza','Etios']

/*Purpose: Extracts a portion of an array into a new array.

Does not modify the original array.

Syntax: array.slice(start, end)

start → index to begin (inclusive)

end → index to stop (exclusive)*/

let numbers = [1, 2, 3, 4, 5];
let removed = numbers.splice(2, 2);

// console.log(numbers); // [1, 2, 5]
// console.log(removed); // [3, 4]

let fruits = ['apple', 'banana', 'cherry'];
let newFruits = fruits.splice(1, 0, 'mango', 'orange');

console.log(fruits); // ['apple','mango','orange','banana','cherry']
