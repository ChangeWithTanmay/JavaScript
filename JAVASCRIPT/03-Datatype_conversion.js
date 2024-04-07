let score="33"  

console.log(typeof score)
console.log(typeof (score))

/* String To Number Conversion */
let valueInNumber = Number(score)
console.log(typeof (valueInNumber))

/* NaN */

let Now="33ab"  // ""33ab -> is String. 
let ChangeNow=Number(Now)
console.log(typeof ChangeNow)
console.log( ChangeNow)


/* Nall */
let sc=null  

console.log(typeof sc)
console.log(typeof (sc))

let valueInNull = Number(sc)
console.log(typeof (valueInNull))
console.log(valueInNull)


/* undefined  */
let sky=undefined  

console.log(typeof sky)
console.log(typeof (sc))

let valueInun = Number(sky)
console.log(typeof (valueInun))
console.log(valueInun)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


/* Number to Boolean convertion */
let isLoggedIn =1 
let BooleanIsLoggedIn=Boolean(isLoggedIn)
console.log(BooleanIsLoggedIn)
// 10 => true
// 0 => false
// "hi" => true
// "" => false



/*Number to String*/

let isNu=12
let conisNum=String(isNu)
console.log(conisNum)