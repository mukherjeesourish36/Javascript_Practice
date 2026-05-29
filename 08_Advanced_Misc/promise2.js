const cart = ["shorts","pants","kurtas"];

const promise = createOrder(cart)

promise
.then(function(orderid){
   console.log(orderid);
   return orderid;
})
.then(function(orderid){
    return proceedtoPayment(orderid);
})
.then(function(paymentInfo)
{
  console.log(paymentInfo);
})
.catch(function(err){
   console.log(err.message);
});

function createOrder(cart){

    const pr = new Promise(function (resolve,reject){
     
    if(!validateCart(cart))
    {
        const err = new Error("The cart is not valid");
        reject(err);
    }    
    else{
        const orderid = "12345";
        setTimeout(function(){
         resolve(orderid);
        },5000)
       
    }

    });
   
    return pr;
};

function proceedtoPayment(orderid)
{
    return new Promise(function(resolve,reject){
        resolve("Payment Successful...");
    });
}

function validateCart(cart)
{
    return true;
};