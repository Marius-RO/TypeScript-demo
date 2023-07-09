function add(a: number, b: number): number {
    return a + b;
}


function show(a: string): void {
    console.log(a);
}

// lambda
const substractLmbdaFunction = (num1: number, num2: number): number => num1 - num2;
console.log('substractLmbdaFunction(2,3) = ' + substractLmbdaFunction(2,3));

const addLambdaFunction = (num1: number, num2: number): number => {
    return num1 + num2;
};

console.log('addLambdaFunction(2,3) = ' + addLambdaFunction(2,3));


// function expression
const addTypeFunction = function (num1: number, num2: number): number {
    return num1 + num2;
};

console.log('addTypeFunction(3,3) = ' + addTypeFunction(3,3));


// function with optional parameter
function addWithOptional(num1: number, num2: number, num3?: number): number {
    return num3? num1 + num2 + num3 : num1 + num2;
}
console.log('addWithOptional(1,2,3) = ' + addWithOptional(1,2,3));
console.log('addWithOptional(1,2) = ' + addWithOptional(1,2));



// function with default value for parameter
function addWithDefault(num1: number, num2: number, num3: number = 10): number {
    return num1 + num2 + num3;
}
console.log('addWithDefault(1,2,3) = ' + addWithDefault(1,2,3));
console.log('addWithDefault(1,2) = ' + addWithDefault(1,2));


// function with rest parameters (the rest of parameters)
function addWithRestParameters(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((accumulator , number) => accumulator + number, 0);
} 

let numbers: number[] = [1, 2, 3, 4, 5];

console.log('addWithRestParameters(1,2, ...numbers) = ' + addWithRestParameters(1,2, ...numbers));
console.log('addWithRestParameters(1,2, ...[3, 4, 5]) = ' + addWithRestParameters(1,2, ...[3, 4, 5]));
console.log('addWithRestParameters(1,2, ...[3, 4, 5]) = ' + addWithRestParameters(1,2));
console.log('addWithRestParameters(1,2, 3, 4, 5, 6) = ' + addWithRestParameters(1,2, 3, 4, 5, 6));


// generic functions
function getItems<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

console.log('getItems<number>([1,2,3,4,5]) = ' + getItems<number>([1,2,3,4,5]));
console.log("getItems<string>(['a', 'b', 'c']) = " + getItems<string>(['a', 'b', 'c']));