let modeBtn = document.querySelector('#mode'); // In ID use --> #
let currMode='light';
let body=document.querySelector('body');

modeBtn.addEventListener('click', () =>{
    // console.log("You are trying to change mode");
    if(currMode=== 'light'){
        currMode ='dark';
        // document.querySelector('body').style.backgroundColor="black";
        // document.querySelector('body').style.color="white";

        body.classList.add('c-dark');
        body.classList.remove('b-light');
        
    }else {
        currMode='light';
        // document.querySelector('body').style.backgroundColor="white";
        // document.querySelector('body').style.color="black";
        body.classList.add('b-light');
        body.classList.remove('c-dark');
    }
    

    console.log(currMode);

});