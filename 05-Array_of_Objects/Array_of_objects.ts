// Array of Objects

// In Javascript
let array = [
    {
        name : "Abdullah Ahmad",
        age : 24,
        city : "Bahawalpur"
    },
    {
        name : "Areeba Khan",
        age : 23,
        city : "Bahawalpur"
    },
    {
        name : "Ali",
        age :21,
        city : "Lahore"
    }
]

// Array of objects 
let users: {name:string, age:number, city:string}[] =[
    {
        name : "demo 1",
        age : 31,
        city : "Karachi"
    },
    {
        name : "demo 2",
        age : 25,
        city : "Lahore"
    }
]

// Array of Objects using interfce
interface userInterface {
    name : string,
    age : number,
    address: string,
    isActive : boolean
}

let newUser1 : userInterface = {
    name : "Demo User",
    age :35,
    address : "Demo Address",
    isActive : true
}


let newUser2 : userInterface = {
    name : "Demo User 2",
    age :30,
    address : "Demo Address 2",
    isActive : false
}