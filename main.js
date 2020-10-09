/*JS EXERCISES
        21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
        22) Create an object with properties such name, surname, email
        23) Delete Email from the previously created object
        24) Create an array with 10 strings in it
        25) Print in the console every string in the previous array
        26) Create an array with 100 random numbers in it
        27) Wrote a function to get the MAX and the MIN from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays and returns the longest one
        30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values*/

let x = 'John';
let y = 'Doe';

console.log(x + ' <> ' + y);

let object = {
  name: 'Manuel',
  surname: 'Desole',
  email: 'desole.manuel@gmail.com',
};

delete object.email;

arr = [
  'ciao',
  'ciao',
  'ciao',
  'ciao',
  'ciao',
  'ciao',
  'ciao',
  'ciao',
  'ciao',
  'ciao',
];

for (i = 0; i < 10; i++) {
  console.log(arr[i]);
}

let arrHundred = [];

for (i = 1; i <= 100; i++) {
  let random = Math.ceil(Math.random() * 100);
  arrHundred.push(random);
}
console.log(arrHundred);

let minMax = function () {
  let max = Math.max(...arrHundred);
  let min = Math.min(...arrHundred);
  return 'the max is ' + max + ' and the minimun is ' + min;
};

console.log(minMax());

let masterArrey = [];
let arrayOfNumber = [];

for (i = 0; i < 10; i++) {
  arrayOfNumber.push(Math.floor(Math.random() * 10 + 1));
  masterArrey.push(arrayOfNumber)[i];
}

console.log(masterArrey);
