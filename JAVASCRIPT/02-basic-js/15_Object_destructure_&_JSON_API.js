// Object Destructuring

const course={
    coursename: "js in Hindi",
    price: "999",
    courseInstuctor: "hitesh"
}

const {courseInstuctor}=course
const {courseInstuctor: techer}=course // object Destructure


console.log(courseInstuctor); // hitesh
console.log(techer);   // hitesh



/*

// JSON 

{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}



[
    {},
    {},
    {}
]
 */

