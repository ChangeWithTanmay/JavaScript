// Object Singleton 

const tinderUser = new Object()  //  {}
// const yc={}  //  {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);    //  { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Tanmay",
            lastname: "Das"
        }
    }
}

// console.log(regularUser.fullname.userfullname)


const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

const obj3 = {
    5: "a",
    6: "b"
}

// const obj4={obj1,obj2,obj3} // That is not wrong code line
// const obj4=Object.assign({},obj1,obj2,obj3) // {} that is resign is empty object {} store value

const obj4 = { ...obj1, ...obj2, ...obj3 } // 90% time use this methods

// console.log(obj4)



const users = [
    {
        id: 1,
        email: "ta@gmail.com"
    },

    {
        id: 1,
        email: "ta@gmail.com"
    },
    {
        id: 1,
        email: "ta@gmail.com"
    }
]



console.log(Object.keys(tinderUser))  // only use for keys
console.log(Object.values(tinderUser)) // only use for values
console.log(Object.entries(tinderUser)) // only use for key and values in Array form

console.log(tinderUser.hasOwnProperty('isLoggedIn')) // true
console.log(tinderUser.hasOwnProperty('ibvdnvjIn')) // false





