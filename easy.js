// 1
// https://edabit.com/challenge/3LpBLgNRyaHMvNb4j
// Create a function that takes two numbers as arguments and return their sum.

console.log('=== 1. Create a function that takes two numbers as arguments and return their sum. ===');

const addition = (firstNumber, secondNumber) => console.log(firstNumber + secondNumber);

addition(3, 2);
addition(-3, -6);
addition(7, 3);


console.log('\n\n');

// 2
// https://edabit.com/challenge/8q54MKnRrm89pSLmW
// Write a function that takes an integer minutes and converts it to seconds.

console.log('=== Easy 2. Write a function that takes an integer minutes and converts it to seconds. ===');

function convert(minutes) {
  return console.log(minutes * 60);
}

convert(5);
convert(3);
convert(2);


console.log('\n\n');

// 3
// https://edabit.com/challenge/NAQhEoxbofPidLxm9
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

console.log('=== Easy 3. Create a function that takes a number as an argument, increments the number by +1 and returns the result. ===');

const additionTwo = (numberToIncrement) => console.log(numberToIncrement + 1); 

additionTwo(0);
additionTwo(9);
additionTwo(-3);


console.log('\n\n');

// 4
// https://edabit.com/challenge/QaApgtePE6QrCZ64o
// Create a function that takes an array containing only numbers and return the first element.

console.log('=== Easy 4. Create a function that takes an array containing only numbers and return the first element. ===');

const getFirstValue = (array) =>{
  console.log(array[0]);
} 

getFirstValue([1, 2, 3]);
getFirstValue([80, 5, 100]);
getFirstValue([-500, 0, 50]);


console.log('\n\n');

// 5
// https://edabit.com/challenge/Q2j5FTFtsk7PdzrQk
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

console.log('=== Easy 5. There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value. ===');

const remainder = (numberOne, numberTwo) => console.log(numberOne % numberTwo);

remainder(1, 3);
remainder(3, 4);
remainder(-9, 45);
remainder(5, 5);


console.log('\n\n');

// 6
// https://edabit.com/challenge/8Qg78sf5SNDEANKti
/*
 In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

chickens = 2 legs
cows = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals. 
*/

console.log('=== Easy 6. In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species: chickens = 2 legs, cows = 4 legs, pigs = 4 legs; The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.===');

const animals = (chickens, cows, pigs) => {
  let chickensLegs = chickens * 2;
  let cowsLegs = cows * 4;
  let pigsLegs = pigs * 4;

  console.log(chickensLegs + cowsLegs + pigsLegs);
}

animals(2, 3, 5);
animals(1, 2, 3);
animals(5, 2, 8);


console.log('\n\n');

// 7
// https://edabit.com/challenge/iBQYbSHZGhpktLRdn
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

console.log('=== Easy 7. Create a function that returns true if an integer is evenly divisible by 5, and false otherwise. ===');

const divisibleByFive = (numberTarget) => {
  console.log(numberTarget % 5 == 0);
}

divisibleByFive(5);
divisibleByFive(-55);
divisibleByFive(37);


console.log('\n\n');

// 8
// https://edabit.com/challenge/yHGowWucg3k2kJdZ4
/*
Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
*/

console.log('=== Easy 8. Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string. ===');

const comp = (stringOne, stringTwo) => console.log(stringOne.length == stringTwo.length);

comp("AB", "CD")
comp("ABC", "DE")
comp("hello", "edabit")
comp("meow", "woof")
comp("jrnvjrnnt", "cvjknfjvmfvnfjn")
comp("jkvnjrt", "krnf")
comp("Facebook", "Snapchat")

console.log('\n\n');

// 9
// https://edabit.com/challenge/kLa2w7m4h849k8rmW
// Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.

console.log('=== Easy 9. Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name. ===');

const sayHelloBye = (nameUser, numberSituation) => {
  if(numberSituation == 1){
    console.log('Hello ' + nameUser.charAt(0).toUpperCase() + nameUser.slice(1));
  }
  else{
    console.log('Bye ' + nameUser.charAt(0).toUpperCase() + nameUser.slice(1));
  }
}

sayHelloBye("jose", 1)
sayHelloBye("barry", 1)
sayHelloBye("jon", 0)
sayHelloBye("khloy", 1)
sayHelloBye("sara", 0)
sayHelloBye("Jon", 0)
sayHelloBye("Matt", 1)

console.log('\n\n');