let name = "Sourish"
let repoCount = 50

// console.group(`Hello my name is ${name} and my repo count is ${repoCount}`)

let stringName = new String("Sourish")
// console.log(stringName.length)
// console.log(stringName[0])
// console.log(stringName.toUpperCase())
// console.log(stringName.charAt(4))
//console.log(stringName.indexOf("i"))

const newString = stringName.substring(0,4)
//console.log(newString)

const modString = stringName.slice(-6,4)
//console.log(modString)

const newName = "   Sourish   ";
// console.log(newName);
// console.log(newName.trim());

const url="http://sourish.com/sourish%20mukherjee"
// console.log(url.replace('%20','+'));

// console.log(url.includes('krish'));

const n="sourish-dot-com"
console.log(url.split('-'))