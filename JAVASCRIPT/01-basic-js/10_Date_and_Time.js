// Date ---> object

let myDate=new Date()
// console.log(myDate) // 2024-04-07T14:55:26.192Z
// console.log(myDate.toString())  // Sun Apr 07 2024 20:25:26 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString())  // Sun Apr 07 2024
// console.log(myDate.toLocaleString())  // 7/4/2024, 8:25:26 pm

// console.log(typeof myDate)


// let myCreateDate=new Date(2024,3,7)
// let myCreateDate=new Date(2024,3,7,5,30)
// let myCreateDate=new Date("2024-04-07")
let myCreateDate=new Date("07-04-24")
// console.log(myCreateDate)
// console.log(myCreateDate.toString())
// console.log(myCreateDate.toLocaleString())



// ++++++ Time +++++++

let myTimeStamp = Date.now()  // milisecond --> 1712502589893


// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())

// console.log(Date.now()/1000)  // convert to second.

// console.log(Math.floor(Date.now()/1000)) 


let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1) // 1 --> js month starting for 0
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday: "long"
    
})