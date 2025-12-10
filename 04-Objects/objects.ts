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
