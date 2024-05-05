const body=document.querySelector('body');
let div=document.querySelector('div');

let NowMode="yellow";



// body.addEventListener("mouseenter", (e) => {
//     if(NowMode==='yellow')
//     {   
//         NowMode='black'
//         console.log(NowMode)
//         // body.classList.add('yellow')
//         // body.classList.remove('black')
//         body.style.backgroundColor='black'
//         div.style.border='solid green 3px'
//         div.style.backgroundColor='yellow'
//         div.style.color='black'
//     }
//     else{
//         NowMode='yellow'
//         console.log(NowMode)
//         // body.classList.add('black')
//         // body.classList.remove('yellow')
//         body.style.backgroundColor='rgb(255, 255, 0)'
//         div.style.border='solid white 3px'
//         div.style.backgroundColor='black'
//         div.style.color='green'
//     }
// })


body.addEventListener("mouseleave", () => {
    if(NowMode==='yellow')
    {   
        NowMode='black'
        console.log(NowMode)
        // body.classList.add('yellow')
        // body.classList.remove('black')
        body.style.backgroundColor='black'
        div.style.border='solid green 3px'
        div.style.backgroundColor='yellow'
        div.style.color='black'
    }
    else{
        NowMode='yellow'
        console.log(NowMode)
        // body.classList.add('black')
        // body.classList.remove('yellow')
        body.style.backgroundColor='rgb(255, 255, 0)'
        div.style.border='solid white 3px'
        div.style.backgroundColor='black'
        div.style.color='green'
    }
})




// let box=document.querySelector('div');

// box.onmouseover=(e) =>{
//     console.log('Mouse is hover in box')
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// };