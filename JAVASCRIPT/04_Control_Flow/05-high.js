const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {
//     console.log(val)
// } )

// coding.forEach( (val) => {
//     console.log(val)
// } )

// function PrintMe(item){
//     console.log(item)
// }

// coding.forEach(PrintMe)


// coding.forEach( (item, index, arr) => {

//     console.log(item, index, arr);

// } )


const myCoding=[
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "C/C++",
        languageFileName: "C"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName, "=>>", item.languageFileName)
    
})
