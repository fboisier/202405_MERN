const usuario = {
    nombre: "Francisco",
    apellidos: "Boisier",
    id: 1
}

const usuario2 = { ...usuario, id: 2 };
usuario2.nombre = "PANCHO";

console.log(usuario);
console.log(usuario2)

// -----------------------------------------------------------------------------
// REST/SPREAD OPERATOR (...)
// -----------------------------------------------------------------------------

const person = {
    firstName: "Billy",
    lastName: "Bob",
    email: "bob@email.com",
    username: "BillyB",
    password: "hmmmmmm",
};

const address = {
    street: "123 Main St",
    city: "Pittsburgh",
    state: "PA",
    zip: "15222",
}

const persona2 = person;
persona2.firstName = "PANCHO";
console.log(person);

const persona3 = { ...person };
persona3.firstName = "FRANCISCO"
console.log(person);

const conjunto = { ...person, ...address }
console.log(conjunto);

console.log("------------------------")

const conjunto1 = { ...person, ...address, email: 'jajaja', country: 'CHILE' }

console.log(conjunto1);

const animals = ["horse", "dog", "fish", "cat", "bird"];

const newAnimals = [...animals, "lion", "tiger", "bear"];
console.log(newAnimals);

const newAnimals2 = ["lion", "tiger", "bear", ...animals];
console.log(newAnimals2);

const newAnimals3 = ["lion", ...animals, "tiger", "bear"];
console.log(newAnimals3);


const [firstAnimal, secondAnimal, ...restAnimals] = animals;
console.log(firstAnimal); // Output: horse
console.log(secondAnimal); // Output: dog
console.log(restAnimals); // Output: ['fish', 'cat', 'bird']


const user = {
    firstName: "Billy",
    lastName: "Bob",
    email: "bbob@email.com",
    password: "passw0rd!",
    username: "billyb",
}

const { email, ...restante } = user;
console.log(restante)


const { lastName, ...restante2} = restante;
console.log(restante2)

