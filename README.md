# TypeScript Full Preparation Coding Examples

This repository contains a comprehensive set of TypeScript coding examples, designed for learning and quick reference. It covers a wide range of TypeScript features from basic types to advanced concepts like decorators and asynchronous programming.

## Getting Started

To get started with these examples, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/Muhammad-Osama-BalocH/typescript-full-preparation-coding.git
cd typescript-full-preparation-coding
npm install
```

## Running the Examples

The primary source file for these examples is `index.ts`. After making any changes or to run the latest examples, you need to compile the TypeScript code into JavaScript.

### Compiling TypeScript

To compile the TypeScript files, use the following command:

```bash
npx tsc
```

This command will compile all `.ts` files in the project (specifically `index.ts` and `app.ts`) and place the resulting JavaScript files (`index.js` and `app.js`) into the `dist` directory, as configured in `tsconfig.json`.

### Running JavaScript

After compilation, you can run the compiled JavaScript file using Node.js:

```bash
node dist/index.js
```
or
```bash
node dist/app.js
```

## Topics Covered

The `index.ts` file (and `app.ts`) includes detailed examples for the following TypeScript topics:

1.  **Basic Types (Expanded)**: `string`, `number`, `boolean`, `any`, `null`, `undefined`, `never`, `unknown`, `symbol`, `bigint`.
2.  **Arrays**
3.  **Tuples**
4.  **Enums**
5.  **Functions (Expanded)**: Type annotations, optional parameters, default parameters, rest parameters.
6.  **Interfaces (Expanded)**: Defining custom types, `readonly` properties, function types, indexable types.
7.  **Classes (Expanded)**: Properties, constructors, methods, inheritance, `static` members, `abstract` classes.
8.  **Generics**: Creating reusable components and functions.
9.  **Union and Intersection Types**
10. **Type Aliases**
11. **Type Guards**: `typeof`, `instanceof`, and user-defined type guards.
12. **Mapped Types**
13. **Conditional Types**
14. **Decorators**: (Experimental feature, enabled via `tsconfig.json`)
15. **Async/Await with Promises**

## Configuration

The `tsconfig.json` file is configured to:
-   Target `ESNext` for modern JavaScript features.
-   Use `NodeNext` for module resolution.
-   Enable `esModuleInterop` for better compatibility with CommonJS modules.
-   Enable `experimentalDecorators` to support decorators.
-   Output compiled JavaScript files to the `dist` directory.
-   Enforce `strict` type-checking.

Feel free to explore the `index.ts` and `app.ts` files for detailed code examples and explanations.
