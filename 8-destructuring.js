const coordinates = [
  [30, 90],
  [40, 74],
  [34, 118],
  [42, 88],
  [39, 77]
];

// Unpack the first three arrays from coordinates (we are choosing to ignore the rest)
const [newOrleans, newYork, losAngeles] = coordinates;
console.log(newYork);

// Unpack the two values from the newYork array.
const [newYorkLat, newYorkLong] = newYork;

console.log(newYorkLat);
console.log(newYorkLong);

const [, , ...lesserCities] = coordinates;

console.log(lesserCities);
/* 
[ 
  [34, 118],
  [42, 88],
  [39, 77]
];
*/