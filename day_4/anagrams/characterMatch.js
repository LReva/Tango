exports.isCharacterMatch = function(string1, string2) {
  string1 = string1.toLowerCase().replace(/[^A-Z0-9]/ig, "")
  string2 = string2.toLowerCase().replace(/[^A-Z0-9]/ig, "")
  if (string1.length !==string2.length) {
    return false
  }
  let string1Letters = {}
  for (let char of string1) {
    if (char in string1Letters) {
      string1Letters[char]++
    } else {
      string1Letters[char] = 1
    }
  } 
  for (let char of string2) {
    if (char in string1Letters === false) {
      return false
    } else if (string1Letters[char] > 0) {
      string1Letters[char]--
    } else {
      return false
    } return true
  }
};

exports.anagramsFor = function(word, listOfWords) {
  let anagram_list = []
  for (let listword of listOfWords){
    if (exports.isCharacterMatch(word, listword)) {
      anagram_list.push(listword)
    }
  } return anagram_list
};