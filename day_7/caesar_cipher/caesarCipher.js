exports.caesarCipher = function(sen, num) {
  let result = "";
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  for (let char of sen) {
    if (alphabet.includes(char.toLowerCase())) {
      charIndex = alphabet.findIndex(letter => letter === char.toLowerCase())
      newIndex = (charIndex + num) % 26;
      if (newIndex < 0) {
        newIndex = 26 + newIndex
      }
      if (char === char.toUpperCase()){ 
        char = alphabet[newIndex].toUpperCase()
      } else {
        char = alphabet[newIndex]
      } 
    }
    result += char
  } return result
};
