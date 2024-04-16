const marvel_heros=["thor","Ironman","Spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);    // [ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);   // flash

/*
   const allHeros=marvel_heros.concat(dc_heros)  // [ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]
   console.log(allHeros)   // [ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]
*/

const allHeros=[... marvel_heros,...dc_heros]
// console.log(allHeros)  // [ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]
const threeHeros=[... marvel_heros,...dc_heros,...marvel_heros]


// console.log(threeHeros);           
                     /* 
                        [
                          'thor',      'Ironman',
                          'Spiderman', 'superman',
                          'flash',     'batman',
                          'thor',      'Ironman',
                          'Spiderman'
                        ] 
                    */

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]];

// const real_another_array=another_array.flat(0) // [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4,5 ] ] ]
// const real_another_array=another_array.flat(1) // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
// const real_another_array=another_array.flat(2) // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]
const real_another_array=another_array.flat(Infinity) // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]


// console.log(real_another_array)



console.log(Array.isArray("Tanmay"))
console.log(Array.from("Tanmay"))
console.log(Array.from({name: "Tanmay"}))


let score1=100;
let score2=900;
let score3=400;

console.log(Array.of(score1,score2,score3))