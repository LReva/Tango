function linearSearch(searchItem, array) {
  for (let i=0; i<=array.length; i++) {
    if (array[i] === searchItem) {
      return i;
    }
  }
}

console.log(linearSearch(3, [1,2,3])) // 2
console.log(linearSearch(4, [1,2,3])) // undefined
console.log(linearSearch(13, [1,2,3])) //undefined
console.log(linearSearch(13, [])) //undefined

function linearSearchGlobal(searchItem, array) {
  let result = [];
  for(let i =0; i<=array.length;i++) {
    if (array[i] === searchItem) {
      result.push(i);
    }
  }
  return result;
}

console.log(linearSearchGlobal("a", ["b", "a", "n", "a", "n", "a", "s"])) // [1, 3, 5]
console.log(linearSearchGlobal("s", ["b", "a", "n", "a", "n", "a", "s"])) // [6]
console.log(linearSearchGlobal("n", ["b", "a", "n", "a", "n", "a", "s"])) // [2, 4]
console.log(linearSearchGlobal("w", ["b", "a", "n", "a", "n", "a", "s"])) // []