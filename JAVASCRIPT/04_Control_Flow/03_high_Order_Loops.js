// For of

// ["", "", ""]
// [{},{},{}]


const arr=[1,2,3,4,5,6,7]

for(const val of arr){
    console.log(val);
}

const geeting='Hello worlds'
for(const getguy of geeting){
    console.log(`Each char: ${getguy}`)
}

// Maps

const map = new  Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value)
}

const myObject={
    'game1':'NFS',
    'game2': 'Spiderman'
}

for (const [key,value] of myObject) {
    console.log(key, '=>', value)
}