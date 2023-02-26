exports.palindrome = function(word) {
  word = word.toString().toLowerCase().replace(/[\W_]+/g,"")
  return word == word.split("").reverse().join("")
};