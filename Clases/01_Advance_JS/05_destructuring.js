// -----------------------------------------------------------------------------
// DESTRUCTURING
// -----------------------------------------------------------------------------

// Destructuring is a process of pulling something outside of the data
//    structure (array or object) and assigning it to a local variable
//
// This will simplify accessing and using data


const person = {
    firstName: "Billy",
    lastName: "Bob",
    email: "bbob@email.com",
    password: "passw0rd!",
    username: "billyb",
    addresses: [
        {
            address: "1600 Pennsylvania Avenue",
            city: "Washington, D.C.",
            zipcode: "20500",
        },
        {
            address: "221B Baker St.",
            city: "London",
            zipcode: "WC2N 5DU",
        },
    ],
};
const animals = ["horse", "dog", "fish", "cat", "bird"];

const [caballo, perro, , gato] = animals;

const [,,tercero, cuarto, quinto] = animals;

console.log(tercero); // Output: horse


// I) BEFORE ES6 -> You had to destructure / access everything one value at a time (manually)
var es5_firstName = person.firstName;
var es5_lastName = person.lastName;
var es5_email = person.email;
var es5_password = person.password;
var es5_firstAnimal = animals[0];
var es5_thirdAnimal = animals[2];

console.log(es5_firstName); // Output: Billy
console.log(es5_lastName); // Output: Bob
console.log(es5_email); // Output: bbob@email.com
console.log(es5_password); // Output: passw0rd!
console.log(es5_firstAnimal); // Output: horse
console.log(es5_thirdAnimal); // Output: fish


// II) AFTER ES6 -> You can use destructuring (automatically)

let { email, password } = person

email = "NEW EMAIL"

console.log(email)
console.log(password)