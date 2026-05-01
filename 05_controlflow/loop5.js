// const num = [1,2,3,4,5,6,7,8,9,10]

// const newNumber = num.map((i) => i+10 )

// console.log(newNumber)

// const newNum = num.filter((i) => i>4)

// const newNum = num.filter((i) => {
//     return i>4
// })

// newNum = []

// num.forEach( (n) => {
//     if(n>4)
//     {
//         newNum.push(n);
//     }
// })

// console.log(newNum)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const newBooks = books.filter((bk)=> bk.genre === "History")

// const newBooks = books.filter((bk)=> bk.publish>2000 )

// const newBooks = books.filter((bk)=> {
//     return bk.publish > 2000 && bk.genre === "Science"
// } )

//   console.log(newBooks);


const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const n = num
             .map((i) => i*10)
             .map((i) => i+1)
             .filter((i) => i >= 40 )
console.log(n)