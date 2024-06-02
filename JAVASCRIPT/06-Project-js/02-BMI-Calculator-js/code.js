const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const r2 = document.querySelector('#r2');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } 
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } 
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // show the result
    
   

    results.innerHTML=`<span>${bmi}</span>`;
     if(bmi <= 18.6 && bmi>0)
     {
        r2.innerHTML=`<span> your body BMI level is Low: ${bmi}</span>`;
        r2.style.color='orange';
        r2.style.backgroundColor='#212121';
    r2.style.padding='0px';
     }
     else if( bmi > 18.6 && bmi<=24.9 )
     {
        r2.innerHTML=`<span> your body BMI level is Medium: ${bmi}</span>`;
        r2.style.color='green';
        r2.style.backgroundColor='white';
    r2.style.padding='0px';
     }
     else{
        r2.innerHTML=`<span> your body BMI level is high: ${bmi}</span>`;
        r2.style.color='red';
        r2.style.backgroundColor='#892c2c';
    r2.style.padding='0px';
     }
  }
});