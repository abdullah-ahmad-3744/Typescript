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