// Problem 1: Find the average of elements present at odd index of the following array.

let arr = [10, 24, 56, 72, -10, -88, 100, 564]

let odd_index= arr.filter((el,i) =>
  {
    return i % 2 === 1
  })
let sumOfOddIndexEle = odd_index.reduce((acc,currentelement,)=> acc + currentelement, 0)

let  average = sumOfOddIndexEle / odd_index.length

console.log(average)