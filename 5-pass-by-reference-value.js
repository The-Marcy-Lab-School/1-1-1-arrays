// Pass by reference
const emptyTheArray = (arr) => {
  arr.length = 0;
}
const letters = ['a', 'b', 'c'];
emptyTheArray(letters);
console.log(letters); // Prints []


// Pass by value
const changeName = (oldName, newName) => {
  oldName = newName;
}
const myName = 'ben';
changeName(myName, 'fred');
console.log(myName); // Prints 'ben'