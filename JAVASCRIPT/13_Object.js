// singleton
// Object.create


// object literals

const mySym=Symbol("key1")

const jsUser={
    name: "Tanmay",
    "full name": "Tanmay Das",
    [mySym]: "mykey1",
    age: 20,
    email: "tanmay@vm.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Suturday"]
}

// output method

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])
// console.log(typeof jsUser[mySym])

jsUser.email="tm@vectosmid.com"
// Object.freeze(jsUser);
jsUser.email="hitesh@vectosmid.com"
// console.log(jsUser)

jsUser.greeting=function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo=function(){
    console.log(`Hello js user is, ${this.age}`)
}

// console.log(jsUser.greeting) // [Function (anonymous)]
console.log(jsUser.greeting()) // [Function (anonymous)]
console.log(jsUser.greetingTwo()) // [Function (anonymous)]
