//Solution One
function factorial(number) {
  if (number<0) {
    return "Please provide a positive integer."
  } else if (number ===1 | number ===0) {
    return 1
  } else if (number > 1){
  return number * factorial(number-1)
  }
}

console.log(factorial(-2))

//Solution Two
function second_factorial(number) {
  if (number<0) {
    return "Please provide a positive integer."
  }
  let result = 1
  for (let i=1; i<=number; i++) {
    result *=i
  }
  return result
}

console.log(second_factorial((-2)))