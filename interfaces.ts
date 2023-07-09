// Interfaces are actually classes. In JS files, after compilation, no interface will exists. All will be classes.

// used as data type (Why not to use a class instead ??)  (keyword export marks that this interface can be used outside of this file)
export interface User {
    name: string;
    age: number;
    id: number;
    email: string;
}

class ExampleH {
    myValue: number;
    user: User; // why To use an interface for this and not a class ??

    constructor(myValue: number, user: User) {
        this.myValue = myValue;
        this.user = user;
    }

    toString(): string {
        return this.myValue + '-' + this.user.id + '-' + this.user.name + '-' + this.user.age+ '-' + this.user.email;
    }
}

let exampleH: ExampleH = new ExampleH(100, {
    name: 'ExampleH-name',
    age: 10,
    id: 1,
    email: 'ExampleH-email'
});

console.log('exampleH.toString() = ' + exampleH.toString());

 

let user: User = {        // object instatieted as interface (??)
    name: 'Username',
    age: 10,
    id: 1,
    email: 'User-email'
};


// used as data type with optional field
interface User2 {
    name: string;
    age?: number; // is optional an can the setup can be ignored
    id: number;
    email: string;
}

let user2: User2 = {      // age is not set
    name: 'Username',
    id: 1,
    email: 'User-email'
};


// extend interafces (same behaviour as classes)
interface Employee extends User {
    department: string;
}

let employee: Employee = {     
    name: 'employee-name',
    age: 10,
    id: 1,
    email: 'employee-email',
    department: 'employee-department'
};



// interfaces with method definition (keyword export marks that this interface can be used outside of this file)
export interface Login {
    login(): User;
}


// modifying properties
let user3: User = { 
    name: 'Username[3]',
    age: 10,
    id: 1,
    email: 'User-email[3]'
};

user.email = 'new-email[3]';
user.name = 'new-name[3]';


// object destructuring (for example name field will be accessebile through userName value)
let {name: userName, email: userEmail}: User = { 
    name: 'Username[4]',
    age: 10,
    id: 1,
    email: 'User-email[4]'
};
console.log(userName);
console.log(userEmail);




// array destructuring
let [user5, user7]: User[] = [
    {name: 'Username[5]', age: 20, id: 1,email: 'User-email[5]'}, 
    {name: 'Username[6]', age: 21, id: 2,email: 'User-email[6]'},
    {name: 'Username[7]', age: 22, id: 3,email: 'User-email[7]'},
    {name: 'Username[8]', age: 23, id: 4,email: 'User-email[8]'}
];

console.log(user5);
console.log(user7);


let [user9, user10, ...restUsers]: User[] = [
    {name: 'Username[9]', age: 20, id: 1,email: 'User-email[9]'}, 
    {name: 'Username[10]', age: 21, id: 2,email: 'User-email[10]'},
    {name: 'Username[11]', age: 22, id: 3,email: 'User-email[11]'},
    {name: 'Username[12]', age: 23, id: 4,email: 'User-email[12]'}
];

console.log(user9);
console.log(user10);
console.log(restUsers);
console.log('/n');
console.log(restUsers.filter(user => user.id > 2));