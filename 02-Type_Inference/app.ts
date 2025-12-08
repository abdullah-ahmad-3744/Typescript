let number1:number = 10;


//Type inference by Typescript Compiler
let number2=  20; // TS compiler will automatically assing the type number to it 
// number2 = "Thirty" // It will give error becuase of the type number by type inference

let name:string= "Ali"
let userName = "Ahmad"
// userName = true // again it will show error 


// Any datatype in Typescript
let address:any;
let balance ;
balance = 200
balance = "300"
balance = true
balance = null
console.log(balance)


// Unknown data type in Typescript
let status:unknown
status = 'active'
status = true // unknown allows any type of vlaue in the variable 

// unknown does not allow any furhter before checking the variable type 
// shows error becuase of not checking the type 
// status.toUpperCase()   


// allowing further operations because of checking the type before operation
if (typeof(status) === 'string') {
    status.toUpperCase()   
}