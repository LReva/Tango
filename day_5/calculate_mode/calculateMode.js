//The method `calculate_mode` will take a list of numbers or strings as its input and return a list of the most frequent values.

const calculateMode = (lst) => {
  if (lst.length === 0) {
    return []
  }
  let dictLst = {}
  let result = []
  for (let i of lst) {
    if (i in dictLst) {
      dictLst[i]++
    } else {
      dictLst[i]=1
    }
  }
  let count_list = Object.values(dictLst)
  let modeMax = Math.max(...count_list)
  for (let key of Object.keys(dictLst)) {
    if (dictLst[key] == modeMax) {
      if (isNaN(key)){
      result.push(key)
      } else {
        result.push(Number(key))}
    }
  } return result
}

console.log(calculateMode([1,2,3,3]))
console.log(calculateMode([4.5, 0, 0]))       
console.log(calculateMode([1.5, -1, 1, 1.5])) 
console.log(calculateMode([1,1,2,2]))         
console.log(calculateMode([1,2,3]))     
console.log(calculateMode(["who", "what", "where", "who"])) 