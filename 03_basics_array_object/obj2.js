const tinderUser = {}

tinderUser.name = "Sourish"
tinderUser.id = 12345
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName: {
            firstName : "Sourish",
            lastname : "Mukherjee"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}
const obj3 = {5: "a",6: "b"}

// const obj4 = {obj1, obj2, obj3}

// const obj4 = Object.assign({}, obj1, obj2, obj3)

// const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const arryObj = [
    {
        id : 1,
        name : "Ajay"
    },
     {
        id : 2,
        name : "Bijay"
    },
     {
        id : 1,
        name : "Sujay"
    },
]

// console.log(arryObj[0])

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogg'));