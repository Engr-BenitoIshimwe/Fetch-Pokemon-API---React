/**
 Write a function that takes two numbers and returns the sum of those numbers 
 */
function add(number1, number2) {
  return number1 + number2;
}

console.log('add', add(2, 3)); // Expects 5

/**
 Write a function that takes any number of arguments
 of type number and return the sum of all the arguments
 */

// function sum(...args) {
function sum(a, b, ...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }

  return sum;
}

console.log('sum', sum(2, 3, 4, 5)); // Expects 14

/**************************************************
 


**************************************************/

/**
 Write a function that takes two strings, A and B, 
 returns whether B is in A in a case-insensitive way
 */
function stringIncludes(string1, string2) {
  let temporaryString = string1.toLowerCase();
  return temporaryString.includes(string2.toLowerCase());
}

console.log(
  'stringIncludes',
  stringIncludes('I drove to New York in a Van with my friend', 'new')
); // Expects true

/**************************************************
 

**************************************************/
/**
 Write a function that takes an array of objects, and returns an array of the objects' "name" property, only if that property exists
 */
function getNames(array) {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].hasOwnProperty('name')) {
      results.push(array[i].name);
    } // true
  }
  return results;
}

console.log(
  'getNames',
  getNames([
    { a: 1 },
    { name: 'Jane' },
    {},
    { name: 'Mark' },
    { name: 'Sophia' },
    { b: 2 },
  ])
); // Expects {'Jane', 'Mark', 'Sophia'}

/**
 Write a function that takes an array of numbers and returns the index of the largest number
 */
function getLargestNumberIndex() {}

console.log('getLargestNumberIndex', getLargestNumberIndex([7, 1, 4, 12, 9])); // Expects 3

/**
 Write a function that returns a promise that resolves after a number of milliseconds
 */
function delay(n) {}

(async () => {
  console.time('Testing delay');
  await delay(1000);
  console.timeEnd('Testing delay');
})();
