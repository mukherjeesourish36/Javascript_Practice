const promiseOne = new Promise(function(resolve,reject){
       setTimeout(function() {
             console.log("This is task 1");
             resolve();
       },1000);
});

promiseOne.then(function(){
     console.log("Promise 1 consumed..");
});

new Promise(function(resolve,reject){
       setTimeout(function() {
             console.log("This is task 2");
             resolve();
       },1000);
}).then(function(){
    console.log("Promise 2 consumed..");
});


const promiseThree = new Promise(function(resolve,reject){
       setTimeout(function() {
             console.log("This is task 3");
             resolve({name:"Sourish",email:"skm@example.com"});
       },1000);
});

promiseThree.then(function(obj){
   console.log(obj);
   console.log("Promise 3 consumed..");
});


const promiseFour = new Promise(function(resolve,reject){
       setTimeout(function() {
             let error = false;
             if(!error)
             {
                   console.log("This is task 4");
                  resolve({name:"Oscar",email:"oscar@example.com"});
             }else{
                reject("this is an error");
             }
             
       },1000);
});

promiseFour.then(function(usr){
   console.log(usr)
   return usr.email;
}).then(function(email){
    console.log(email);
}).catch(function(err){
    console.log(err);
}).finally(()=>{
    console.log("promise either kept or rejected...");
});


const promiseFive = new Promise(function(resolve,reject){
       setTimeout(function() {
             let error = true;
             if(!error)
             {
                   console.log("This is task 5");
                  resolve({name:"Alex",email:"alex@example.com"});
             }else{
                reject("this is an error");
             }
             
       },1000);
});


async function promiseFiveFunc() {
    try {
        const response = await promiseFive;
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}

promiseFiveFunc();