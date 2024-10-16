const friends = ['bert', 'ernie', 'big bird', 'kermit', 'miss piggy', 'elmo'];
console.log(`typeof on an Array returns ${typeof friends} because Arrays are Objects!`);

console.log(`I have ${friends.length} friends`);
console.log(`My best friend is ${friends[2]}`);
console.log(`My first three friends are ${friends.slice(0, 3)}`)
console.log('But here are all of my friends:');

for (let i = 0; i < friends.length; i += 1) {
  // friends[i] holds the "current" friend that we're looking at in this iteration of the loop
  console.log(friends[i]);
}