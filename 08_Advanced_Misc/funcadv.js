const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 },
]

// const func = users.map((x) => {
//       return x.firstName + " " +x.lastName;
// })
// console.log(func);
const output = users.reduce((acc,user) => {
     if(acc[user.age])
     {
       acc[user.age] += 1;
     }
     else
      {
      acc[user.age] = 1;
     }
     return acc;
}, {});
console.log(output);
