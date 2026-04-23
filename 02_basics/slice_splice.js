let cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
let newCars = cars.slice(1, 4);

console.log(cars);     // ['Benz','Innova','Breeza','Etios','Dzire']
console.log(newCars);  // ['Innova','Breeza','Etios']

/*Purpose: Extracts a portion of an array into a new array.

Does not modify the original array.

Syntax: array.slice(start, end)

start → index to begin (inclusive)

end → index to stop (exclusive)*/