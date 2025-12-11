// Objects in Typescript
// Normal JS object
const Objects = {
    name : "Muhammad Abdullah",
    age : 24,
    gender : "mail"
}

// Objects in Typescript

// Inline objects in Typescript
const obj2: {name:string, age:number, gender:string} = {
    name : "Abdullah Ahmad",
    age : 25,
    gender : "male"
}


// Another way to create objetcs in Ts
let obj3:{name:string; age:number;gender:string};
obj3 = {
    name : "Dummy User",
    age : 30,
    gender : "male"
}


//Using Type Alices for creating objects

type customer = {
    name:string,
    age:number,
    id:string,
    gender:string
}
// Now creating the Object from the Type alice "Customer"
let customer1:customer = {
    name : "Ali",
    age : 23,
    id: "fnoiuhj023j",
    gender : 'male'
}
// Creating the Customer 2 object from the Alice type "Customer"
let customer2:customer = {
    name : "Furqan Riaz",
    age : 22,
    id : 'ihd9f2y3rhiuewd',
    gender:"male"
}


// Objects by Interface
interface admin {
    name :string,
    age: number,
    position :string
}

// Creating an admin from the interface admin
let admin1:admin = {
    name: "Areeba Kan",
    age : 23,
    position : 'L1',
    id : 12335343324
}

// Creating another interface with the same name Admin
interface admin {
    id : number
}

// Interfaces are powerfull becuase two nterfaces with the same can exist and the properties of both interfaces are merged in each and can be used by the objects

// Creating anohter admin2 from the Interface Admin
let admin2:admin = {
    name : "Abdullah Ahmad",
    age : 25,
    position: 'L3',
    id: 23432432434435

}

// Person interface 
interface person {
    name : string,
    age : number,
    gender :string,
    canVote :boolean,
    idCard? :number
}

let person1 : person = {
    name : "Ismail",
    age :22,
    gender : "male",
    canVote : true,
    idCard : 123456789
}

let person2:person = {
    name : "M Amir",
    age : 17,
    gender : 'male',
    canVote: false 
}
