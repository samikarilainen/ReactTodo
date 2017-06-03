// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Nicola', 'Markus'];
// var groupB = ['Sami'];
// var final = [3, ...groupA];
//
// console.log(final);

var person = ['Sami', 29];
var personTwo = ['Nicola', 20];

function printName (a, b) {
  console.log('Hi '+a+' you are '+b);
}

printName(...person);
printName(...personTwo);
