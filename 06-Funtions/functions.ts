// Functions in Typescript

// Function with one argument
function greet (a:number):number{
    console.log(a)
    return a+5
}

console.log(greet(10))



// Function with two arguments
function meet(msg:string, val:number) {
    console.log(msg, val)
}
meet("Abdullah Ahmad", 4)


// Functions with default parameter
function defaultParameter (msg:string= 'Hello') {
    console.log(msg)
}
defaultParameter()



// Functions with Optional parameter
function oovertime(person?:string) {
    console.log(person || 'Ahmad khan')
}
oovertime("Ali") 
oovertime() 



// Arrow functions 
const sum = (a:number,b:number):number => {
    return a +b
}
sum(10,20)


// Callback functions

function placeOrder (order:number, callback:(amount:number)=> void):void {
    const amount:number = order+10;
    callback(amount)
}


// Rest Parameter
function total (...array:number[]) {
    let answer:number = 0
    array.forEach( (vale:number) => answer = answer+vale)
    console.log(answer)
}

total(10,20,30,40)