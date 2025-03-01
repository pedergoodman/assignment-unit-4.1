console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result



// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';

}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName(name) {
  return 'Hello, ' + name + '!';
}

// Remember to call the function to test
console.log( 'Test - should say "Hello, Peder!":', helloName('Peder') );


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}

console.log( 'Test - should be 29:', addNumbers(5, 24) );



// 4. Function to multiply three numbers & return the result
function multiplyThree(numOne, numTwo, numThree) {
  return numOne * numTwo * numThree;
}

console.log( 'Test - should be 216:', multiplyThree(6, 6, 6) );


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}


// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let filledArray = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];
let emptyArray = [];

function getLast(array) {
  return array[array.length - 1];
}

console.log('test - array should be "item 5":', getLast(filledArray));
console.log('test - array should be undefined:', getLast(emptyArray));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find(value, array) {
  for (let i of array) {
    if (i === value) {
      return true;
    } 
  }
  return false;
}

console.log('should return true:', find('item 3', filledArray));
console.log('should return false:', find('item 6', filledArray));


// first attempt 
// function find(value, array) {
//  for (let i of array) {
//    if (i === value) {
//     return true;
//   } else {
//     return false;
//   }
// }


// test outside of function

  // for  (let i of filledArray) {
  //   console.log(i);
  //   if (i === 'item 3') {
  //     console.log(true);
  //   } else {
  //     console.log(false);
  //   }
  // }






// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if(letter === string[0]){
    return true
  } else {
    return false
  }
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let i of array) {
    sum += i
  }
  // TODO: return the sum
  return sum;
}

console.log('sumAll should be 15:', sumAll([1, 2, 3, 4, 5]) );


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let arrayOne = [-2, -1, 0, 1, 2]
let arrayTwo = [-5, -4, -3, -2, -1, 0]
let arrayThree = [4234, -234, 234, -765, 234, 194, -234, 3246, -2765]

function allPositive(array) {
  let result = []
  for (let i of array) {
    if (i > 0) {
      result.push(i)
    }
  }
  return result;
}

console.log('Test -- Original array is:\n\t', arrayOne);
console.log('Output -- allPositive result is:\n\t', allPositive(arrayOne));

console.log('Test -- Original array is:\n\t', arrayTwo);
console.log('Output -- allPositive result is:\n\t', allPositive(arrayTwo));

console.log('Test -- Original array is:\n\t', arrayThree);
console.log('Output -- allPositive result is:\n\t', allPositive(arrayThree));



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!





// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}