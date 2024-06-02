const button=document.querySelectorAll('.button');

const body=document.querySelector('body');

// Access all button in js

button.forEach( (nbt)=>{

    nbt.addEventListener("click", (e)=>{
        console.log(e.target) // nbt is e.target
        console.log(nbt)
        console.log(nbt.id)  // Found id 
        let Ev=e.target.id;
        console.log(Ev)

        // conditional statement

        // if(e.target.id === "blue"  )
        // {
        //     body.style.backgroundColor = e.target.id;
        //     console.log(e.target)
        // }
        // if(e.target.id==='grey'){
        //     body.style.backgroundColor=e.target.id;
        // }

        
        // if(e.target.id==='white'){
        //     body.style.backgroundColor=e.target.id;
        // }

        // if(e.target.id==='yellow'){
        //     body.style.backgroundColor=e.target.id;
        // }

        if(Ev==="blue" || Ev==="yellow" || Ev==="white" || Ev==="grey")
        {
            body.style.backgroundColor=Ev;
        }

    })

})