let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2026, 0, 26)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2026, 0, 26, 5, 3)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("1990-07-17")
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("07-17-1990")
// console.log(myCreatedDate.toLocaleString());

// let timeStamp = Date.now();
// console.log(timeStamp);

// let myCreatedDate = new Date("1990-07-17")
// console.log(myCreatedDate.getTime());

let newDate = new Date("07-17-1990")
// console.log(newDate)
// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay())
// console.log(newDate.getDate())
console.log(newDate.toLocaleString('default', {
  weekday: "long",
  year: "numeric",
  month: "2-digit",
  day: "numeric",
  timeZoneName: "short"
}))
