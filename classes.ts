class ExampleA {
    // exclamation mark will permit to have an unsigned value when object is created
    id!: number;
    name!: string;

}

let exampleA = new ExampleA();
exampleA.id = 1;
exampleA.name = 'exampleA';
console.log(exampleA);


// constructors
class ExampleB {
    id: number;
    name: string;

    /* In TypeScript you can have only one costructor. So if you have a parametrized one, the default one will no longer exists.
    constructor() {
        // default constructor
    }

    /*
    constructor(id: number) {
       // constructor with one parameter
    }
    */

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

}

let exampleB = new ExampleB(2, 'exampleB');
console.log(exampleB);


// methods
class ExampleC {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getMyValue(): string {
        return 'my-value' + this.id + '-' + this.name;
    }

    getMyValueSecond(): string {
        return `my-value ${this.id} - ${this.name}`;
    }
}

let exampleC = new ExampleC(2, 'exampleC');
console.log('exampleC.getMyValue() = ' + exampleC.getMyValue());
console.log('exampleC.getMyValue = ' + exampleC.getMyValue); // this is a pointer to function actually
console.log('exampleC.getMyValueSecond() = ' + exampleC.getMyValueSecond());
console.log('exampleC.getMyValueSecond = ' + exampleC.getMyValueSecond); // this is a pointer to function actually


// member visibility
class ExampleD {
    private privateMember: string;
    #memberPrivateWithHashSymbol: string; // new syntax

    protected protectedVariable: string;
    public publicVariable: string;

    constructor (privateMember: string, memberPrivateWithHashSymbol: string, protectedVariable: string, publicVariable: string) {
        this.privateMember = privateMember;
        this.#memberPrivateWithHashSymbol = memberPrivateWithHashSymbol;
        this.protectedVariable = protectedVariable;
        this.publicVariable = publicVariable;
    }

    getMyValue(): string {
        return 'my-value' + this.privateMember + '-' + this.#memberPrivateWithHashSymbol + '-' + this.protectedVariable + '-' + this.publicVariable;
    }

    private examplePrivateMethod(): void {}
    protected exampleProtectedMethod(): void {}


    // for accesing the private memebrs you can use getters/setters
    getPrivateMember(): string {
        return this.privateMember;
    }

    setPrivateMember(value: string): void {
        this.privateMember = value;
    }
}

class ExampleE extends ExampleD {

    constructor (privateMember: string, memberPrivateWithHashSymbol: string, protectedVariable: string, publicVariable: string) {
        super(privateMember, memberPrivateWithHashSymbol, protectedVariable, publicVariable);
    }

    getMyValue(): string { // overrided method
        return '[E]' + this.protectedVariable; // access to protected variable 
                                               // OBS: for  super.protectedVariable it will be undefined so actually every variable is obtained through to the current object
    }

}


let exampleD = new ExampleD('[D]privateMemberValue', '[D]memberPrivateWithHashSymbolValue', '[D]protectedVariableValue', '[D]publicVariableValue');
//console.log(exampleD.privateMember); // not accessible
//console.log( exampleD.memberPrivateWithHashSymbol); // not accessible
//console.log(exampleD.protectedVariable); // not accessible
console.log('exampleD.publicVariable' + exampleD.publicVariable); // only public variable is accessible
console.log('exampleD.getMyValue()' + exampleD.getMyValue());

let exampleE = new ExampleE('[E]privateMemberValue', '[E]memberPrivateWithHashSymbolValue', '[E]protectedVariableValue', '[E]publicVariableValue');
console.log('exampleE.getMyValue()' + exampleE.getMyValue());


// static functions
class ExampleF {

    static myStaticMethod(): string {
        return '[F]-myStaticMethod';
    }
}

console.log('ExampleF.myStaticMethod()' + ExampleF.myStaticMethod());



// example with object
class ExampleG {

    private myObject: ExampleB;

    constructor (myObject: ExampleB) {
        this.myObject = myObject;
    }

    toString(): string {
        return this.myObject.id + '-' + this.myObject.name;
    }
}

let exampleG = new ExampleG(new ExampleB(2, 'exampleB'));
console.log('exampleG' + exampleG.toString());
