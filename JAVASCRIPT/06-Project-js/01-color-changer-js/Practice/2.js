let btn=document.querySelector('#btn1');

// btn.onclick= (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// };

let box=document.querySelector('div');

// box.onmouseover=(e) =>{
//     console.log('Mouse is hover in box')
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// };


// Event Listeners

// Node.addEventListener(event,callback);

// btn.addEventListener("click", (ev) => {
//     console.log("Button one is clicked. --> handeler 1")
//     console.log(ev)
//     console.log(ev.type)
// })


btn.addEventListener("click", (ev) => {
    console.log("Button one is clicked. --> handeler 1")
    
})
btn.addEventListener("click", (ev) => {
    console.log("Button one is clicked. --> handeler 2")
    
})

const handel3=(ev) => {
    console.log("Button one is clicked. --> handeler 3")
    
}

btn.addEventListener("click", handel3)

btn.addEventListener("click", (ev) => {
    console.log("Button one is clicked. --> handeler 4")
    
})


// Node.removeEventListener(event,callback);


btn.removeEventListener("click",handel3)