const accountId = 14553 //const=value can not be changed
let accountEmail = "gaurav@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; //if we print this via console the value assigned to it will be undeined

//accountId = 2
accountEmail = "hc@hc.com"
accountCity = "Jabalpur"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])

//diff between var and let; js didn't understand scope and hence let
//is used in js
/* 
use const and let, also you can 
js do not care about semicolon
*/