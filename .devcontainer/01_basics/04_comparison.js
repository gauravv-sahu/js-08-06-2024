console.log("2" > 1);  //true
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

/*The reason that equality check == 
and comparisons > < <= >=  work differently.
Comparisons convert null to a number, treating 
it as 0.*/ 

console.log(undefined == 0); // all false

// strict check => === checks data type as well
console.log("2" === 2);

// Two types of data primitive and non-primitive
/* 
Primitive: Call by value
String, Boolean, Number, null, undefined, Symbol,
 BigInt

Non-primitive
Array, Object, Functions

JavaScript is a dynamic language and not static,
which means that variables can hold values of
different types during runtime.
Unlike languages such as Typescript or Java,
you don't need to declare the data type of a
variable explicitly.
*/

const score = 100
const scoreInPoints = 22.92

let userEmail;

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id === id2);

const heros = ["shaktiman", "naagraj", "krish"];
let myObj = {
    name: "gaurav",
    age: 22,
}

/* 
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

/*
 Stack-Primitive
 Heap-Non-primitive*/

 let name = akshat

