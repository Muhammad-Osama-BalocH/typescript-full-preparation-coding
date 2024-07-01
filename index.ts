// let numbers: number[] = [1, 2, 3, 4, 5, 6];
// let evenNumbers: number[] = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // [2, 4, 6]

import { log } from "console";

// let application : string [] =["Amazon","alibaba","foodpanda","dreving"];
// let nameof = application.push("bikeya")
// console.log(nameof);

// let a : string = "osama";
// let b : string = "faehan";
//  if (a == "osama" || b =="farhan"){
//     console.log("hy osama how are you");
    
//  }else{
//     console.log("by");
    
//  }


// for(let  a=1;  a<=10; a++ ){
//     let number : number = 12
//     let frist = number*a
//     console.log(number +" "+ " * " +a  + " = "  + "  " + number*a);
    

// }

// enum DaysofWeek{
//     Sunday,
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Firday,
//     Saturday
// }

// function checWeekend(day: DaysofWeek){
//     if(day === DaysofWeek.Saturday || day === DaysofWeek.Sunday){
//         console.log(`sunday is a weekend day`);
        
//     }else{
//         console.log(`saturday is a Weekend day.`);
        
//     }
// }

// // function  ko Test karna
// checWeekend(DaysofWeek.Monday); 
// //  output : It's a weekday.
// checWeekend(DaysofWeek.Saturday);
// //  output : It's a weekday!
// checWeekend(DaysofWeek.Sunday);
// //  output : It's a weekday!

// enum DaysofWeek {
//     Sunday,
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday, // Corrected typo
//     Saturday
// }

// function checWeekend(day: DaysofWeek) {
//     if (day === DaysofWeek.Saturday) {
//         console.log("Saturday is a weekend day.");
//     } else if (day === DaysofWeek.Sunday) {
//         console.log("Sunday is a weekend day.");
//     } else {
//         console.log("It's a weekday.");
//     }
// }

// // Testing the function
// checWeekend(DaysofWeek.Monday);    // Output: It's a weekday.
// checWeekend(DaysofWeek.Saturday);  // Output: Saturday is a weekend day.
// checWeekend(DaysofWeek.Sunday);    // Output: Sunday is a weekend day.

// let  myfriends:string[]=["farhan","wajid","saboor","fahad"];
// let number:number[]= [1,2,3,4,5];
// let booleans:boolean[]= [true,false,];
// let mixedArray:any[]= [23,"muhammad",true];
// let array:[]= []
// let nestedArray:any[]= [["mango","apple","banana"], [false,true], [1,2,3,4,5]];


// Asynchronous
// async await
// callbacks
// setTimeout
// promises
// reslove
// reject
// .then
// .catch
// .try



// synchronous code
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

// Asynchronous


// setTimeout (() => {
//     console.log(1);
    
// },1000);  

// console.log(2);
// console.log(3);
// console.log(4);
// async function main() {
//     try {
//       const result1 =  async await doSomething();
//       const result2 = await doSomethingElse(result1);
//       const result3 = await doThirdThing(result2);
//       const result4 = await doFourthThing(result3);
//       console.log('Final result: ' + result4);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   main();


// all loop types practice

// for loop

// for(let count = 1; count <= 100; count ++){
//   console.log("i am so sorry");
  
// };



// let myArray : string[] = ["apple","mango","water melon","banana"];

// for(let fruit in myArray) {   // of loop humra index ma jitna b values hai in ko print kartha hai
//   console.log(fruit);         // in loop humra index ma jitna b number hai in ko print kartha hai
  
// }


// while loop


// let myfriends :string[] =["farhan","imran","imtize","haroon","yasir"];

// let count = 0;
// while(count < 100){
//   count++;
//   console.log(count);
  
// }
 
// do while loop

// let  time = 0;
// do{
//   console.log("hello guys");
  
// }
// while( time <= 10 );

// switch case 

// let day = 3;
// let dayName: string;

// switch (day) {
//   case 1:
//     dayName = "Monday";
//     break;
// case 2:
//     dayName = "Tuesday";
//   break;
//     case 3:
//         dayName = "Wednesday";
//         break;
//     case 4:
//         dayName = "Thursday";
//         break;
//     case 5:
//         dayName = "Friday";
//         break;
//     case 6:
//         dayName = "Saturday";
//         break;
//     case 7:
//         dayName = "Sunday";
//         break;
//     default:
//         dayName = "Invalid day";
// }

// console.log(dayName); // Output: Wednesday


