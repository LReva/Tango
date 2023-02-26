// # For each unique character that appears in the input string, report the number of occurrences of that character 
// # in the input. You should return the resulting data as a list of lists. Each list element should be list with in the folowing format:
// # The list should be sorted by the number of occurances (descending). If there is the same number of occurances for two or more characters,
// #   then the order should be alphabetical. You can assume that all input will be lower case. Ignore any spaces or punctuation. 


charCount = function(someString) {
  let stringDict = {}
  for (char of someString.toLowerCase().replace(/[\W_]+/g,"")) {
    if (stringDict[char]) {
      stringDict[char]++
    } else {
      stringDict[char] = 1
    }
  } 
  let stringLst = Object.keys(stringDict).map(key => [key,stringDict[key]]).sort((a,b) => (b[1] - a[1]) || -(b[0].charCodeAt() - a[0].charCodeAt()))
  return stringLst
};



let result_1 = charCount("aaabbc")
console.log(result_1[0][0] === "a")
console.log(result_1[0][1] === 3)
console.log(result_1[1][0] === "b")
console.log(result_1[1][1] === 2)
console.log(result_1[2][0] === "c")
console.log(result_1[2][1] === 1)

let result_2 = charCount("an apple a day will keep the doctor away")
console.log(result_2[0][0] === "a")
console.log(result_2[0][1] === 6)
console.log(result_2[1][0] === "e")
console.log(result_2[1][1] === 4)
console.log(result_2[2][0] === "l")
console.log(result_2[2][1] === 3)
console.log(result_2[3][0] === "p")
console.log(result_2[3][1] === 3)
console.log(result_2[4][0] === "d")
console.log(result_2[4][1] === 2)
console.log(result_2[5][0] === "o")
console.log(result_2[5][1] === 2)
console.log(result_2[6][0] === "t")
console.log(result_2[6][1] === 2)
console.log(result_2[7][0] === "w")
console.log(result_2[7][1] === 2)
console.log(result_2[8][0] === "y")
console.log(result_2[8][1] === 2)
console.log(result_2[9][0] === "c")
console.log(result_2[9][1] === 1)
console.log(result_2[10][0] === "h")
console.log(result_2[10][1] === 1)
console.log(result_2[11][0] === "i")
console.log(result_2[11][1] === 1)
console.log(result_2[12][0] === "k")
console.log(result_2[12][1] === 1)
console.log(result_2[13][0] === "n")
console.log(result_2[13][1] === 1)
console.log(result_2[14][0] === "r")
console.log(result_2[14][1] === 1)