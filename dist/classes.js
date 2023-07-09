"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _memberPrivateWithHashSymbol;
class ExampleA {
}
let exampleA = new ExampleA();
exampleA.id = 1;
exampleA.name = 'exampleA';
console.log(exampleA);
// constructors
class ExampleB {
    /* In TypeScript you can have only one costructor. So if you have a parametrized one, the default one will no longer exists.
    constructor() {
        // default constructor
    }

    /*
    constructor(id: number) {
       // constructor with one parameter
    }
    */
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let exampleB = new ExampleB(2, 'exampleB');
console.log(exampleB);
// methods
class ExampleC {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getMyValue() {
        return 'my-value' + this.id + '-' + this.name;
    }
    getMyValueSecond() {
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
    constructor(privateMember, memberPrivateWithHashSymbol, protectedVariable, publicVariable) {
        _memberPrivateWithHashSymbol.set(this, void 0); // new syntax
        this.privateMember = privateMember;
        __classPrivateFieldSet(this, _memberPrivateWithHashSymbol, memberPrivateWithHashSymbol);
        this.protectedVariable = protectedVariable;
        this.publicVariable = publicVariable;
    }
    getMyValue() {
        return 'my-value' + this.privateMember + '-' + __classPrivateFieldGet(this, _memberPrivateWithHashSymbol) + '-' + this.protectedVariable + '-' + this.publicVariable;
    }
    examplePrivateMethod() { }
    exampleProtectedMethod() { }
    // for accesing the private memebrs you can use getters/setters
    getPrivateMember() {
        return this.privateMember;
    }
    setPrivateMember(value) {
        this.privateMember = value;
    }
}
_memberPrivateWithHashSymbol = new WeakMap();
class ExampleE extends ExampleD {
    constructor(privateMember, memberPrivateWithHashSymbol, protectedVariable, publicVariable) {
        super(privateMember, memberPrivateWithHashSymbol, protectedVariable, publicVariable);
    }
    getMyValue() {
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
    static myStaticMethod() {
        return '[F]-myStaticMethod';
    }
}
console.log('ExampleF.myStaticMethod()' + ExampleF.myStaticMethod());
// example with object
class ExampleG {
    constructor(myObject) {
        this.myObject = myObject;
    }
    toString() {
        return this.myObject.id + '-' + this.myObject.name;
    }
}
let exampleG = new ExampleG(new ExampleB(2, 'exampleB'));
console.log('exampleG' + exampleG.toString());
