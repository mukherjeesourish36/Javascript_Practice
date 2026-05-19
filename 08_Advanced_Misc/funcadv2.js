const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 },
];

const ageGrouped = users.reduce((acc,user) => {
   if(acc[user.age])
   {
      acc[user.age].push(user);
   }
   else
   {
      acc[user.age] = [user];
   }

   return acc;
}, {})

console.log(ageGrouped);