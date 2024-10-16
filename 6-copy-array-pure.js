const extend = (arr, value) => {
  const newArr = [...arr, value];
  return newArr;
}

const letters = ['a', 'b', 'c'];
const moreLetters = extend(letters, 'd');

console.log(letters); // Prints ['a', 'b', 'c']
console.log(moreLetters); // Prints ['a', 'b', 'c', 'd'];




// Challenge: make this function pure!
const shorten = (arr) => {
  arr.pop();
  return arr;
}