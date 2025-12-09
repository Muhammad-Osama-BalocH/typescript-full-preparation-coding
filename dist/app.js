"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Basic Types (Expanded)
let message = "Hello, TypeScript!";
let count = 42;
let isDone = false;
let anything = "can be anything";
let nothing = null;
let notDefined = undefined;
let unknownVar = "I am unknown";
const sym = Symbol("unique");
const bigIntValue = 9007199254740991n;
function error(message) {
    throw new Error(message);
}
console.log("1. Basic Types (Expanded):");
console.log("Message:", message);
console.log("Count:", count);
console.log("Is Done:", isDone);
console.log("Anything:", anything);
console.log("Nothing:", nothing);
console.log("Not Defined:", notDefined);
if (typeof unknownVar === "string") {
    console.log("Unknown Var (string):", unknownVar.toUpperCase());
}
console.log("Symbol:", sym);
console.log("BigInt:", bigIntValue);
console.log("--------------------");
// 2. Arrays
let numbers = [1, 2, 3, 4, 5];
let names = ["Alice", "Bob", "Charlie"];
console.log("2. Arrays:");
console.log("Numbers:", numbers);
console.log("Names:", names);
console.log("--------------------");
// 3. Tuples
let person = ["John Doe", 30];
console.log("3. Tuples:");
console.log("Person:", person);
console.log("--------------------");
// 4. Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
let colorName = Color[2];
console.log("4. Enums:");
console.log("Selected Color:", colorName);
console.log("--------------------");
// 5. Functions (Expanded)
function add(x, y) {
    return x + y;
}
const subtract = (x, y) => x - y;
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
function buildNameWithDefault(firstName, lastName = "Smith") {
    return firstName + " " + lastName;
}
function sumAll(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
console.log("5. Functions (Expanded):");
console.log("Add(5, 3):", add(5, 3));
console.log("Subtract(10, 4):", subtract(10, 4));
console.log("Build Name (optional):", buildName("John"));
console.log("Build Name (with default):", buildNameWithDefault("Jane"));
console.log("Sum All:", sumAll(1, 2, 3, 4, 5));
console.log("--------------------");
const multiply = (x, y) => x * y;
let myArray = ["a", "b", "c"];
function greetUser(user) {
    // user.id = 123; // Error: Cannot assign to 'id' because it is a read-only property.
    return `Hello, ${user.name}! You are ${user.age} years old.`;
}
let myUser = { id: 1, name: "Jane Doe", age: 25 };
console.log("6. Interfaces (Expanded):");
console.log(greetUser(myUser));
console.log("Multiply function with interface:", multiply(5, 5));
console.log("String array with interface:", myArray);
console.log("--------------------");
// 7. Classes (Expanded)
class Vehicle {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    honk() {
        console.log("Beep beep!");
    }
}
class Car extends Vehicle {
    model;
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
    drive() {
        console.log(`Driving my ${this.brand} ${this.model}`);
    }
}
class Counter {
    static count = 0;
    static increment() {
        Counter.count++;
    }
}
Counter.increment();
console.log("7. Classes (Expanded):");
const myCar = new Car("Toyota", "Corolla");
myCar.drive();
myCar.honk();
console.log("Static Counter:", Counter.count);
console.log("--------------------");
// 8. Generics
function identity(arg) {
    return arg;
}
let output1 = identity("myString");
let output2 = identity(100);
console.log("8. Generics:");
console.log("Identity (string):", output1);
console.log("Identity (number):", output2);
console.log("--------------------");
let value = "hello";
value = 123;
const obj = {
    propA: 1,
    propB: "hello"
};
console.log("9. Union and Intersection Types:");
console.log("String or Number:", value);
console.log("Intersection Type:", obj);
console.log("--------------------");
let p = { x: 10, y: 20 };
console.log("10. Type Aliases:");
console.log("Point:", p);
console.log("--------------------");
// 11. Type Guards
function isNumber(value) {
    return typeof value === 'number';
}
function processValue(value) {
    if (isNumber(value)) {
        console.log("Value is a number:", value.toFixed(2));
    }
    else {
        console.log("Value is a string:", value.toUpperCase());
    }
}
class Bird {
    fly() { console.log("Flying..."); }
}
class Fish {
    swim() { console.log("Swimming..."); }
}
function move(animal) {
    if (animal instanceof Bird) {
        animal.fly();
    }
    else {
        animal.swim();
    }
}
console.log("11. Type Guards:");
processValue("test");
processValue(12.345);
move(new Bird());
move(new Fish());
console.log("--------------------");
const readonlyPoint = { x: 1, y: 1 };
// readonlyPoint.x = 5; // Error: Cannot assign to 'x' because it is a read-only property.
console.log("12. Mapped Types:");
console.log("Readonly Point:", readonlyPoint);
console.log("--------------------");
console.log("13. Conditional Types:");
let result1 = "yes";
let result2 = "no";
console.log("IsString<string>:", result1);
console.log("IsString<number>:", result2);
console.log("--------------------");
// 14. Decorators (Experimental - requires enabling in tsconfig.json)
function logged(target) {
    console.log(`Class ${target.name} has been defined.`);
}
let MyClass = class MyClass {
    constructor() {
        console.log("MyClass instance created.");
    }
};
MyClass = __decorate([
    logged
], MyClass);
console.log("14. Decorators:");
new MyClass();
console.log("--------------------");
// 15. Async/Await with Promises
const delay = (ms) => new Promise(res => setTimeout(res, ms));
async function main() {
    console.log("Starting async operation...");
    await delay(1000);
    console.log("Async operation completed.");
}
console.log("15. Async/Await with Promises:");
main();
console.log("--------------------");
