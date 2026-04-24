let marvel_heroes = ["Captain America","Thor","Iron Man"]
let dc_heroes = ["Flash","Superman","Batman"]

let all_heroes = marvel_heroes.concat(dc_heroes);

//console.log(all_heroes);

let all_Heroes = [...marvel_heroes,...dc_heroes];
// console.log(all_Heroes);

let demoArray = [1,2,[3,4],[5,[6,7],8,[9,10,11]]]

let flatArray = demoArray.flat(Infinity);

// console.log(flatArray)

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"}))

// console.log(Object.keys({name: "hitesh"}))  // ["name"]
// console.log(Object.values({name: "hitesh"})) // ["hitesh"]
// console.log(Object.entries({name: "hitesh"}))// [["name", "hitesh"]]

let score1 = 100
let name = "Sourish"
let details = {
    "id": "11",
    "name": "Dilip"
}
console.log(Array.of(score1,name,details))

