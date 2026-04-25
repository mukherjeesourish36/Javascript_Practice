let a = 100;
var c = 900;

if(true)
{
    let a = 10
    const b = 20
    var c = 90
    console.log("inner let variable",a)
    console.log("inner var variable",c)
}

console.log(a);
console.log(c);