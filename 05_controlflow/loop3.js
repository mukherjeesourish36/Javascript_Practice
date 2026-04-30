// const num = [1, 2, 3, 4, 5]

// for (const i of num) {
//     console.log(i)
// }

// const name = "Hello Sourish"

// for (const n of name) {
//     console.log(`each character is ${n}`)
//     console.log("n")
// }

const countries = new Map()

countries.set("IN","India")
countries.set("UK","United Kingdom")
countries.set("RUS","Russia")
countries.set("IL","Israel")

// console.log(countries.get("IN"))
// console.log(countries.get("RUS"))

// console.log(countries.has("IN"))
// console.log(countries.has("PAK"))

// console.log(countries.size)

// countries.delete("UK")

// for (const [key,value] of countries) {
//     console.log(`${key} => ${value}`)
// }

const user1 = {"id":1}
const user2 = {"id":2}

const s = new Map()

s.set(user1, "Sourish")
s.set(user2, "Sanjit")

console.log(s.get(user1))
