// This --> current contex refer..

const user={
    username: "Tanmay",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website.`)
        console.log(this)
    }

}

user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()


// console.log(this)

// function chai(){
//     let username="Tanmay";
//     console.log(this.username) // This never use in Function..
// }

// chai()



// const chai=function(){
//     let username="Tanmay"
//     console.log(this.username)
// }


// chai()

/// ++++++++ Arraow Function ++++++++

const chai= () =>{
    let username="Tanmay"
    console.log(this.username)
}




// const addTwo = (num1, num2) =>{   // bassic method
//     return num1+num2;
// }

// const addTwo = (num1, num2) =>num1+num2;  // Advance Method
// const addTwo = (num1, num2) =>(num1+num2);  // Advance Method


// ++++++ Arrow Function Object +++++

const addTwo = () =>({username: "Tanmay"});  // Advance Method



console.log(addTwo())