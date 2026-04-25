// const user = {
//     username : "Sourish",
//     place : "Kolkata",
//     welcomeMessage : function(){
//      console.log(`${this.username}, is from ${this.place}`)
//      console.log(this)
//     }
// }

// // user.welcomeMessage()
// // user.username = "Tripti"
// // user.welcomeMessage()

// console.log(this)

function chai()
{
    // let username = "Sourish"
    username = "Sourish"
    console.log(this.username)
    console.log(this)
}

chai()