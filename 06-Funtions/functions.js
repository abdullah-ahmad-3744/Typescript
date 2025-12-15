"use strict";
// Functions in Typescript
Object.defineProperty(exports, "__esModule", { value: true });
// Function with one argument
function greet(a) {
    console.log(a);
    return a + 5;
}
console.log(greet(10));
// Function with two arguments
function meet(msg, val) {
    console.log(msg, val);
}
meet("Abdullah Ahmad", 4);
// Functions with default parameter
function defaultParameter(msg = 'Hello') {
    console.log(msg);
}
defaultParameter();
// Functions with Optional parameter
function oovertime(person) {
    console.log(person || 'Ahmad khan');
}
oovertime("Ali");
oovertime();
// Arrow functions 
const sum = (a, b) => {
    return a + b;
};
sum(10, 20);
//# sourceMappingURL=functions.js.map