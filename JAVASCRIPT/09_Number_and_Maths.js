const score=400;
// console.log(score)
const balance=new Number(100);
// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toString().length)


// console.log(balance.toFixed(5))

const otherNumber=1123.8966
// console.log(otherNumber.toPrecision(3))

const hundreds=100000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));



//++++++++ Maths ++++++++

// console.log(Math);
// console.log(Math.abs(4)); // 4
// console.log(Math.abs(-5)); // 5
// console.log(Math.round(9.2)); // 9
// console.log(Math.round(9.7)); // 10
// console.log(Math.ceil(9.7)); // 10
// console.log(Math.floor(9.7)); // 9


// console.log(Math.min(9,7,6,8,10,4)); // 4
// console.log(Math.max(9,7,6,8,10,4)); // 10


console.log(Math.random()); // value = 0 to 1
console.log(Math.random()*10); // value = 0 to 10
console.log((Math.random()*10)+1); // value = 0 to 1
console.log(Math.floor(Math.random()*10)+1); // value = 0 to 1

const min=10
const max = 20

console.log(Math.floor(Math.random()* (max-min+1))) 
console.log(Math.floor(Math.random()* (max-min+1)) +min) 