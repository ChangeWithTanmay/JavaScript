const name="Tanmay"
const repo=50
// console.log(name+ repo+" value")
console.log(`Helloe my name is ${name} and my repo is ${repo}.`)

const gameName= new String('Tanmay-Das'); // New way
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.anchor("https://www.youtube.com/watch?v=sscX432bMZo&list=PPSV"))
console.log(gameName.at())
console.log(gameName.big())
console.log(gameName.blink())
console.log(gameName.bold())
console.log(gameName.charAt(2))

console.log(gameName.indexOf(`o`))
console.log(gameName.charCodeAt())


const new1=gameName.substring(0,4)
console.log(new1)

const new2=gameName.slice(-8,4)
console.log(new2)

const url="https://www.youtube.com/watch?v=sscX432bMZo&list=PPSV"
console.log(url.replace('watch?v=sscX432bMZo&list=PPSV','---'))

console.log(url.includes('youtube'))

console.log(gameName.split('-'))