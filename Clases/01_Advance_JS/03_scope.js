//------------------------------------------------------------------------------
// SCOPE
//------------------------------------------------------------------------------

var x = "FRANCISCO";
var y = "BOISIER";
function example() {
    var x = 10; // Variable x is declared with var within the function scope

    if (true) {
        var y = 20; // Variable y is declared with var within the block scope (but still accessible outside the block)
        console.log(x); // Output: 10
        console.log(y); // Output: 20
    }

    console.log(x); // Output: 10
    console.log(y); // Output: 20 (y is accessible here due to the function scope)
}

example();
console.log(x);
console.log(y);

//----------------------------------------------

function example() {
    let x = 10; 

    if (true) {
        let y = 20; 
        console.log(x);
        console.log(y);
    }

    console.log(x);
    console.log(y);
}

example();
console.log(x);
console.log(y);



// WARNING
// "const" keyword -> variable cannot be reassigned.
// Disctinction:
//   Primitive Data Types -> value directly stored in variable (cannot be changed)
//   Non-Primitive Data Types -> value stored in variable is a reference to the value -> object itself
//                               The reference is the one that remains contant, but propoerties of object
//                               can be changed.

const nombre = "TEXTO";
nombre = "OTRA COSA"

console.log("----------------------");
const arr_1 = [1, 2, 3];
arr_1.push(4);
console.log(arr_1); 

console.log("----------------------");
const arr_2 = arr_1
arr_2.push(5);
console.log(arr_1); 
console.log(arr_2);

console.log("----------------------");
const arr_3 = Object.assign([], arr_1);
arr_2.push(6);
console.log(arr_1); // Output: [1, 2, 3, 4, 5, 6]
console.log(arr_3)

console.log("----------------------");
const John = { name: "John", age: 42 };
console.log(John);
John.name="Paul";
console.log(John);
