const body=document.querySelector('body');
const box=document.querySelectorAll('.box');

box.forEach(  (b) => {

    b.addEventListener('click', (e) => {
        console.log(e.target)

        if(e.target.id==='grey' || e.target.id==='blue'|| e.target.id==='green' || e.target.id==='red'){
            body.style.backgroundColor=e.target.id;
        }
    })

}  )