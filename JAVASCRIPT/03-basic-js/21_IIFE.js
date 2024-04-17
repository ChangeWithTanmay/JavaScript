// Immediately Invoked Function Expressions (IIFE)

// () () 
// ()---> frist paranthesis is function declearation.
// ()---> Last paranthesis is function Execution.

(function chai(){ 
    // Name IIFE
    console.log(`DB CONNECTED`);
})(); // ; is mandatore

(() =>{
    console.log(`DB CONNECTED TWO`);
})();

((name) =>{
    console.log(`${name}, DB CONNECTED TWO`);
})("Tanmay");