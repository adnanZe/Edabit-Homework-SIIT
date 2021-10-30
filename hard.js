// 1
// https://edabit.com/challenge/c23dFfNiKbnguSQtq
// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".
// If you can't find Nemo, return "I can't find Nemo :(".

function findNemo(expressionToCheck) {
  let key = 'Nemo';
  let splitExpression = expressionToCheck.split(' ');
  for(let i = 0; i < splitExpression.length; i++){
    if(key == splitExpression[i]){
      console.log('I found Nemo at ' + (i + 1));
      return;
    }
    if(i == (splitExpression.length - 1)){
      console.log('I can \'t find Nemo :(');
    }
  }
}

findNemo("I am Ne mo Nemo !");
findNemo("N e m o is NEMO NeMo Nemo !");
findNemo("I am Nemo's dad Nemo senior .");
findNemo("Oh, hello !");
findNemo("Is it Nemos, Nemona, Nemoor or Garfield?");
findNemo("Nemo is a clown fish, he has white and orange stripes. Nemo , come back!");

console.log('\n\n');

// 2
// https://edabit.com/challenge/pPNAs5PvB3WvnDwDM
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

function toArray(objectToArray){
  return console.log(Object.entries(objectToArray));
}

toArray({ a: 1, b: 2 });
toArray({ foo: 33, bar: 45, baz: 67 });
toArray({ shrimp: 15, tots: 12 });
toArray({});