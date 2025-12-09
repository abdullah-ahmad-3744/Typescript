"use strict";
// Arrays in Typescript
Object.defineProperty(exports, "__esModule", { value: true });
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// This syntax is also valid and type number will be automatically assigned
let array2 = [1, 2, 3, 4, 5, 6];
// Automatically type will be assigned as string 
let names = ['Ali', 'Ahmad', 'Hamza'];
// Array containing mixed type values 
let array3 = [1, 2, 3, 4, 'Ali', 'Hamza', true]; // here all types will be assigned automatically
let array4 = [1, 2, 3, 4, 'Ali', 'Hamza', true];
// Adding a vlaue other than above types will give error 
array4.push(null); // shows error becuase null is not from the above types 
//# sourceMappingURL=app.js.map