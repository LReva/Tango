// Write a method that takes an integer array and a desired sum. The output will be pairs of numbers from the inputed integer array that 
// equal that desired sum. If there are no pairs that work, return 'unable to find pairs'


sumPairs = function(lst, num) {
  if (lst.length < 2) {
    return false
  }
  let matches = []
  let nSeen = new Set()
  for (let n of lst) {
    let difference = num - n
    if (nSeen.has(difference)) {
      matches.push([difference, n])     
    } else (nSeen.add(n))
  }
  if(matches.length > 0){return matches} else {return 'unable to find pairs'}
};

console.log(sumPairs([1,2,3,4,5], 9))
console.log(sumPairs([1,2,3,4,5], 7))
console.log(sumPairs([3, 1, 5, 8, 2], 27))