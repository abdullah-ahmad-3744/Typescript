// Arrays in Typescript

let array:number[] = [1,2,3,4,5,6,7,8,9]


// This syntax is also valid and type number will be automatically assigned
let array2 = [1,2,3,4,5,6]

// Automatically type will be assigned as string 
let names= ['Ali', 'Ahmad', 'Hamza']


// Array containing mixed type values 
let array3 = [1,2,3,4, 'Ali', 'Hamza', true] // here all types will be assigned automatically
let array4:(string | number | boolean)[] = [1,2,3,4, 'Ali', 'Hamza', true]
array4.push(10)
array4.push("Faraz")

// Adding a vlaue other than above types will give error 
// array4.push(null)      // =====>  shows error becuase null is not from the above types 


let arra5:(number | boolean)[] = [10,20,30,40,50, true]
arra5.push(100)
arra5.push(false)
// arra5.push("Ali") // give error becuase this type is not included in the array types.
arra5.pop()
arra5.length
// All the above operations are valid in the Typescript except the one where string is being added



// Tupples in Typescript
let tupple1:[number, string] = [10, 'Tupple']

// Tupple for the login details
let loginDetails:[string,number]= ['Muhammad Abdullah', 1234567]   
