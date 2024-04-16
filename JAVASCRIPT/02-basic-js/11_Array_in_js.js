// array

const N=[0,1,2,3,4,40,true,"Tanmay"]
const myArr=[0,1,2,3,4,5]
const myHeros=["shaktiman","batul da"]

const myArr2=new Array(1,2,3,4)
// console.log(myArr[0]);


//+++++++++ Array Methods ++++++++++

// myArr.push(6); // add value in last position
// myArr.push(7); // add value in last position
// myArr.pop(); // Remove last value

myArr.unshift(9)  // add element in frist position
myArr.shift()  // remove element in first position

// console.log(myArr.includes(9)); // Ask question and Return Boolean Value.
// console.log(myArr.indexOf(3)); // Ask question and Return index position Value.

const newArr=myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("A ", myArr)

/* Slice meanse one big array to copy and part cut.
 Here including slice(1,3). That is meaning is 1 to 2 nuber all index copy. */ 

 const myn1=myArr.slice(1,3);

console.log(myn1)

console.log("A2 ", myArr)

/* Splice:- means a big array cut and stote value. 
   Remaining value to store original array*/

   const myn2=myArr.splice(1,3);

console.log("A3 ", myArr)

console.log(myn2)