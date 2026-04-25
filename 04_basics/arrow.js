const user = {
    username : "Sourish",
    place : "Kolkata",
    welcomeMessage : function(){
     console.log(`${this.username}, is from ${this.place}`)
    }
}

user.welcomeMessage()
user.username = "Tripti"
user.welcomeMessage()