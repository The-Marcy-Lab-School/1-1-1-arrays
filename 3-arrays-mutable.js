const myName = 'ben';
myName.toUpperCase(); // doesn't mutate the string, it makes a copy
myName[0] = "J"; // doesn't even do anything
console.log(myName);  // still 'ben'

const endLetters = ["x", "y", "z"];
endLetters[1] = "foo";
console.log(endLetters); // ["x", "foo", "z"]

endLetters.length = 0; // endLetters now has no values
console.log(endLetters); // []