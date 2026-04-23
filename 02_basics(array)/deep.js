let original = { 
  name: "Sourish", 
  details: { age: 25 } 
};

let deepCopy = JSON.parse(JSON.stringify(original)); // deep copy

deepCopy.details.age = 99;      
console.log(original.details.age); // 25 → original SAFE

deepCopy.name = "Sunny";      
console.log(deepCopy.name);
console.log(deepCopy.details.age);

/*In a deep copy, both the non‑nested values (like name, id, etc.) and the nested values (like details.age, arrays, 
objects inside) are duplicated into a separate copy. That’s why when you change something 
in the deep copy, the original stays intact.*/
