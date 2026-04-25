function shoppingCart(...items)
{
   return items
}

// console.log(shoppingCart("Soap","Oil","Egg","Toys"))

const user = {
   id : 17,
   name : "Sourish",
   place : "Kolkata"
}

function userDetails(anyobject)
{
    console.log(`User's id is ${anyobject.id} whose name is ${anyobject.name} and he lives in ${anyobject.place}`)
}

userDetails(user);