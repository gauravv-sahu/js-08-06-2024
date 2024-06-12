const name = "Gaurav"
const repo = 50

//console.log(name + repo + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repo}`);
 //string interpolation

const gameName = new String('Clash of Clans')
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('c'));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-8,10)
console.log(anotherString);

const newStringOne = "         ClashOfClans         "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://gaurav.com/gaurav20%sahu"
console.log(url.replace('20%','__'));

console.log(gameName.split(' '));

console.log('Hello my name is ${name} and my repo count is ${repo}');