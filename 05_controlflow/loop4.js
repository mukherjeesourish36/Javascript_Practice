const prog = ["Java","C","C#","JS"]

// prog.forEach(function fun(i) {
//     console.log(i)
// })

// prog.forEach((i) => {
//     console.log(i)
// })

function printMe(item) {
  console.log(item);
}

prog.forEach(printMe);
