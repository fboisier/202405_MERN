//------------------------------------------------------------------------------
// HOISTING
//------------------------------------------------------------------------------

// Hoisting is a mechanism in JavaScript where variable and function declarations
// are moved to the top of their containing scope during the compilation phase.
// This allows us to use functions before their actual declarations and access
// variables before they are declared in the code.

magic();

function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}

/////////////////////////////////////////////// COMO REALMENTE QUEDA:
function magic(){
    var foo;
    foo = "hello world";
    console.log(foo);
}

magic();
