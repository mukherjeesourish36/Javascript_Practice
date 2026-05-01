const num = [1,2,3,4,5,6,7,8,9,10]

// const newNum = num.filter((i) => i>4)

const newNum = num.filter((i) => {
    return i>4
})

console.log(newNum)