
// Base class
class Animal {
    constructor(nombre, edad = 10, color = "blanco") {
        this.name = nombre;
        this.age = edad;
        this.color = color;
        this.nacimiento;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}

let animal_instancia = new Animal("Leon", 10);
console.log(animal_instancia);

animal_instancia.eat();
animal_instancia.sleep();

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age)
        this.breed = breed;
    }

    // Methods sleep() are inherited from Animal

    // Method eat() is inherited from Animal, but we can override it
    eat() {
        console.log(`${this.name} is eating from the dog bowl.`);
    }

    bark() {
        console.log(`${this.name} says woof!`);
    }
}


let dog_instancia = new Dog("Pug", 10, "Pug");
dog_instancia.sleep();
dog_instancia.eat();
dog_instancia.bark();
console.log(dog_instancia);



class Cat extends Animal {
    constructor(name, age, color, livesLeft = 9) {
        super(name, age, color);
        this.livesLeft = livesLeft;
    }

    // Methods eat() and sleep() are inherited from Animal
    meow() {
        console.log(`${this.name} says meow!`);
    }
    lifeLost() {
        if (this.livesLeft === 0) {
            console.log(`${this.name} is dead.`);
        }else{
            this.livesLeft--;
            console.log(`${this.name} lost a life. ${this.livesLeft} remaining.`);
        }
    }
}


let cat_instancia = new Cat("Garfield", 10, "black");
cat_instancia.meow();
cat_instancia.lifeLost();
cat_instancia.eat();
cat_instancia.sleep();
cat_instancia.lifeLost();
cat_instancia.lifeLost();
cat_instancia.lifeLost();
cat_instancia.lifeLost();
cat_instancia.lifeLost();
cat_instancia.lifeLost();
cat_instancia.lifeLost();
cat_instancia.lifeLost();
cat_instancia.lifeLost();
cat_instancia.lifeLost();
cat_instancia.lifeLost();
console.log(cat_instancia);