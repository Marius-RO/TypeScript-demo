"use strict";
// string
let lastName = 'John';
console.log(lastName.toUpperCase());
// number
let age = '99';
let numberAge = parseInt(age);
console.log(numberAge);
// boolean
let isValid = false;
console.log(isValid);
// arrays
let arrayVariable = ['first', 'second'];
let arrayVariable2 = ['first', 'second'];
let numAray = [1, 2, 3, 4, 5];
console.log(numAray.filter((number) => number > 2));
console.log(numAray.map((number) => number * 10));
console.log(numAray.find((number) => number === 2));
console.log(numAray.reduce((accumulator, number) => accumulator + number));
// enums (check generate js file)
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let color = Color.Blue;
let color2 = 2 /* Blue */;
// tuples
let swapTuple = [10, 20];
function swapNumbers(num1, num2) {
    return [num2, num1];
}
console.log(swapNumbers(swapTuple[0], swapTuple[1]));
console.log(swapNumbers(11, 12));
// any (type can be assigned   ...  Do not use it!)
let anyVariable; // equivalent for   let anyVariable; (no type declared)
anyVariable = 'IT';
anyVariable = 10;
