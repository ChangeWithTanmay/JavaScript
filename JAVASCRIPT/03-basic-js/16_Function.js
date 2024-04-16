function sayMyName() {
    console.log("T");
    console.log("A");
    console.log("N");
    console.log("M");
    console.log("A");
    console.log("Y");
}

// sayMyName()

// function addTwoNum(number1, number2){
//     console.log(number1+number2);
// }

function addTwoNum(number1, number2) {
    // let result=(number1+number2);
    // return result;

    return number1 + number2;
}

const result = addTwoNum(3, 4);

// console.log(result);


// function loginUserMessage(usernmae) {
function loginUserMessage(usernmae = "sam") {
    // if(usernmae===undefined){
    if (!usernmae) {
        console.log("Plese enter a user name.")
        return
    }
    return `${usernmae} just logged in`
}

console.log(loginUserMessage());
