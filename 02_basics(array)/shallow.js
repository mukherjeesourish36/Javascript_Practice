let original = { 
  name: "Sourish", 
  details: { age: 25 } 
};

let shallowCopy = { ...original }; // shallow copy

shallowCopy.name = "Changed";      
console.log(original.name); // "Sourish" → safe

shallowCopy.details.age = 99;      
console.log(original.details.age); // 99 → original ALSO changed!


/* In a shallow copy:

You can change non‑nested values (like name, id, etc.) → those changes affect only the copy, the original stays the same.

You can also change nested values (like details.age, arrays, objects inside) → but since the nested object is shared, the change affects both the original and the copy.
 */