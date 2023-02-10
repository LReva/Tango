exports.creditCheck = function(str) {
  let strToList = str.split("")
  for (let i = 1; i< strToList.length;i+=2) {
    strToList[i] = parseInt(strToList[i])
  }
  for (let i = 0; i< strToList.length;i+=2) {
    newInt = parseInt(strToList[i]) * 2
    if (newInt > 9) {
    newInt = newInt % 10 + 1
    }
    strToList[i] = newInt
  }
  sumDigits = strToList.reduce((total,current)=> total + current)
  if (sumDigits % 10 === 0) {
    return "The number is valid!"
  } else {
    return "The number is invalid!"
  }
}
