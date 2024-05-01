// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values=coding.forEach( (item) => {

//     console.log(item)
    
// } )

// console.log(values) // No Return 


const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNumbs = myNums.filter( (num) => num >4)
// const newNumbs = myNums.filter( (num) => {
//     num >4
//     return num
// })

const newNums=[]
myNums.forEach((num)=>{
    if(num>4)
    {
        newNums.push(num)
    }
})

console.log(newNums)


const books=[
    {title: 'Book One', genre: 'Fiction', Publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', Publish: 1982, edition: 2007},
    {title: 'Book Three', genre: 'History', Publish: 1983, edition: 2005},
    {title: 'Book Four', genre: 'Non_Fiction', Publish: 1984, edition: 2020},
    {title: 'Book Five', genre: 'Science', Publish: 1986, edition: 2022},
    {title: 'Book Six', genre: 'Fiction', Publish: 1988, edition: 2014},
    {title: 'Book Seven', genre: 'History', Publish: 1990, edition: 2012},
    {title: 'Book Eight', genre: 'Computer Science', Publish: 1995, edition: 2024},

]


// let UserBooks=books.filter((bk) => bk.genre === `Fiction`) // Find Fiction Books
// UserBooks=books.filter((bk) => bk.Publish >= 1985) // Find Fiction Books
let UserBooks=books.filter((bk) => {
    return bk.genre === `Fiction` && bk.Publish >= 1985
}) // Find Fiction Books in 1995 than Publish


console.log(UserBooks)