// 1
// https://edabit.com/challenge/4gzDuDkompAqujpRi
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

console.log('=== Medium 1. Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10. ===');

let addUp = (number) => {
  let sum = null;
  for(let i = 1; i <= number; i++){
    sum = sum + i;
  }
  console.log(sum);
};

addUp(4);
addUp(13);
addUp(600);
addUp(392);
addUp(53);
addUp(897);
addUp(23);
addUp(1000);
addUp(738);
addUp(100);
addUp(925);
addUp(1);
addUp(999);
addUp(175);
addUp(111);


console.log('\n\n');

// 2
// https://edabit.com/challenge/Q3n42rEWanZSTmsJm
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

console.log('=== Medium 2. Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order. ===');

let max = null;
let min = null;

let minMax = (array) => {
  max = array[0];
  min = array[0];

  for(let i = 0; i < array.length; i++){
    if(array[i] > max) {
      max = array[i];
    };
    if(array[i] < min){
      min = array[i];
    }
  }
  console.log(min, max);
}

minMax([14, 35, 6, 1, 34, 54]);
minMax([1.346, 1.6532, 1.8734, 1.8723]);
minMax([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345]);
minMax([13, 72, 98, 43, 24, 65, 31]);
minMax([-54, -23, -54, -21]);
minMax([-0.473, -0.6834, -0.1287, 0.5632]);
minMax([0, 0, 0, 0]);


console.log('\n\n');

// 3
// https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB
// Create a function that takes a string and returns a string in which each character is repeated once.

console.log('=== Medium 3. Create a function that takes a string and returns a string in which each character is repeated once. ===');

function doubleChar(stringInput){
  let newWord = stringInput.split('').map(function(letter){
    return letter + letter;
  }).join('')
  
  console.log(newWord);
}

doubleChar("String");
doubleChar("Hello World!");
doubleChar("1234!_ ");
doubleChar("##^&%%*&%%$#@@!");
doubleChar("scandal");
doubleChar("economics");
doubleChar(" ");
doubleChar("_______");
doubleChar("equip gallon read");
doubleChar("baby increase");

console.log('\n\n');

// 3 (update)
// https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB
// Create a function that takes a string and returns a string in which each character is repeated once.

console.log('=== Medium 3.(Another solution) Create a function that takes a string and returns a string in which each character is repeated once.');

function doubleChar(stringInput){
  let newWord = stringInput.replace(/./g, '$&$&');
  console.log(newWord);
}

doubleChar("String");
doubleChar("Hello World!");
doubleChar("1234!_ ");
doubleChar("##^&%%*&%%$#@@!");
doubleChar("scandal");
doubleChar("economics");
doubleChar(" ");
doubleChar("_______");
doubleChar("equip gallon read");
doubleChar("baby increase");


console.log('\n\n');

// 4
// https://edabit.com/challenge/Mo6Coy4PpTbZgtDKd
// A set is a collection of unique items. A set can be formed from an array from removing all duplicate items. Create a function that sorts an array and removes all duplicate items from it.

console.log('=== Medium 4. A set is a collection of unique items. A set can be formed from an array from removing all duplicate items. Create a function that sorts an array and removes all duplicate items from it. ===');

function set(arr) {
  // debugger
  // let mySet = new Set(arr);
  // console.log(mySet);
  let newArray = [];
  for(let i = 0; i < arr.length; i++){
    if (newArray.indexOf(arr[i]) < 0){
      newArray.push(arr[i]);
    }
  }
  console.log(newArray);
}


set([1, 3, 3, 5, 5]);
set([4, 4, 4, 4]);
set([5, 7, 8, 9, 10, 15]);
set([5, 9, 9]);
set([1, 2, 3, 4, 5, 5, 6, 6, 7]);
set([1, 1, 2, 2, 2]);
set(['A', 'A', 'A', 'A']);
set(['A', 'B', 'C', 'D']);


console.log('\n\n');

// 5
// https://edabit.com/challenge/hscAGyt4iNZ3PKy3g
// Write a function that returns the number of users in a chatroom based on the following rules:

// If there is no one, return "no one online".
// If there is 1 person, return "user1 online".
// If there are 2 people, return "user1 and user2 online".
// If there are n>2 people, return the first two names and add "and n-2 more online".'

console.log('=== Medium 5. Write a function that returns the number of users in a chatroom based on the following rules: If there is no one, return "no one online"; If there is 1 person, return "user1 online"; If there are 2 people, return "user1 and user2 online"; If there are n>2 people, return the first two names and add "and n-2 more online". ===');

function chatroomStatus(user){
  if(user.length == 0){
    console.log('no one online');
  }
  else{
    if(user.length == 1){
      console.log(user[0] + ' online');
    }
    else{
      if(user.length == 2){
        console.log(user[0] + ' ' + user[1] + ' online');
      }
      else{
        console.log(user[0] + ' ' + user[1] + ' and ' + (user.length - 2) + ' more online');
      }
    }
  }
}



chatroomStatus([]);
chatroomStatus(["becky325"]);
chatroomStatus(["becky325", "malcolm888"]);
chatroomStatus(["becky325", "malcolm888", "fah32fa"]);
chatroomStatus(["paRIE_to"]);
chatroomStatus(["s234f", "mailbox2"]);
chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]);

console.log('\n\n');