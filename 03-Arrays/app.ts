// Arrays in Typescript

let array:number[] = [1,2,3,4,5,6,7,8,9]


// This syntax is also valid and type number will be automatically assigned
let array2 = [1,2,3,4,5,6]

// Automatically type will be assigned as string 
let names= ['Ali', 'Ahmad', 'Hamza']


// Array containing mixed type values 
let array3 = [1,2,3,4, 'Ali', 'Hamza', true] // here all types will be assigned automatically
let array4:(string | number | boolean)[] = [1,2,3,4, 'Ali', 'Hamza', true]


// Adding a vlaue other than above types will give error 
// array4.push(null)      // =====>  shows error becuase null is not from the above types 