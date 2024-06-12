

function saludar(nombre){
    return `Hola ${nombre}`;
}

const saludar = function(nombre){
    return `Hola ${nombre}`;
}

console.log(saludar("Francisco"))


const saludar2 = (nombre) => `Hola ${nombre}`;
console.log(saludar2("Francisco"))


const saludar3 = (nombre) =>{
    return `Hola ${nombre}`;
}

console.log(saludar3("Francisco"))

const saludar4 = (nombre) => `Hola ${nombre}`;

console.log(saludar4("Francisco"))

const algo = () => console.log("Hola");



const add2 = function (a, b) {
    return a + b;
}
console.log(add2(5, 10));


const add3 = (a, b) => a + b;

console.log(add3(5, 10));

setTimeout(function(){
    console.log("Hola");
}, 2000);


setTimeout(() => {
    console.log("Hola")
}, 2000)
e
function sayHello2(name) {
    const greeting = `Hello ${name}`;
    console.log("We have created the following greeting: " + greeting);
    return greting;
}

const sayHello2 = (name) => {
    const greeting = `Hello ${name}`;
    console.log("We have created the following greeting: " + greeting);
    return greeting;
}
sayHello2("lala")
