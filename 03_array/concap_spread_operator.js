let marvel_heroes = ["Captain America","Thor","Iron Man"]
let dc_heroes = ["Flash","Superman","Batman"]

let all_heroes = marvel_heroes.concat(dc_heroes);

//console.log(all_heroes);

let all_Heroes = [...marvel_heroes,...dc_heroes];
console.log(all_Heroes);