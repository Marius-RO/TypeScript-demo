"use strict";
// Interfaces are actually classes. In JS files, after compilation, no interface will exists. All will be classes.
Object.defineProperty(exports, "__esModule", { value: true });
class ExampleH {
    constructor(myValue, user) {
        this.myValue = myValue;
        this.user = user;
    }
    toString() {
        return this.myValue + '-' + this.user.id + '-' + this.user.name + '-' + this.user.age + '-' + this.user.email;
    }
}
let exampleH = new ExampleH(100, {
    name: 'ExampleH-name',
    age: 10,
    id: 1,
    email: 'ExampleH-email'
});
console.log('exampleH.toString()' + exampleH.toString());
let user = {
    name: 'Username',
    age: 10,
    id: 1,
    email: 'User-email'
};
let user2 = {
    name: 'Username',
    id: 1,
    email: 'User-email'
};
let employee = {
    name: 'employee-name',
    age: 10,
    id: 1,
    email: 'employee-email',
    department: 'employee-department'
};
// modifying properties
let user3 = {
    name: 'Username[3]',
    age: 10,
    id: 1,
    email: 'User-email[3]'
};
user.email = 'new-email[3]';
user.name = 'new-name[3]';
// object destructuring (for example name field will be accessebile through userName value)
let { name: userName, email: userEmail } = {
    name: 'Username[4]',
    age: 10,
    id: 1,
    email: 'User-email[4]'
};
console.log(userName);
console.log(userEmail);
// array destructuring
let [user5, user7] = [
    { name: 'Username[5]', age: 20, id: 1, email: 'User-email[5]' },
    { name: 'Username[6]', age: 21, id: 2, email: 'User-email[6]' },
    { name: 'Username[7]', age: 22, id: 3, email: 'User-email[7]' },
    { name: 'Username[8]', age: 23, id: 4, email: 'User-email[8]' }
];
console.log(user5);
console.log(user7);
let [user9, user10, ...restUsers] = [
    { name: 'Username[9]', age: 20, id: 1, email: 'User-email[9]' },
    { name: 'Username[10]', age: 21, id: 2, email: 'User-email[10]' },
    { name: 'Username[11]', age: 22, id: 3, email: 'User-email[11]' },
    { name: 'Username[12]', age: 23, id: 4, email: 'User-email[12]' }
];
console.log(user9);
console.log(user10);
console.log(restUsers);
console.log('/n');
console.log(restUsers.filter(user => user.id > 2));
