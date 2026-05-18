const radius = [3, 1, 2, 4];

const area = function (radius){
  return Math.PI * radius * radius;
};

const circum = function (radius){
  return 2 * Math.PI * radius;
};

const dia = function (radius){
  return 2 * radius;
};

const calculate = function (radius,logic) {
 const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]))
  }
  return output;
};

console.log(calculate(radius,area));
console.log(calculate(radius,circum));
console.log(calculate(radius,dia));

// const calculateArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i])
//   }
//   return output;
// };

// console.log(calculateArea(radius));

// const calculateCircum = function (radius) {
//   const output = [];
//   for(let i = 0; i < radius.length; i++)
//   {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };

// console.log(calculateCircum(radius));

// const calculateDia = function (radius) {
//   const output = [];
//   for(let i = 0; i < radius.length; i++)
//   {
//     output.push(2 * radius[i]);
//   }
//   return output;
// };

// console.log(calculateDia(radius));


