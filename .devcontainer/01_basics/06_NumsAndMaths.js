const score = 400
console.log(score);
const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNo = 23.89742
console.log(otherNo.toPrecision(2));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'))

console.log(Math)
console.log(Math.abs(-9));
console.log(Math.round(4.68));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.8));
console.log(Math.min(23,5,54,15,8));
console.log(Math.max(23,5,54,15,8));

console.log(Math.random());
console.log((Math.random()*10)+1);

const min = 10
const max = 30

console.log(Math.random() * (max - min + 1) + min)
//To get no b/w the range of min and max