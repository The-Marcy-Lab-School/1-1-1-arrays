const hasValue = (arr, value) => {
  for (let i = 0; i < arr.length; i++) { // 1.
    if (arr[i] === value) { // 2.   
      return true; // 3.
    }
  }
  return false; // 4.
}

const letters = ['a', 'b', 'c', 'd'];

console.log(hasValue(letters, 'c')); // Prints true
console.log(hasValue(letters, 'e')); // Prints false