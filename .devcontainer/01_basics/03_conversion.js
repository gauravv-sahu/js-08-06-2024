let score = null

console.log(typeof score);
console.log(typeof(score)); // as a method

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN i.e not a number is a special type

/*
 "33"=> 33
 "33abc"=>NaN
 true => 1
 false => 0
 null => 0
 undefined => NaN
 */
let isLoggedIn  = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
"" => false 
"Gaurav" => true 
*/

let health = 33
let stringHealth = String(health)
console.log(stringHealth);
console.log(typeof stringHealth);


//**************Operation*************** */

let value = 3
let negValue = -value
console.log(negValue);
console.log(2+2);
console.log(2**3); // two to the power 3
console.log(2%3);

let str1 = "hello"
let str2 = " Gaurav"
console.log(str1 + str2);

console.log("1" + 2);
console.log("1" + "2");
console.log(1 + "2");
console.log("1" + 2 + "2");
console.log(1 + 2 + "2");
console.log(1 + "2" + "2");

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
//readibility issue
let gameCounter = 100
console.log(gameCounter);
gameCounter++
console.log(gameCounter);
++gameCounter
console.log(++gameCounter)