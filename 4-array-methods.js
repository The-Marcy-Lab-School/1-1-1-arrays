const letters = ['a', 'b', 'c', 'd', 'e'];

letters.push('f'); // adds 'f' to the end of letters
letters.unshift('z'); // adds 'z' to the beginning of letters
console.log(letters); // Prints ['z', 'a', 'b', 'c', 'd', 'e', 'f']

letters.pop(); // removes the last element ('f')
letters.shift(); // removes the first element ('z')
console.log(letters); // Prints ['a', 'b', 'c', 'd', 'e']

letters.splice(2, 0, 'Hi!'); // At index 2, removes no elements and inserts 'Hi!' 
console.log(letters); // Prints ['a', 'b', 'Hi!', 'c', 'd', 'e']

letters.splice(2, 1, 'Hey ;)'); // At index 2, replaces 1 element with 'Hey ;)'
console.log(letters); // Prints ['a', 'b', 'Hey ;)', 'c', 'd', 'e']

letters.splice(2, 2, 'Nope', 'Bye!'); // At index 2, replaces 2 elements with 'Nope' and 'Bye!'
console.log(letters); // Prints ['a', 'b', 'Nope', 'Bye!', 'd', 'e']
