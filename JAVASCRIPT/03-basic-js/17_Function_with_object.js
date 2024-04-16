// function --> shopping card.

function calculateCartPrice(...num1){  //  ...rest operator & sprate operator
    return num1; // Now rest operator.
}

// console.log(calculateCartPrice(200,400,500,2000))


const user={
    username: "Tanmay",
    price: 200
}

function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handelObject(user);

handelObject({
    username: "Tanmay",
    price: 300
})

const myNewArr=[200,300,400,500]

function returnSecondArr(getArr){
    // return getArr;   [ 200, 300, 400, 500 ]
    return getArr[1];  // 300
}

console.log(returnSecondArr(myNewArr));