// Unary operator
// let a =3;
// let b =2;
// a++      // initail value 1 number is increment
// b--      // initail value 1 number is decrement
// console.log(a,b);

// let a:number = 6;
// let b:number = 8;
// let c:number;
// c = a++ + ++a + b-- + --b +  a + b++ + b;
// console.log(c);


// use the method of loop and if else condition 

// for(let i= 0; i <= 10; i++){
//     if(i % 2 == 0){
//         console.log("EID MUBARAK");
//     }else{
//         console.log("KHAIR MUBARAK");
        
//     };
// };


// for(let i = 0; i < 10; i++) {
//     if(i % 1 == 11) {
//         console.log("KHAIR MUBARAK");
//     } else {
//         console.log("EID MUBARAK");
//     }
// };


// tuples

// let myArray :[string,number,boolean] = ["osama",23,true];
// console.table(myArray);



// class Student {
//     name:string;
//     fullName:string;
//     passing:boolean;


//     constructor(){
//         this.name = "osama",
//         this.fullName = "muhammad osama",
//         this.passing = true
//     }
// }


//  abstact class

// interface Bookoperations {
//     addbook (book:book):void;
//     removebook (bookId:string):void;
//     getbook (bookId:string):book |null;
// }


// interface book {
//     name:string,
//     anthot:string,
//     publishYear:string
// }
// abstract class library implements Bookoperations{
//     books:Book[] =[];

//     abstract  addBook(book:book):void;
//     abstract removebook(bookId:string):void;
//     abstract getbook(bookId:string):book | null
//     listAllBooks(): book[]{
//         return this.books;
//     }

// }

// class publishlibrary extends library {
//     addBook(book: Book) {
//         this.books.push(book);
        
//     }
//     removeBook(bookId: string): void {
//         this.books = this.books.filter(books  => booksId !== bookId);

//         listAllBooks():books;
        
//     }
// }

// //25/6/2024 tuesday 14 class abstact class in typescript oops

// //abstract class in typescript
// class Student {
//     name: string;
//     fullName: string;
//     passing: boolean;

//     constructor() {
//         this.name = "osama";
//         this.fullName = "muhammad osama";
//         this.passing = true;
//     }
// }

// interface BookOperations {
//     addBook(book: Book): void;
//     removeBook(bookId: string): void;
//     getBook(bookId: string): Book | null;
// }

// interface Book {
//     name: string;
//     author: string;
//     publishYear: string;
// }

// abstract class Library implements BookOperations {
//     books: Book[] = [];

//     abstract addBook(book: Book): void;
//     abstract removeBook(bookId: string): void;
//     abstract getBook(bookId: string): Book | null;

//     listAllBooks(): Book[] {
//         return this.books;
//     }
// }

// class PublishLibrary extends Library {
//     addBook(book: Book): void {
//         this.books.push(book);
//     }

//     removeBook(bookId: string): void {
//         this.books = this.books.filter(book => book.name !== bookId);
//     }

//     getBook(bookId: string): Book | null {
//         const foundBook = this.books.find(book => book.name === bookId);
//         return foundBook || null;
//     }
// }

// // Testing the code
// const library = new PublishLibrary();
// library.addBook({ name: "Book 1", author: "Author 1", publishYear: "2020" });
// library.addBook({ name: "Book 2", author: "Author 2", publishYear: "2021" });

// console.log("All books:", library.listAllBooks());
// console.log("Get Book 1:", library.getBook("Book 1"));
// library.removeBook("Book 1");
// console.log("All books after removal:", library.listAllBooks());


//Asynchronous function


// setTimeout(() => {
//   setTimeout(() => {
//     console.log(1);
//   }, 3000);  // 3 seconds = 3000 milliseconds
//   console.log(2);
// }, 1000);  // 1 second = 1000 milliseconds

// console.log(2);
// console.log(3);
// console.log(4);



function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true; // Success/failure ko simulate kar rahe hain
        if (success) {
          resolve('Data received');
        } else {
          reject('Error fetching data');
        }
      }, 1000);
    });
  }
  
  // Using .then and .catch
  fetchData()
    .then((data) => {
      console.log(data); // Data received
    })
    .catch((error) => {
      console.error(error); // Error fetching data
    });
  
  // Using async/await
  async function getData() {
    try {
      const data = await fetchData();
      console.log(data); // Data received
    } catch (error) {
      console.error(error); // Error fetching data
    }
  }
  
  
  getData();
  
