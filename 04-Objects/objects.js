"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Objects in Typescript
// Normal JS object
const Objects = {
    name: "Muhammad Abdullah",
    age: 24,
    gender: "mail"
};
// Objects in Typescript
// Inline objects in Typescript
const obj2 = {
    name: "Abdullah Ahmad",
    age: 25,
    gender: "male"
};
// Another way to create objetcs in Ts
let obj3;
obj3 = {
    name: "Dummy User",
    age: 30,
    gender: "male"
};
// Now creating the Object from the Type alice "Customer"
let customer1 = {
    name: "Ali",
    age: 23,
    id: "fnoiuhj023j",
    gender: 'male'
};
// Creating the Customer 2 object from the Alice type "Customer"
let customer2 = {
    name: "Furqan Riaz",
    age: 22,
    id: 'ihd9f2y3rhiuewd',
    gender: "male"
};
// Creating an admin from the interface admin
let admin1 = {
    name: "Areeba Kan",
    age: 23,
    position: 'L1',
    id: 12335343324
};
// Interfaces are powerfull becuase two nterfaces with the same can exist and the properties of both interfaces are merged in each and can be used by the objects
// Creating anohter admin2 from the Interface Admin
let admin2 = {
    name: "Abdullah Ahmad",
    age: 25,
    position: 'L3',
    id: 23432432434435
};
let person1 = {
    name: "Ismail",
    age: 22,
    gender: "male",
    canVote: true,
    idCardNum: 123456789
};
let person2 = {
    name: "M Amir",
    age: 17,
    gender: 'male',
    canVote: false
};
// using partial makes all properties optional
let bankCustomer1 = {
    name: "Ali"
};
// Required makes all properties necsaary to use 
let bankCustomer2 = {
    name: "Ahmad",
    age: 30,
    accountActive: true,
    balance: 10000
};
// Allows only to read the view the elements of the objects but no chnages are allowed
let bankCustomer3 = {
    name: "Bilal",
    age: 21,
    accountActive: false,
    balance: 0.0
};
//# sourceMappingURL=objects.js.map