const mySym = Symbol();

const jsUser = {
    name: "Sourish",
    "full name":"Sourish Mukherjee",
    age: 35,
    location: "Kolkata",
    email: "skm@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Sunday","Tuesday"],
    [mySym]: "MyKey1"
}

// console.log(jsUser["email"]);
// console.log(jsUser.email);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// console.log(typeof mySym);

// jsUser.age=30;
// console.log(jsUser)
// Object.freeze(jsUser)
// jsUser.age=34;
// console.log(jsUser)

jsUser.greetings = function(){
    console.log("Hello JS user")
}

jsUser.greetingsTwo = function(){
    console.log(`Hello JS user..Your name is ${this.name}`)
}

console.log(jsUser.greetings())
console.log(jsUser.greetingsTwo())