//------------------------------------------------------------------------------
// LET AND CONST VARIABLES
//------------------------------------------------------------------------------

// 0) VAR VS LET VS CONST

// |          | Scope           | Hoisting       | Re-Declaration | Mutable  |
// |----------|-----------------|----------------|----------------|----------|
// | var      | Function/Global | Hoisted        | Allowed        | Yes      |
// | let      | Block           | Not hoisted    | Not allowed    | Yes      |
// | const    | Block           | Not hoisted    | Not allowed    | No       |

// Scope: 'var' has function or global scope, 'let' and 'const' have block scope
//        (a block -> {}).
// Hoisting: 'var' variables are hoisted (moved to the top of their scope), while
//           'let' and 'const' variables are not hoisted.
// Re-Declaration: 'var' allows re-declaration within the same scope, 'let' and
//                 'const' do not.
// Mutable: 'var' and 'let' variables can be reassigned with a new value, whereas
//          'const' variables are read-only and cannot be reassigned.
//           NOTE: for objects and arrays assigned to const, their properties
//                 can be modified, but the assignment itself cannot be changed.

var nombre = "FRANCISCO";
var nombre = "BOISIER";

console.log(nombre);

let nombre = "FRANCISCO";
nombre = 40;

console.log(nombre);

const version = 1.0;

console.log("Version: " + version);

version = 2.0;

console.log("Version: " + version);