function roman_numerals(number) {
  const roman_numerals_to_arabic_map = {
    "M":1000, "CM":900, "D":500, "CD":400, "C":100, "XC":90, "L":50,"XL":40, "X":10,"IX":9, "V":5, "IV":4,"I":1,
  };
  let result = ""
  for (let key in roman_numerals_to_arabic_map) {
    let roman_value = key;
    let arabic_value = roman_numerals_to_arabic_map[key];
    let evenly_divisible_times = Math.floor(number/arabic_value);
    if (evenly_divisible_times >= 1) {
      result += roman_value.repeat(evenly_divisible_times);
      number -=arabic_value * evenly_divisible_times;
    }
  }
  return result;

}

console.log(roman_numerals(4))
console.log(roman_numerals(9))
console.log(roman_numerals(14))
console.log(roman_numerals(44))
console.log(roman_numerals(944))
console.log(roman_numerals(150))