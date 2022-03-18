const increaseBtn = document.getElementById('btn-increase');
const decreaseBtn = document.getElementById('btn-decrease');
const resetBtn = document.getElementById('btn-reset');
let counter = 0;
const counterDisplay = document.getElementById('counter-display');

increaseBtn.addEventListener("click", function()
{
  counter+=1;
  counterDisplay.innerHTML = counter
});


decreaseBtn.addEventListener('click', () => {
  counter-=1;
  counterDisplay.innerHTML = counter
});


resetBtn.addEventListener('click', () => {
  counter=0;
  counterDisplay.innerHTML = counter
});
