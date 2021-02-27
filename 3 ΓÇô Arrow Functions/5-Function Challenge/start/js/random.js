/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

 function getRandomNumber (lower, upper) {
     if ( isNaN(lower) || isNaN(upper) ) {
        throw error('Both arguments must be numbers.')
     }
     return Math.floor(Math.random() * (upper - lower + 1)) + lower; 
 }

console.log( getRandomNumber(5, 20) );
console.log(`${getRandomNumber(10, 100)} is arandom number between 10 and 100 `);
console.log( getRandomNumber(200, 'three hundred') );
// Call the function and pass it different values


