const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  let d1 = date.toLocaleTimeString();
  // clock.innerHTML= d1
  clock.innerText = d1;
  // console.log(d1)
}, 1000);
