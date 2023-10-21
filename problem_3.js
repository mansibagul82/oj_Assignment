// Problem 3: Taking the following array into consideration get the output as given below:
let arr = [3,4,5,6,7]
let result =arr.filter((element)=>{
    return element % 2 == 1
})
let ans = result.join("-")
console.log(ans)