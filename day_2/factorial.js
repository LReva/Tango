//Solution One
function factorial(number) {
  if (number<0) {
    return "Please provide a positive integer."
  } else if (number ===1 | number ===0) {
    return 1
  } else if (number > 1){
  return (BigInt(number) * BigInt(factorial(number-1))).toString().replace("n", "")
  }
}

console.log(factorial(8))
console.log(factorial(18))
console.log(factorial(45))

//Solution Two
function second_factorial(number) {
  if (number<0) {
    return "Please provide a positive integer."
  }
  let result = BigInt(1)
  for (let i=1; i<=number; i++) {
    result *= BigInt(i)
  }
  return result.toString().replace("n", "")
}

console.log(second_factorial(8))
console.log(second_factorial(18))
console.log(second_factorial(45))