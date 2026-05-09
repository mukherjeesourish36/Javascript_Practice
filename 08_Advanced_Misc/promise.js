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
})