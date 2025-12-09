// 1. Basic Types (Expanded)
let message: string = "Hello, TypeScript!";
let count: number = 42;
let isDone: boolean = false;
let anything: any = "can be anything";
let nothing: null = null;
let notDefined: undefined = undefined;
let unknownVar: unknown = "I am unknown";
const sym: symbol = Symbol("unique");
const bigIntValue: bigint = 9007199254740991n;

function error(message: string): never {
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
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];

console.log("2. Arrays:");
console.log("Numbers:", numbers);
console.log("Names:", names);
console.log("--------------------");

// 3. Tuples
let person: [string, number] = ["John Doe", 30];

console.log("3. Tuples:");
console.log("Person:", person);
console.log("--------------------");

// 4. Enums
enum Color {
  Red = 1,
  Green,
  Blue,
}
let colorName: string = Color[2];

console.log("4. Enums:");
console.log("Selected Color:", colorName);
console.log("--------------------");

// 5. Functions (Expanded)
function add(x: number, y: number): number {
  return x + y;
}

const subtract = (x: number, y: number): number => x - y;

function buildName(firstName: string, lastName?: string): string { // Optional parameter
    if (lastName) return firstName + " " + lastName;
    else return firstName;
}

function buildNameWithDefault(firstName: string, lastName = "Smith"): string { // Default parameter
    return firstName + " " + lastName;
}

function sumAll(...numbers: number[]): number { // Rest parameters
    return numbers.reduce((acc, current) => acc + current, 0);
}


console.log("5. Functions (Expanded):");
console.log("Add(5, 3):", add(5, 3));
console.log("Subtract(10, 4):", subtract(10, 4));
console.log("Build Name (optional):", buildName("John"));
console.log("Build Name (with default):", buildNameWithDefault("Jane"));
console.log("Sum All:", sumAll(1, 2, 3, 4, 5));
console.log("--------------------");

// 6. Interfaces (Expanded)
interface User {
  readonly id: number;
  name: string;
  age: number;
  email?: string; // Optional property
}

interface MathFunc {
    (x: number, y: number): number;
}

const multiply: MathFunc = (x, y) => x * y;

interface StringArray {
    [index: number]: string;
}
let myArray: StringArray = ["a", "b", "c"];


function greetUser(user: User): string {
  // user.id = 123; // Error: Cannot assign to 'id' because it is a read-only property.
  return `Hello, ${user.name}! You are ${user.age} years old.`;
}

let myUser: User = { id: 1, name: "Jane Doe", age: 25 };
console.log("6. Interfaces (Expanded):");
console.log(greetUser(myUser));
console.log("Multiply function with interface:", multiply(5, 5));
console.log("String array with interface:", myArray);
console.log("--------------------");

// 7. Classes (Expanded)
abstract class Vehicle {
    constructor(public brand: string) {}
    abstract drive(): void;
    honk(): void {
        console.log("Beep beep!");
    }
}

class Car extends Vehicle {
    constructor(brand: string, public model: string) {
        super(brand);
    }
    drive(): void {
        console.log(`Driving my ${this.brand} ${this.model}`);
    }
}

class Counter {
    static count: number = 0;
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
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

console.log("8. Generics:");
console.log("Identity (string):", output1);
console.log("Identity (number):", output2);
console.log("--------------------");

// 9. Union and Intersection Types
type StringOrNumber = string | number;
let value: StringOrNumber = "hello";
value = 123;

interface A {
    propA: number;
}
interface B {
    propB: string;
}
type AandB = A & B;

const obj: AandB = {
    propA: 1,
    propB: "hello"
};

console.log("9. Union and Intersection Types:");
console.log("String or Number:", value);
console.log("Intersection Type:", obj);
console.log("--------------------");

// 10. Type Aliases
type Point = {
    x: number;
    y: number;
};

let p: Point = { x: 10, y: 20 };

console.log("10. Type Aliases:");
console.log("Point:", p);
console.log("--------------------");

// 11. Type Guards
function isNumber(value: any): value is number {
    return typeof value === 'number';
}

function processValue(value: string | number) {
    if (isNumber(value)) {
        console.log("Value is a number:", value.toFixed(2));
    } else {
        console.log("Value is a string:", value.toUpperCase());
    }
}
class Bird { fly() { console.log("Flying..."); } }
class Fish { swim() { console.log("Swimming..."); } }
type Animal = Bird | Fish;

function move(animal: Animal) {
    if (animal instanceof Bird) {
        animal.fly();
    } else {
        animal.swim();
    }
}
console.log("11. Type Guards:");
processValue("test");
processValue(12.345);
move(new Bird());
move(new Fish());
console.log("--------------------");


// 12. Mapped Types
type ReadonlyPoint = {
    readonly [P in keyof Point]: Point[P];
};

const readonlyPoint: ReadonlyPoint = { x: 1, y: 1 };
// readonlyPoint.x = 5; // Error: Cannot assign to 'x' because it is a read-only property.

console.log("12. Mapped Types:");
console.log("Readonly Point:", readonlyPoint);
console.log("--------------------");

// 13. Conditional Types
type IsString<T> = T extends string ? "yes" : "no";
type T1 = IsString<string>; // "yes"
type T2 = IsString<number>; // "no"

console.log("13. Conditional Types:");
let result1: T1 = "yes";
let result2: T2 = "no";
console.log("IsString<string>:", result1);
console.log("IsString<number>:", result2);
console.log("--------------------");

// 14. Decorators (Experimental - requires enabling in tsconfig.json)
function logged(target: Function) {
    console.log(`Class ${target.name} has been defined.`);
}

@logged
class MyClass {
    constructor() {
        console.log("MyClass instance created.");
    }
}

console.log("14. Decorators:");
new MyClass();
console.log("--------------------");


// 15. Async/Await with Promises
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

async function main() {
  console.log("Starting async operation...");
  await delay(1000);
  console.log("Async operation completed.");
}

console.log("15. Async/Await with Promises:");
main();
console.log("--------------------");