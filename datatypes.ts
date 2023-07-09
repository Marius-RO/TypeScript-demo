// string
let lastName: string = 'John';

console.log(lastName.toUpperCase());

// number
let age: string = '99';

let numberAge: number = parseInt(age);
console.log(numberAge);

// boolean
let isValid: boolean = false;
console.log(isValid);


// arrays
let arrayVariable: string[] = ['first', 'second'];

let arrayVariable2: Array<string> = ['first', 'second'];

let numAray: Array<number> = [1,2,3,4,5];

console.log(numAray.filter((number) => number > 2));
console.log(numAray.map((number) => number * 10));
console.log(numAray.find((number) => number === 2));
console.log(numAray.reduce((accumulator, number) => accumulator + number));

// enums (check generate js file)
enum Color {
    Red,
    Green,
    Blue
}

let color : Color = Color.Blue;

const enum Color2 {
    Red,
    Green,
    Blue
}

let color2: Color2 = Color2.Blue;


// tuples
let swapTuple: [number, number] = [10, 20];

function swapNumbers(num1: number, num2 : number): [number, number] {
    return [num2, num1];
}

console.log(swapNumbers(swapTuple[0], swapTuple[1]));
console.log(swapNumbers(11, 12));



// any (type can be assigned   ...  Do not use it!)
let anyVariable: any;  // equivalent for   let anyVariable; (no type declared)
anyVariable = 'IT';
anyVariable = 10;