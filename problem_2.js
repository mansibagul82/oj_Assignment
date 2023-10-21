// Problem 2: Create a new array from the given array such that each element of the new array is raised to a power of 5.

let Input_arr = [2, 3, 4, 6, 7]
let ans = Input_arr.map(function(element){
    return element ** 5
})
console.log(ans)
