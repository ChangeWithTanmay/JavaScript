const myObject={
    js: 'javaScript',
    cpp:'C++',
    rb: "ruby",
    swift: "swift by app"
}

for (const key in myObject) {
//    console.log(`${key}, => ${myObject[key]} `)
}

const programmer=["js", "rb", "py", "java", "cpp"]
for (const key in programmer) {
    console.log(programmer[key])
}