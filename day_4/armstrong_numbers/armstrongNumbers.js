exports.findArmstrongNumbers = function(numbers) {
  let armstrongNumbers = []
  for (let num of numbers) {
    let num_string_len = num.toString().length
    let sum = 0
    for(let i of num.toString()) {
      sum += parseInt(i) ** num_string_len
    }
      if (parseInt(num) == sum) {
      armstrongNumbers.push(num)

    }
  } return armstrongNumbers
}